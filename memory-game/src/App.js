import React, { useState, useEffect } from "react";

import "./styles/normalize.css";
import "./styles/styles.css";

import Header from "./components/Header";
import Scooreboard from "./components/Scoreboard";
import PlayArea from "./components/PlayArea";

const words = [
	"affix",
	"amaze",
	"admin",
	"agaze",
	"abuzz",
	"abuse",
	"above",
	"abort",
	"about",
	"abyss",
	"aches",
	"acids",
	"acres",
	"actor",
	"acute",
	"adapt",
	"added",
	"adept",
	"admin",
	"admit",
	"adult",
];

function App() {
	return (
		<div>
			<Header />
			<Scooreboard currentScore="0" hiScore="10" />
			<PlayArea words={words} />
		</div>
	);
}

export default App;
