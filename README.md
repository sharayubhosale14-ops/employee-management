# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
# Employee Management System

## screenshots

### Login page
<img width="1920" height="1080" alt="Login_pg" src="https://github.com/user-attachments/assets/31f1825c-138b-4158-9a1a-7e318e2d8cc9" />

### Dashboard, Date & Time Picker
<img width="1920" height="1080" alt="dashboard png" src="https://github.com/user-attachments/assets/a1b178d4-cc9d-4e98-b47d-5fe2a90f1d3e" />

### Employee Form
<img width="1920" height="1080" alt="employee-form png" src="https://github.com/user-attachments/assets/b38d1f04-4d5c-4d92-b662-7fe6b80a9ab9" />

### DataGrid
<img width="1920" height="1080" alt="datagrid png" src="https://github.com/user-attachments/assets/3ea9a325-ef2a-47d5-87eb-db8c252101d7" />

### Charts
<img width="1920" height="1080" alt="charts png" src="https://github.com/user-attachments/assets/11159558-7e8a-4ade-a2c4-aa0bc1981aa0" />


# Employee Management Dashboard

A React + TypeScript Employee Management Dashboard.

## Features

- JWT Authentication
- Protected Routes
- React Query
- Employee CRUD
- MUI DataGrid
- Recharts Analytics
- Notifications
- Date & Time Pickers
- Responsive UI


## Tech Stack

- React
- TypeScript
- Tailwind CSS
- MUI
- React Query
- Recharts
- React Router
# Author
SHARAYU BHOSALE
