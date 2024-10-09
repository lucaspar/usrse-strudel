# US-RSE Tutorial on STRUDEL Kit

STRUDEL Kit is a React-based JavaScript library for building scientific UIs based on the STRUDEL Design System and Task Flows.

This repository contains a simple example of a STRUDEL Kit tutorial, created during the US-RSE 2024 workshop, hosted by [Cody O'Donnell](https://github.com/codytodonnell).

+ [STRUDEL Kit Repo](https://github.com/strudel-science/strudel-kit)
+ [STRUDEL Kit Docs](https://strudel.science/strudel-kit/docs/)
+ [US-RSE Full Tutorial](https://strudel.science/strudel-kit/docs/guides/tutorials/usrse/)

## Running

```bash
# install uv and npm
uv sync
cd my-app
npm start
```

Open [localhost:5175](http://localhost:5175/) to view it in your browser.

## Building

Or how to create your own:

```bash
uv run strudel create-app my-app

cd my-app
npm install
npm start

uv run strudel add-taskflow my-taskflow -t explore-data
```

Edit `my-app/src/pages/my-taskflow/_config/taskflow.config.ts` to configure the task flow.

Edit `my-app/src/theme.tsx` to customize the theme.
