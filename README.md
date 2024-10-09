# US-RSE Tutorial on STRUDEL Kit

+ [Guide](https://strudel.science/strudel-kit/docs/guides/tutorials/usrse/#customizing-the-theme)

## How to run this

```bash
uv sync
cd my-app
npm start
```

## How this was created

```bash
uv run strudel create-app my-app

cd my-app
npm install
npm start

uv run strudel add-taskflow my-taskflow -t explore-data
```

Edit `my-app/src/pages/my-taskflow/_config/taskflow.config.ts` to configure the task flow.

## Configuring

...
