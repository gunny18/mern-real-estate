import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import HeaderLayout from "./components/HeaderLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HeaderLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "profile", element: <Profile /> },
        { path: "sign-in", element: <SignIn /> },
        { path: "sign-up", element: <SignUp /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
