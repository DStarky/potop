# Заявки по ЧС

Этот проект использует [Next.js](https://nextjs.org/), инициализирован с помощью [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Как работать?

```bash
npm i # установить зависимости
```

Пока устанавливаются нодомодули:

Cкачать и поместить бинарник [Pocketbase](https://pocketbase.io/docs/) в `./pocketbase`.

```bash
# настроить конфиг
cp .env.example .env

# запустить Pocketbase
npm run db:serve

# в другом запустить дев сервер Next.js
npm run dev
```

Сервер запустится на [http://localhost:3000](http://localhost:3000).
