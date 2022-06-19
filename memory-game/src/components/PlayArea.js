import React, { useState, useEffect } from "react";
import Card from "./Card";

function PlayArea({ words }) {
	return (
		<div>
			{words.map((word, i) => {
				return <Card key={i} word={word} />;
			})}
		</div>
	);
}

export default PlayArea;
