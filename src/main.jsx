import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Quiz from "./Components/Quiz.jsx";
import Result from "./Components/Result.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { CheckUserExist } from "./helper/helper.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quiz",
    element: <CheckUserExist><Quiz /></CheckUserExist> ,
  },
  {
    path: "/result",
    element: <CheckUserExist><Result /></CheckUserExist>,
  },
]);
createRoot(document.getElementById("root")).render(
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
);
