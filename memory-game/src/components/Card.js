import React, { useState, useEffect } from "react";

function Card({ word }) {
	return (
		<button className="card fl-row-cont fl-centered">
			<p>{word}</p>
		</button>
	);
}

export default Card;
