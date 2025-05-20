import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import How from "./components/how";
import Who from "./components/who";

function App() {
	return (
		<div className="flex flex-col min-h-screen bg-blue-900">
			<Header />
			<main className="flex-1">
				<Hero />
				<How />
				<Who />
			</main>
			<Footer />
		</div>
	);
}

export default App;
