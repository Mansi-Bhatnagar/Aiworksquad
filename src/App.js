import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Pages/Root";
import LoginPage from "./Pages/Login";
import ChatPage from "./Pages/Chat";
const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      { path: "", element: <LoginPage /> },
      { path: "chatpage", element: <ChatPage /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
