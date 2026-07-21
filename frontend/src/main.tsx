import { StrictMode } from "react";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />

      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            background: "#181028",
            color: "#ffffff",
            border: "1px solid rgba(168,85,247,.35)",
            borderRadius: "14px",
            padding: "14px 18px",
            fontWeight: "600",
          },
        }}
      />

    </BrowserRouter>
  </StrictMode>
);
