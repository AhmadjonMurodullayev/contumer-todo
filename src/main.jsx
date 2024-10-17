import { createRoot } from "react-dom/client";
import { TodoProvider } from "./providers/todo-provider/todo-provider.jsx";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <TodoProvider>
    <App />
  </TodoProvider>
);
