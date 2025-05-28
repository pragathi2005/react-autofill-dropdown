# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

# React Autofill Dropdown

A lightweight and customizable React component that provides an autofill (autocomplete) dropdown input.  
It helps users quickly find and select options by typing in a search field with real-time suggestions.

## Features

- Autocomplete dropdown with dynamic filtering  
- Keyboard and mouse navigation support  
- Easy to integrate and customize  
- Built using React functional components and hooks

## Installation

```bash
npm install
npm start
````

## Usage

Import and use the main component in your React app:

import AutofillDropdown from './src/SearchInput.jsx';

function App() {
  return (
    <div>
      <AutofillDropdown />
    </div>
  );
}

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/pragathi2005/react-autofill-dropdown/issues).

## License

This project is licensed under the MIT License.
