import React, { Component } from 'react';
import './guess-box.css';
import GuessOutput from './guess-output.js'
import GuessInput from './guess-input.js'

export default class GuessBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text : "Make your Guess",
			randomNumber : this.generateRandomNumber()
		}
	}

	generateRandomNumber() {
		return Math.floor(Math.random() * 100) + 1;
	}

	madeGuess(guess) {
		let difference = Math.abs(this.state.randomNumber - guess);
		if (difference === 0) {
			this.setState({ text : "You guessed correctly!"});
		} else if (difference > 0 && difference < 20) {
			this.setState({ text : "You are warm!"});
		} else {
			this.setState({ text : "You are cold!"});
		}
	}

	render() {
		return (
			<div>
				<h1 className="title"> {this.props.title}</h1>
				<div className="guess-box">
					<GuessOutput text={ this.state.text } />
					<GuessInput onSubmit={guess => this.madeGuess(guess)} />
				</div>
			</div>
		)
	}

}

GuessBox.defaultProps = {
    title: 'HOT or COLD'
};
