import React, { useState, useEffect } from "react";
import CurrentScore from "./CurrentScore";
import HiScore from "./HiScore";

function Scooreboard(props) {
	const { currentScore, hiScore } = props;
	return (
		<div>
			<p>Click on a word exactly once.</p>
			<p>If you click on the same word twice, the score will reset!</p>
			<p>Let's see how high you can score! </p>
			<CurrentScore currentScore={currentScore} />
			<HiScore hiScore={hiScore} />
		</div>
	);
}

export default Scooreboard;
