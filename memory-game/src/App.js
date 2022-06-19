import React, { useState, useEffect } from "react";

import "./styles/normalize.css";
import "./styles/styles.css";

import uniqid from "uniqid";

import Header from "./components/Header";
import Scooreboard from "./components/Scoreboard";
import PlayArea from "./components/PlayArea";
import Card from "./components/Card";

let words = [
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

let cards = words.map((word, index) => {
	return <Card word={word} key={uniqid()} />;
});

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		let j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

let wordsCopy = [...cards];
shuffle(cards);

function App(props) {
	let [currentScore, setCurrentScore] = useState(0);
	let [hiScore, setHiScore] = useState(0);
	console.log(cards);

	return (
		<div id="overall-wrapper" className="fl-col-cont">
			<Header />
			<Scooreboard currentScore={currentScore} hiScore={hiScore} />
			{/* <PlayArea words={wordsCopy} /> */}
			<PlayArea cards={cards} />
		</div>
	);
}

export default App;
