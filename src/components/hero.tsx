import { useNavigate } from "react-router-dom";

const Hero = () => {
	const navigate = useNavigate();
	const handleRequestAid = () => {
		navigate("/register", { state: { from: "heroReqAid" } });
	};
	const handleVolunteer = () => {
		navigate("/register", { state: { from: "heroVolunteer" } });
	};

	return (
		<div className="w-full max-h-screen pt-16 ">
			<div className="w-full pb-40 bg-blue-900 flex flex-col items-center justify-start">
				<div
					id="container"
					className="mt-[30%] sm:mt-[17%] md:mt-[30%] lg:mt-[9%] flex flex-col items-center text-center"
				>
					<div
						id="heading"
						className="w-[85%] flex flex-col justify-center gap-6 lg:w-full lg:gap-8"
					>
						<h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white">
							Justice, Made Accessible
						</h1>
						<p className="text-base sm:text-lg md:text-lg font-semibold lg:text-xl lg:font-semibold text-white mb-4">
							Get access to free legal support. No barriers. No fees.
						</p>
					</div>
					<div
						id="CTAS"
						className="flex flex-wrap w-full justify-center gap-5 mt-4"
					>
						<button
							onClick={handleRequestAid}
							className="w-fit py-2 px-5 text-blue-950 bg-yellow-400 text-lg font-semibold rounded-lg shadow-sm shadow-blue-900/40 hover:bg-yellow-400/90"
						>
							Request Legal Aid
						</button>
						<button
							onClick={handleVolunteer}
							className="w-fit py-2 px-5 text-blue-900 bg-white text-lg font-semibold rounded-md shadow-sm shadow-blue-950/40 hover:bg-gray-200"
						>
							Volunteer as a Law Student
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
