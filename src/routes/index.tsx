import { createBrowserRouter } from "react-router-dom";
import App from "../../src/app";
import Login from "../../src/pages/login";
import Register from "../../src/pages/register";
import NotFound from "../../src/pages/404";
import Hero from "../../src/components/hero";
import AnonSubmit from "../../src/pages/anonSubmit";
import Submit from "../../src/pages/submit";

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
