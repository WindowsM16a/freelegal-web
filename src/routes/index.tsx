import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/404";
import Login from "../pages/login";
import Register from "../pages/register";
import Hero from "../components/hero";
import Submit from "../pages/submit";
import AnonSubmit from "../pages/anonSubmit";


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
