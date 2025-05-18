import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toLogin = () => {
		window.location.href = "/login";
	};
	const toRegister = () => {
		window.location.href = "/register";
	};
	// const toContact = () => {
	// 	window.location.href = "/contact";
	// };

	return (
		<div className="w-screen">
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50  shadow-[0_2px_3px_-1px_rgba(254,240,138,0.12)]">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
				{/* Hamburger Icon (mobile) */}
				<div className="md:hidden">
					<button onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
					</button>
				</div>

				{/* Nav links (desktop) */}
				<ul className="hidden md:flex gap-6 mr-4 items-center">
					<button>Contact</button>
					<button onClick={toLogin}>Login</button>
					<button
						onClick={toRegister}
						className="w-fit px-4 h-9 bg-yellow-500 text-blue-950 font-medium rounded-md"
					>
						Register
					</button>
				</ul>

				{/* Nav links (mobile dropdown) */}
				{isOpen && (
					<ul className="absolute top-[2.55rem] left-0 w-full flex flex-col gap-4 px-8 py-4 border-none md:hidden z-50 bg-gray-300">
						<button onClick={toLogin}>Login</button>
						<button onClick={toRegister}>Register</button>
						<button>Contact</button>
					</ul>
				)}
				{/* 				
				<ul className="btns flex gap-10">
					<button onClick={toGoogle} className="">
						Login
					</button>
					<button className="">Login</button>
					<button className="">Login</button>
				</ul>
				<p>jvdv</p> */}
			</nav>
		</div>
	);
};

export default header;
