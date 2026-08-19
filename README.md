# blog.anserena.com

Source files for <https://blog.anserena.com>, built with [Zola](https://getzola.com).

## Build

[Install Zola](https://www.getzola.org/documentation/getting-started/installation/),
which is just a single binary, then build with

```bash
zola build
```

For a development server (defaulting to `127.0.0.1:1111`):

```bash
zola serve
```

## Pre-commit hooks

Pre-commit hooks are managed with `prek`.
To use, install [prek](https://prek.j178.dev/installation/) then run

```bash
prek install
```
