import React from "react";
import {createRoot} from "react-dom/client"
import App from "./App";

const rootEl = document.getElementById("root-div")

if(rootEl) {
    const root = createRoot(rootEl)
    root.render(<App/>)
}

