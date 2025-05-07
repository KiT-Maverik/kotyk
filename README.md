<div align="center">
    <img src="img/starrrrrr.png" alt="KOTYK" style="max-width: 300px;">
</div>

> 🇺🇦 **KOTYK** isn't just a cat — it's a **Ukrainian-grade configuration layer**.
> Strict, type-safe, and always watching your `environment` variables like a guardian.
> No `undefined`, no silent failures, and absolutely no mercy for missing `API_KEY`s.

---

## 🚀 Features

- ✅ Just like real cats, KOTYK reacts instantly — that's why it's implemented in seconds.
- ✅ Built with [Zod](https://github.com/colinhacks/zod) for runtime type safety
- ✅ Fails fast at startup if any variables are missing or invalid
- ✅ Automatically cached via the module system — import it anywhere
- ✅ No more scattered `process.env.X` — just `environment.X`
- ✅ Designed for backend apps, CLI tools, SSR, and monorepos

---

## 🔠 What does KOTYK stand for?

> **K**onfigured
> **O**nly
> **T**yped
> **Y**ielded
> **K**eys

Yes, "Konfigured" with a **K**. Because this isn't just another kitty — **KOTYK** is a proud 🇺🇦😼

---

## 📦 Installation

```bash
yarn add zod dotenv
```

---

## 🧩 KOTYK lives in `env.kotyk.ts`

```ts
import 'dotenv/config';
import { z } from 'zod';

const schema = z.object({
  WHISKER_API_KEY: z.string().min(1, 'WHISKER_API_KEY is required'),
  SCRATCH_RETRY_LIMIT: z.coerce.number().int().min(0, 'Must be non-negative'),
});

export const environment = schema.parse(process.env) as const;

export type Environment = z.infer<typeof schema>;
```

---

## ✅ Usage Example

```ts
import { environment } from 'env.kotyk.js';

if (retries > environment.SCRATCH_RETRY_LIMIT) {
  throw new Error('😾 Too many retries! KOTYK scratched the request.');
}
```

---

## 🧾 .env.example

```env
WHISKER_API_KEY=your-whisker-key
SCRATCH_RETRY_LIMIT=3
```

---

## 🧠 Philosophy

* 🔥 If a variable is missing — KOTYK will stop the build
* 😼 If you try `undefined` — KOTYK will paw your CI
* 🎯 No more `as string`, `|| ''`, or `parseInt()` scattered everywhere
* 🐾 KOTYK is not just a config helper — it's your **trusted configuration sentinel**

---

## 🌟 Give the kitty a star!

If this little 🇺🇦 KOTYK made your config safer or brought a smile to your CI — consider giving it a ⭐️!

---

## 🌐 License

**MIT**

But KOTYK reserves the right to stare disapprovingly at anyone who touches `process.env` directly.
