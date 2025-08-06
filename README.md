# React + TypeScript + Webpack Boilerplate

This project demonstrates how to create a React application from scratch using **Webpack**, **TypeScript**, and **Babel**, without using Create React App (CRA). It serves as a boilerplate for custom setups, enabling greater flexibility and control over the build configuration.

---

## 🛠️ Project Setup Workflow

### 1. Initialize the Project

Begin by creating a new project directory and initializing it with `npm init`. This generates the `package.json` file, which is the foundation for managing dependencies.

---

### 2. Install Required Dependencies

The next step is to install all the necessary packages:

- **Webpack and Related Packages**: To bundle modules and serve the application in development mode.
- **Loaders**: Required to process different file types like TypeScript, CSS, etc.
- **Babel Presets**: To transpile modern JavaScript, React JSX, and TypeScript.
- **React & React DOM**: Core libraries for building the UI.
- **TypeScript and Type Definitions**: Enable type safety and modern development features.

Dependencies were installed in logical groups based on purpose — first the build tools (webpack, loaders, presets), then the app libraries (React, ReactDOM), followed by development utilities (TypeScript and type definitions).

---

### 3. Configure Webpack

After installing the dependencies, the next step was to create the `webpack.config.js` file in the root directory.

This configuration includes:

- **Entry Point**: Defines the starting file of the application.
- **Output**: Specifies the directory and filename for the bundled code.
- **Resolve Options**: Handles file extensions and optional aliasing.
- **Module Rules**: Declares loaders used to handle `.tsx`, `.css`, or other file types.
- **Plugins**: Includes plugins like `HtmlWebpackPlugin` to manage HTML file injection.
- **DevServer**: Enables live reloading, sets the port, and manages routing support using `historyApiFallback`.

Each section of the Webpack config was added step-by-step to ensure a modular and understandable build process.

---

### 4. Create HTML Entry Template

An `index.html` file was created, either in the `public` or `src` folder, containing a single `div` element with a unique `id`. This acts as the mount point for the React application.

---

### 5. Build the React Entry Point

Inside the `src` folder, a TypeScript-based entry file (`index.tsx`) was created. In this file, React's root rendering method is used to mount the main component to the HTML's root `div`.

This confirms the basic setup is working and connects the frontend with the Webpack-processed build.

---

### 6. TypeScript Configuration

To integrate TypeScript:

- A `tsconfig.json` file was generated using the TypeScript CLI.
- Compiler options such as `target`, `module`, `jsx`, and `moduleResolution` were customized based on the React + Webpack environment.

This configuration ensures proper type checking and compatibility with Babel and Webpack.

---

### 7. Define NPM Scripts

Custom scripts were added to the `package.json` file:

- **start**: Launches the development server with hot reloading enabled.
- **test**: Placeholder for future test scripts.

The start script uses `webpack-dev-server` to serve the application during development with all the custom configuration in place.

---

## 🔄 Loaders – The Backbone of Build Process

In this setup, loaders are the key to making Webpack understand and process various types of files:

- **Babel Loader**: Transpiles JavaScript, JSX, and TypeScript.
- **CSS Loader** and **Style Loader**: Handles importing and injecting styles.
- Additional loaders can be added as needed (e.g., file-loader, image-loader).

Without appropriate loaders, Webpack cannot interpret file types beyond plain JavaScript.

---

## ✅ Summary

This boilerplate provides full control over the frontend build pipeline. The project was configured entirely from scratch to offer:

- Fine-tuned build behavior
- Flexibility in choosing tools and loaders
- Clean and scalable architecture
- Learning opportunity for mastering Webpack, Babel, and TypeScript integration

This setup can now be extended further by adding testing libraries, state management solutions, or production-ready optimization techniques.

---

## 👤 Author

**Naresh Baleboina**

---

If you clone or fork this repository, simply run `npm install` followed by `npm start` to get the development server running.

