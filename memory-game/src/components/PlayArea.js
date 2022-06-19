import React, { useState, useEffect } from "react";
import Card from "./Card";

import uniqid from "uniqid";

function PlayArea({ cards }) {
	return (
		<div id="play-area">
			{/* {words.map((word, i) => {
				if (i >= 9) return;
				return <Card key={i} word={word} />;
			})} */}
			<div className="grid">
				{cards.map((card, i) => {
					if (i >= 10) return;
					return <React.Fragment key={card.key}>{card}</React.Fragment>;
				})}
			</div>
		</div>
	);
}

export default PlayArea;
