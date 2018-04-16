import React, { Component } from 'react';
import './guess-input.css';

export default class GuessInput extends Component {
	constructor(props) {
		super(props);
	}

	onSubmit (event) {
		event.preventDefault();
		this.props.onSubmit(this.textInput.value);
	}

	render() {
		return (
			<form className="guess-input" onSubmit={(e) => this.onSubmit(e)}>
				<input type="text" ref={input => this.textInput = input} />
				<button>Guess</button>
			</form>
		)
	}

}