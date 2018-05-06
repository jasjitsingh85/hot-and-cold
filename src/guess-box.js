import React, { Component } from 'react';
import './guess-box.css';
import GuessOutput from './guess-output.js'
import GuessInput from './guess-input.js'
import {connect} from 'react-redux';
import {setGameValue} from './actions';
import store from './store';

export class GuessBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text : "Make your Guess",
		}

		this.props.dispatch(setGameValue(this.generateRandomNumber()));
	}

	generateRandomNumber() {
		return Math.floor(Math.random() * 100) + 1;
	}

	madeGuess(guess) {
		let randomNumber = store.getState().game_value;
		let guesses_array = store.getState().guesses;
		let last_guess = guesses_array[guesses_array.length - 1];
		let difference = Math.abs(randomNumber - last_guess);
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

export default connect()(GuessBox);