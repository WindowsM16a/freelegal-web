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

						<div className="tabContent peer-checked:opacity-100 peer-checked:z-10 opacity-0 z-0 bg-white">
							<div className="caseTable">
								<h2 className="text-2xl font-semibold mb-4 font-[inter]">
									Available Pro Bono Cases
								</h2>
								<div className="overflow-x-auto bg-slate-300 ">
									<table className="w-full min-w-[1000px] border border-gray-200 rounded-lg">
										<thead>
											<tr className="tableRow bg-gray-50 border-b">
												<th className="px-6 py-4 text-left text-sm font-medium text-gray-600">
													ID
												</th>
												<th className="px-6 py-4 text-left text-sm font-medium text-gray-600 min-w-[250px]">
													Title
												</th>
												<th className="px-6 py-4 text-left text-sm font-medium text-gray-600 min-w-[180px]">
													Category
												</th>
												<th className="px-6 py-4 text-left text-sm font-medium text-gray-600 min-w-[120px]">
													Date
												</th>
												<th className="px-6 py-4 text-left text-sm font-medium text-gray-600 min-w-[120px]">
													Status
												</th>
												<th className="px-6 py-4 text-left text-sm font-medium text-gray-600 min-w-[300px]">
													Actions
												</th>
											</tr>
										</thead>
										<tbody>
											<tr className="tableRow border-b hover:bg-gray-50">
												<td className="px-6 py-4 text-sm font-medium text-gray-900">
													#1
												</td>
												<td className="px-6 py-4 text-sm text-gray-900 font-medium">
													Wrongful Eviction Case
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													Housing/Tenancy
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													2025-05-10
												</td>
												<td className="px-6 py-4">
													<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
														New
													</span>
												</td>
												<td className="px-6 py-4">
													<div className="flex gap-3">
														<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
															<FileText className="w-4 h-4" /> View
														</button>
														<button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
															Express Interest
														</button>
													</div>
												</td>
											</tr>
											<tr className="tableRow border-b hover:bg-gray-50">
												<td className="px-6 py-4 text-sm font-medium text-gray-900">
													#2
												</td>
												<td className="px-6 py-4 text-sm text-gray-900 font-medium">
													Domestic Violence Restraining Order
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													Family Law
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													2025-05-12
												</td>
												<td className="px-6 py-4">
													<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
														In Progress
													</span>
												</td>
												<td className="px-6 py-4">
													<div className="flex gap-3">
														<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
															<FileText className="w-4 h-4" /> View
														</button>
														<button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-600 bg-gray-200 rounded-md">
															Withdraw
														</button>
													</div>
												</td>
											</tr>
											<tr className="tableRow border-b hover:bg-gray-50">
												<td className="px-6 py-4 text-sm font-medium text-gray-900">
													#3
												</td>
												<td className="px-6 py-4 text-sm text-gray-900 font-medium">
													Wage Theft Dispute
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													Employment
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													2025-05-08
												</td>
												<td className="px-6 py-4">
													<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
														In Progress
													</span>
												</td>
												<td className="px-6 py-4">
													<div className="flex gap-3">
														<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
															<FileText className="w-4 h-4" /> View
														</button>
														<button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
															Express Interest
														</button>
													</div>
												</td>
											</tr>
											<tr className="tableRow border-b hover:bg-gray-50">
												<td className="px-6 py-4 text-sm font-medium text-gray-900">
													#5
												</td>
												<td className="px-6 py-4 text-sm text-gray-900 font-medium">
													Consumer Fraud Case
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													Consumer Rights
												</td>
												<td className="px-6 py-4 text-sm text-gray-700">
													2025-05-15
												</td>
												<td className="px-6 py-4">
													<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
														New
													</span>
												</td>
												<td className="px-6 py-4">
													<div className="flex gap-3">
														<button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
															<FileText className="w-4 h-4" /> View
														</button>
														<button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600">
															Express Interest
														</button>
													</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
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
