import { useState } from "react";
import "./App.css";
import * as contentful from "contentful";
import Footer from "./components/footer/Footer";

function App() {
	const client = contentful.createClient({
		space: "0es9dhvy2g8b",
		environment: "master", // defaults to 'master' if not set
		accessToken: "6izYEm6gSNbyeheG8JBrqct5U1tuE-HpFD-HbN7kD9I",
	});

	client
		.getEntries({
			content_type: "Gallery",
		})
		.then((entry) => console.log(entry))
		.catch(console.error);

	return (
		<>
			
			<Footer />
		</>
	);
}

export default App;
