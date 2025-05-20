import { createBrowserRouter } from "react-router-dom";
import App from "../app";
import Login from "../pages/login";
import Register from "../pages/register";
import NotFound from "../pages/404";
import Hero from "../components/hero";
import AnonSubmit from "../pages/anonSubmit";
import Submit from "../pages/submit";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <NotFound />,
	},
	{
		path: "/login",
		element: <Login />,
		errorElement: <NotFound />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <NotFound />,
	},
	{
		path: "/hero",
		element: <Hero />,
		errorElement: <NotFound />,
	},
	{
		path: "/submit",
		element: <Submit />,
		errorElement: <NotFound />,
	},
	{
		path: "/anonsubmit",
		element: <AnonSubmit />,
		errorElement: <NotFound />,
	},
]);

export default router;
