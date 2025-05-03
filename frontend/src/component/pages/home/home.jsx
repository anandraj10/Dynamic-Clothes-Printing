import React from "react";
import Navbar from "./navbar";
import Maincontent from "./maincontent";
import Footer from "./footer"

const home = () => {
	return (
		<div>
			<Navbar/>
            <Maincontent/>
            <Footer/>
			
		</div>
	);
};

export default home;