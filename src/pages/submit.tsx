import React, { useState, useEffect } from "react";
import Header from "../components/header";

const Submit = () => {
	const [showModal, setShowModal] = useState(false);

	const handleAnonSubmissionReq = () => {
		window.location.href = "/anonsubmit";
	};

	const handleFormSubmission = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setShowModal(true);
	};

	useEffect(() => {
		const handleEscapeKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setShowModal(false);
		};
		document.addEventListener("keydown", handleEscapeKey);
		return () => document.removeEventListener("keydown", handleEscapeKey);
	}, []);

	return (
		<div className="w-full min-h-screen px">
			<Header />
			<div className="flex flex-col items-center mt-16 py-12 px-6 ">
				<form
					onSubmit={handleFormSubmission}
					className="w-full max-w-[45rem] border-[0.1px] border-gray-300/80 rounded-md shadow-[-3px_3px_12px_rgba(0,0,0,0.08)] p-8 flex flex-col gap-6"
				>
					<div id="title" className="flex flex-col items-start w-[98%] ">
						<h1 className="text-2xl font-bold">Submit a Pro Bono Case</h1>
						<p className="text-base text-slate-900/70">
							Please provide details about your legal situation so we can match
							you with the right help
						</p>
					</div>
					<div
						id="anonSubmission"
						className="bg-yellow-200/10 border border-yellow-400/40 rounded-lg shadow[-3px_3px_12px_rgba(0,0,0,0.09)] "
					>
						<div className="text-center flex flex-col py-4 gap-2 items-center">
							<h2 className="text-lg font-medium">Concerned about privacy?</h2>
							<p>
								You can submit your case without sharing your personal
								information
							</p>
							<button
								onClick={handleAnonSubmissionReq}
								className="w-[90%] text-center px-5 py-2 bg-yellow-400 rounded-md my-2 font-semibold hover:bg-yellow-500/90"
							>
								Make an anonymous submission
							</button>
						</div>
					</div>
					<div id="inputs" className="w-full flex flex-col gap-6 ">
						<label
							htmlFor="caseTitle"
							className="flex flex-col text-lg font-semibold gap-2"
						>
							<span>
								Case Title <span className="text-red-500">*</span>
							</span>
							<input
								required
								type="text"
								name="caseTitle"
								id="caseTitle"
								placeholder="Brief title describing your legal issue"
								className="border border-slate-400/80 rounded-md text-base font-normal h-10 px-4   focus:outline focus:outline-slate-900"
							/>
						</label>
						<label
							htmlFor="caseTitle"
							className="flex flex-col text-lg font-semibold gap-2"
						>
							<span>
								Legal Category <span className="text-red-500">*</span>
							</span>
							<select
								required
								name="cars"
								id="cars"
								className="border border-slate-400/80 rounded-md text-base font-medium h-10 px-4   focus:outline focus:outline-slate-900 cursor-pointer focus:bg-white text-blue-950"
							>
								<option value="selectCategory" disabled>
									Select category
								</option>
								<option value="abuse">Abuse</option>
								<option value="familyLaw">Family Law</option>
								<option value="immigration">Immigration</option>
								<option value="housingOrTenancy">Housing/Tenancy</option>
								<option value="employment">Employment</option>
								<option value="consumerRights">Consumer Rights</option>
								<option value="criminalDefense">Criminal Defense</option>
								<option value="other">Other</option>
							</select>
						</label>
						<label
							htmlFor="description"
							className="flex flex-col text-lg font-semibold gap-2"
						>
							<span>
								Case Description <span className="text-red-500">*</span>
							</span>
							<textarea
								required
								name="description"
								id="description"
								placeholder="Please describe your legal situation in detail. Include relevant facts, timelines, and what kind of help you're seeking"
								className="border border-slate-400/80 rounded-md text-sm text-start font-normal h-32 px-4 py-2 focus:outline focus:outline-slate-900"
								data-gramm={false}
								spellCheck={false}
							/>
						</label>
						<label
							htmlFor="name"
							className="flex flex-col text-lg font-semibold gap-2"
						>
							<span>
								Contact Name <span className="text-red-500">*</span>
							</span>
							<input
								required
								type="name"
								name="name"
								id="name"
								placeholder="John Doe"
								className="border border-slate-400/80 rounded-md text-base font-normal h-10 px-4   focus:outline focus:outline-slate-900"
							/>
						</label>
						<label
							htmlFor="tel"
							className="flex flex-col text-lg font-semibold gap-2"
						>
							<span>
								Phone Number <span className="text-red-500">*</span>
							</span>
							<input
								required
								type="tel"
								name="tel"
								id="tel"
								placeholder="(+233)-000-000"
								className="border border-slate-400/80 rounded-md text-base font-normal h-10 px-4   focus:outline focus:outline-slate-900"
							/>
						</label>
						<label
							htmlFor="email"
							className="flex flex-col text-lg font-semibold gap-2"
						>
							<span>
								Email <span className="text-red-500">*</span>
							</span>
							<input
								required
								type="email"
								name="email"
								id="email"
								placeholder="email@example.com"
								className="border border-slate-400/80 rounded-md text-base font-normal h-10 px-4   focus:outline focus:outline-slate-900"
							/>
						</label>
					</div>
					<button
						type="submit"
						className="w-full text-center px-5 py-2 bg-blue-900 shadow-[-3px_3px_12px_rgba(0,0,0,0.15)] text-white text-lg font-semibold rounded-md mt-4 hover:bg-blue-950"
					>
						Submit Case
					</button>
					<p className="text-sm text-slate-500">
						Your information is kept confidential and will only be shared with
						approved law firms and account managers.
					</p>
					<p>
						<span className="text-red-600">*</span> required field
					</p>
				</form>
				{showModal && (
					<>
						<div
							id="modal"
							className="fixed inset-0 z-50 flex items-center justify-center"
						>
							<div className="w-full max-w-[32rem] bg-blue-700 flex flex-col items-center justify-center text-white rounded-lg px-8 py-6 gap-4 shadow-[3px_3px_12px_rgba(0,0,0,0.25)]">
								<p className="text-2xl font-semibold">
									Case Submitted Successfully!
								</p>
								<p className="text-xl font-medium">Case ID: 2BO98XC</p>
								<p className="text-base">Press Esc to dismiss</p>
							</div>
						</div>
						<div id="modalBG" className="fixed inset-0 bg-black/70 z-40"></div>
					</>
				)}
			</div>
		</div>
	);
};

export default Submit;
