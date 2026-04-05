# Bear Family UI

Home server dashboard for the Bear Family. Built with React, Vite, and Tailwind CSS. Served in production via nginx in a Docker container.

## Development

Requires Docker Desktop.

```bash
docker compose watch
```

Starts the Vite dev server on `http://localhost:5173` with hot reload.

## Production

```bash
docker compose --profile prod up --build
```

Builds the static bundle and serves it via nginx on port `80`.

To bring it down:

```bash
docker compose --profile prod down
```

## Deploying to the server

Build and push the image to a registry (e.g. GHCR):

```bash
docker build --target production -t thomaspetersen1/bearfamily-ui:latest ./bearfamily-ui
docker push thomaspetersen1/bearfamily-ui:latest
```

On the server, pull and restart:

```bash
docker compose pull
docker compose up -d
```

## Adding a service to the Instructions page

1. Add a `.md` file to `bearfamily-ui/public/instructions/`
2. Add an entry to the `services` array in `src/pages/Instructions.tsx`:

```ts
{
  id: 'myservice',
  label: 'My Service',
  icon: 'material_icon_name',
  description: 'One line description.',
  mdFile: '/instructions/myservice.md',
}
```

Icons are from [Material Symbols](https://fonts.google.com/icons).
