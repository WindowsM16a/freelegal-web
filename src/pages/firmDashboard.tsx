import { FileText, MessageSquare, FileSearch, Briefcase } from "lucide-react";

const FirmDashboard = () => {
	return (
		<>
			<nav className="w-full h-16 bg-blue-900 text-white items-center justify-between flex px-8 lg:px-20 fixed top-0 left-0 z-50 border-b-4 border-white">
				<a href="/" className="text-xl font-bold">
					<img src="/" alt="freelegal logo" />
				</a>
			</nav>
			<div className="w-full max-h-screen flex flex-col  mt-20 justify-start border border-green-400 px-8 py-4">
				<div id="heading" className="flex flex-col gap-2">
					<h1 className="text-3xl font-[649]">Case Portal</h1>
					<p className="text-slate-600">Browse and express interest in cases</p>
				</div>
				<div id="tab-container" className="tabContainer">
					<input type="radio" name="caseTabs" id="availableCases" />
					<label htmlFor="availableCases">
						<div className="tabName peer-checked:bg-[var(--button-bg-color)] peer-checked:border peer-checked:border-[var(--button-border)] peer-checked:font-[560]">
							<FileSearch className="w-5" />
							Available Cases
						</div>
						<div className="tabContent">
							<div id="" className="um">
								hj
							</div>
						</div>
					</label>

					<input type="radio" name="caseTabs" id="interestedCases" />
					<label htmlFor="interestedCases">
						<div className="tabName peer-checked:bg-[var(--button-bg-color)] peer-checked:border peer-checked:border-[var(--button-border)] peer-checked:font-[560]">
							<Briefcase className="w-5" />
							My Interested Cases
						</div>
						<div className="tabContent">
							<p>interested</p>
						</div>
					</label>
				</div>
			</div>
		</>
	);
};

export default FirmDashboard;
