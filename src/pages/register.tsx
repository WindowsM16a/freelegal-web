// import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
	const location = useLocation();

	useEffect(() => {
		if (location.state?.from === "partner") {
			console.log("Navigated from partner");
			const lawFirm = document.getElementById(
				"lawFirmRep"
			) as HTMLInputElement | null;

			if (lawFirm) lawFirm.checked = true;
		}
		if (location.state?.from === "heroReqAid") {
			console.log("Legal aid request");
			const requestAid = document.getElementById(
				"client"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "heroVolunteer") {
			console.log("Legal aid request");
			const requestAid = document.getElementById(
				"studentOrManager"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoSubmit") {
			console.log("Legal aid request");
			const requestAid = document.getElementById(
				"client"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoVolunteer") {
			console.log("Legal aid request");
			const requestAid = document.getElementById(
				"studentOrManager"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoFirm") {
			console.log("Legal aid request");
			const requestAid = document.getElementById(
				"lawFirmRep"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
	}, [location]);

	const handleRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 ">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
			</nav>
			<div className="w-full min-h-screen flex mt-28 sm:28 md:mt-28 lg:mt-28 justify-center">
				<div className="w-[90%] sm:w-[80%] md:w[30rem] lg:w-[35rem] h-fit border-[1.1px] border-gray-200 rounded-md py-6 px-6 sm:py-6 sm:px-7 md:px-5 md:py-5 lg:px-7 lg:py-8 flex flex-col items-center">
					<div id="header" className="flex flex-col items-center mb-8">
						<h1 className="text-2xl font-semibold mb-3">
							Welcome to Freelegal
						</h1>
						<p className="font-normal text-gray-600">
							Enter your details to create your account
						</p>
					</div>
					<form
						onSubmit={handleRegistration}
						className="flex flex-col w-full gap-5"
					>
						<label
							htmlFor="email"
							className="flex flex-col gap-2.5 text-gray-600 font-medium"
						>
							Full Name
							<input
								type="name"
								name="name"
								placeholder="John Doe"
								className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10  px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
							/>
						</label>
						<label
							htmlFor="email"
							className="flex flex-col gap-2.5 text-gray-600 font-medium"
						>
							Email
							<input
								type="email"
								name="email"
								placeholder="name@example.com"
								className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10  px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
							/>
						</label>
						<label
							htmlFor="password"
							className="flex flex-col gap-2.5 text-gray-600 font-medium"
						>
							Password
							<input
								type="password"
								name="password"
								placeholder="eg: **********"
								className="border-[0.7px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
							/>
						</label>
						<label
							htmlFor="password"
							className="flex flex-col gap-2.5 text-gray-600 font-medium"
						>
							Confirm Password
							<input
								type="password"
								name="password"
								placeholder="eg: **********"
								className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800
"
							/>
						</label>
						<div
							id="userType"
							className="flex flex-col w-full text-[0.9rem] text-blue-950/95 font-semibold"
						>
							<p className="text-gray-900/80">I am registering as: </p>
							<div>
								<label
									htmlFor="client"
									className="flex gap-2 items-center hover:cursor-pointer"
								>
									<input
										type="radio"
										name="userType"
										value="client"
										id="client"
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Client seeking legal assistance
								</label>
							</div>
							<div>
								<label
									htmlFor="studentOrManager"
									className="flex gap-2 items-center hover:cursor-pointer"
								>
									<input
										type="radio"
										name="userType"
										value="studentOrManager"
										id="studentOrManager"
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Law student / Account manager
								</label>
							</div>
							<div>
								<label
									htmlFor="lawFirmRep"
									className="flex gap-2 items-center hover:cursor-pointer"
								>
									<input
										type="radio"
										name="userType"
										value="lawFirmRep"
										id="lawFirmRep"
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Law firm representative
								</label>
							</div>
						</div>
						<button
							type="submit"
							className="bg-blue-950 w-full h-10 text-white rounded-md mt-3 mb-1"
						>
							Register
						</button>
					</form>
					<span className="text-sm mt-2">
						Already have an account?{" "}
						<a href="/login" className="text-blue-900 font-semibold">
							Login
						</a>
					</span>
				</div>
			</div>
		</>
	);
};

export default Register;
