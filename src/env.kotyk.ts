import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
    WHISKER_API_KEY: z.string().min(1, 'WHISKER_API_KEY is required'),
    SCRATCH_RETRY_LIMIT: z.coerce.number().int().min(0, 'Must be non-negative'),
});

export type Environment = z.infer<typeof schema>;

export const environment: Readonly<Environment> = Object.freeze(
    (() => {
        try {
            return schema.parse(process.env);
        } catch (err) {
            console.error('😿 Failed to validate environment variables! KOTYK refuses to start.');
            console.error('📦 Did you forget to copy .env.example and set your secrets?\n');
            throw err;
        }
    })()
);
