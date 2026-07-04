# Chuck Fresco Monorepo

This repository is organized as a deployable monorepo.

## Apps

- `apps/chuckfresco.com` - the public `chuckfresco.com` site.
- `apps/admin.chuckfresco.com` - the future logged-in admin app.
- `apps/api.chuckfreso.com` - a standalone Node API service scaffold.

## Common Commands

Run commands from the repository root:

```sh
npm run start:public
npm run start:admin
npm run build:public
npm run deploy:public
npm run deploy:full

npm run dev:api
npm run build:api
npm run start:api
```

You can also deploy each app separately by pointing your host at the app folder:

- Public site root directory: `apps/chuckfresco.com`
- Admin root directory: `apps/admin.chuckfresco.com`
- API root directory: `apps/api.chuckfreso.com`

The public S3 deploy commands sync only `apps/chuckfresco.com/build/` to `s3://chuckfresco`.

The API currently exposes `GET /health` and `GET /api/health`.
