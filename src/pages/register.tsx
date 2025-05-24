import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Register = () => {
	const location = useLocation();

	const handleClientRadio = () => {
		const clientForm = document.getElementById("clientForm");
		const volunteerForm = document.getElementById("volunteerForm");
		const legalRepForm = document.getElementById("legalRepForm");
		clientForm?.classList.remove("hidden");
		clientForm?.classList.add("flex");
		volunteerForm?.classList.remove("flex");
		volunteerForm?.classList.add("hidden");
		legalRepForm?.classList.remove("flex");
		legalRepForm?.classList.add("hidden");
	};
	const handleVolunteerRadio = () => {
		const clientForm = document.getElementById("clientForm");
		const volunteerForm = document.getElementById("volunteerForm");
		const legalRepForm = document.getElementById("legalRepForm");
		clientForm?.classList.remove("flex");
		clientForm?.classList.add("hidden");
		volunteerForm?.classList.remove("hidden");
		volunteerForm?.classList.add("flex");
		legalRepForm?.classList.remove("flex");
		legalRepForm?.classList.add("hidden");
	};
	const handleLegalRepRadio = () => {
		const clientForm = document.getElementById("clientForm");
		const volunteerForm = document.getElementById("volunteerForm");
		const legalRepForm = document.getElementById("legalRepForm");
		clientForm?.classList.remove("flex");
		clientForm?.classList.add("hidden");
		volunteerForm?.classList.remove("flex");
		volunteerForm?.classList.add("hidden");
		legalRepForm?.classList.remove("hidden");
		legalRepForm?.classList.add("flex");
	};

	const handleFirm = () => {
		const firmName = document.getElementById("firmNameDiv");
		const individual = document.getElementById("individualDiv");
		firmName?.classList.remove("hidden");
		firmName?.classList.add("flex");
		individual?.classList.remove("flex");
		individual?.classList.add("hidden");
	};

	const handleIndividual = () => {
		const firmName = document.getElementById("firmNameDiv");
		const individual = document.getElementById("individualDiv");
		firmName?.classList.remove("flex");
		firmName?.classList.add("hidden");
		individual?.classList.remove("hidden");
		individual?.classList.add("flex");
	};

	useEffect(() => {
		if (location.state?.from === "partner") {
			const lawFirm = document.getElementById(
				"lawFirmRep"
			) as HTMLInputElement | null;

			if (lawFirm) lawFirm.checked = true;
		}
		if (location.state?.from === "heroReqAid") {
			const requestAid = document.getElementById(
				"client"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "heroVolunteer") {
			const requestAid = document.getElementById(
				"studentOrManager"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoSubmit") {
			const requestAid = document.getElementById(
				"client"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoVolunteer") {
			const requestAid = document.getElementById(
				"studentOrManager"
			) as HTMLInputElement | null;

			if (requestAid) requestAid.checked = true;
		}
		if (location.state?.from === "whoFirm") {
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
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 shadow-[0_1.5px_4px_-1px_rgba(255,255,255,0.3)]">
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
										onClick={handleClientRadio}
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Client seeking legal assistance
								</label>
							</div>
							<div>
								<label
									htmlFor="volunteer"
									className="flex gap-2 items-center hover:cursor-pointer"
								>
									<input
										type="radio"
										name="userType"
										value="volunteer"
										id="volunteer"
										onClick={handleVolunteerRadio}
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Law student / Account manager
								</label>
							</div>
							<div>
								<label
									htmlFor="legalRep"
									className="flex gap-2 items-center hover:cursor-pointer"
								>
									<input
										type="radio"
										name="userType"
										value="legalRep"
										id="legalRep"
										onClick={handleLegalRepRadio}
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Legal Representative
								</label>
							</div>
						</div>
						<div id="clientForm" className="flex flex-col gap-5 mt-3">
							<label
								htmlFor="name"
								className="flex flex-col gap-2.5 text-gray-600 font-medium"
							>
								<span>
									Full Name <span className="text-red-500">*</span>
								</span>
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
								<span>
									Email <span className="text-red-500">*</span>
								</span>
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
								<span>
									Password <span className="text-red-500">*</span>
								</span>
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
								<span>
									Confirm Password <span className="text-red-500">*</span>
								</span>
								<input
									type="password"
									name="password"
									placeholder="eg: **********"
									className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800
								"
								/>
							</label>
						</div>
						<div id="volunteerForm" className="hidden flex-col gap-5 mt-3">
							<label
								htmlFor="name"
								className="flex flex-col gap-2.5 text-gray-600 font-medium"
							>
								<span>
									Full Name <span className="text-red-500">*</span>
								</span>
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
								<span>
									Email <span className="text-red-500">*</span>
								</span>
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
								<span>
									Password <span className="text-red-500">*</span>
								</span>
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
								<span>
									Confirm Password <span className="text-red-500">*</span>
								</span>
								<input
									type="password"
									name="password"
									placeholder="eg: **********"
									className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800
								"
								/>
							</label>
							<label
								htmlFor="schoolName"
								className="flex flex-col gap-2.5 text-gray-600 font-medium"
							>
								School Name (optional)
								<input
									type="text"
									name="schoolName"
									id="schoolName"
									placeholder="eg: UPSA Law School"
									className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
								/>
							</label>
						</div>
						<div id="legalRepForm" className="hidden flex-col gap-5 mt-3">
							<label
								htmlFor="name"
								className="flex flex-col gap-2.5 text-gray-600 font-medium"
							>
								<span>
									Full Name <span className="text-red-500">*</span>
								</span>
								<input
									required
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
								<span>
									Email <span className="text-red-500">*</span>
								</span>
								<input
									required
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
								<span>
									Password <span className="text-red-500">*</span>
								</span>
								<input
									required
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
								<span>
									Confirm Password <span className="text-red-500">*</span>
								</span>
								<input
									required
									type="password"
									name="password"
									placeholder="eg: **********"
									className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800
								"
								/>
							</label>
							<div id="firmOrIndividual" className="flex gap-2">
								<label
									htmlFor="firm"
									className="flex gap-1 text-gray-600 font-medium cursor-pointer"
								>
									<input
										type="radio"
										name="firmOrIndividual"
										id="firm"
										onClick={handleFirm}
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Firm
								</label>
								<label
									htmlFor="individual"
									className="flex gap-1 text-gray-600 font-medium cursor-pointer"
								>
									<input
										type="radio"
										name="firmOrIndividual"
										id="individual"
										onClick={handleIndividual}
										className="mt-[0.1rem] hover:cursor-pointer accent-blue-900"
									/>
									Individual
								</label>
							</div>
							<div id="individualDiv" className="hidden">
								<p>Placeholder</p>
							</div>
							<div id="firmNameDiv" className="hidden">
								<label
									htmlFor="firmName"
									id="firmName"
									className="flex flex-col gap-2.5 text-gray-600 font-medium"
								>
									<span>
										Firm Name <span className="text-red-600">*</span>
									</span>
									<input
										type="text"
										name="firmName"
										id="firmName"
										placeholder="eg: Pearson Hardmann"
										className="border-[0.3px] border-gray-300 rounded-md h-10 lg:h-10 px-3 font-normal text-black focus:outline focus:outline-1 focus:outline-blue-800"
									/>
								</label>
							</div>
						</div>
						<button
							type="submit"
							className="bg-blue-950 w-full h-10 text-white rounded-md mt-3 mb-1"
						>
							Register
						</button>
						<p>
							<span className="text-red-600">*</span> required field
						</p>
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
