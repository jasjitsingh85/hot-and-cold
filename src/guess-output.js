
import React, { Component } from 'react';
import './guess-output.css';

export default function GuessOutput(props) {
	return (
			<div className="guess-output">
				<span>{props.text}</span>
			</div>
		)
}
