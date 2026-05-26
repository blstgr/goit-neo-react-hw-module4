# goit-neo-react-hw-module4

React homework for Topic 8: Hooks. The app searches Unsplash images by keyword, shows a responsive gallery, loads more results, and opens a larger image with extra details in a modal.

## Links

- Source code: https://github.com/blstgr/goit-neo-react-hw-module4
- Live page on Vercel: add the deployed Vercel URL after deployment

## Tech Stack

- Vite
- React
- Axios
- React Modal
- React Hot Toast
- React Spinners
- CSS Modules

## Requirements Covered

- The project is created with Vite.
- HTTP requests are made with `axios`.
- Notifications use `react-hot-toast`.
- The modal uses `react-modal` and closes on `Esc` or overlay click.
- Component folders in `src/components` contain matching `.jsx` and `.module.css` files.
- Components use default exports.
- Styling is implemented with CSS modules.
- The gallery renders only when images are loaded.
- The loader appears below the gallery while more images are loading.
- The `Load more` button appears only when there are loaded images and more pages are available.

## Environment Variables

Create a `.env` file based on `.env.example`:

```bash
VITE_UNSPLASH_ACCESS_KEY=your_unsplash_access_key
```

The same variable must be added in Vercel project settings before deployment.

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
