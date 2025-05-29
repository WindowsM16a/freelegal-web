import { FileText, FileSearch, Briefcase } from "lucide-react";
// MessageSquare will be imported later

const FirmDashboard = () => {
	return (
		<>
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 border-b-4 border-white">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
			</nav>
			<div className="w-full flex flex-col mt-20 justify-start border border-green-400 px-8 py-4">
				<div id="heading" className="flex flex-col gap-2">
					<h1 className="text-3xl font-[649]">Case Portal</h1>
					<p className="text-slate-600">Browse and express interest in cases</p>
				</div>
				<div id="tab-container" className="tabContainer">
					<div>
						<input
							type="radio"
							name="caseTabs"
							id="availableCases"
							className="peer"
						/>

						<label
							htmlFor="availableCases"
							className="tabName peer-checked:bg-white peer-checked:border peer-checked:shadow-[1px_0.5px_2px_rgba(0,0,0,0.1)]"
						>
							<FileSearch className="w-3.5 sm:w-4 md:5 lg:5" />
							Available Cases
						</label>

						<div className="tabContent w-[90vw] peer-checked:opacity-100 peer-checked:z-10 opacity-0 z-0 bg-white overflow-x-auto">
							<div className="caseTable">
								<h2 className="text-2xl font-semibold mb-4 font-[inter]">
									Available Pro Bono Cases
								</h2>
								<div className="overflow-x-auto bg-slate-300 "></div>
							</div>
						</div>
					</div>

					<div>
						<input
							type="radio"
							name="caseTabs"
							id="interestedCases"
							className="peer"
						/>

						<label
							htmlFor="interestedCases"
							className="tabName peer-checked:bg-white peer-checked:border peer-checked:shadow-[1px_0.5px_2px_rgba(0,0,0,0.1)]"
						>
							<Briefcase className="w-3.5 sm:w-4 md:5 lg:5" />
							My Interested Cases
						</label>

						<div className="tabContent peer-checked:opacity-100 peer-checked:z-10 opacity-0 z-0">
							<h2>Cases You've Expressed Interest In</h2>
							<table></table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FirmDashboard;
