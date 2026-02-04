import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Fontsource - Self-hosted fonts for better FCP
import "@fontsource/ibm-plex-sans/300.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "@fontsource/ibm-plex-sans/700.css";
import "@fontsource/dm-serif-text/400.css";
import "@fontsource/dm-serif-text/400-italic.css";
import "@fontsource/source-code-pro/400.css";
import "@fontsource/source-code-pro/500.css";
import "@fontsource/source-code-pro/600.css";

createRoot(document.getElementById("root")!).render(<App/>);
