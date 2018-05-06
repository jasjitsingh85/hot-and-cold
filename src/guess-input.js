import React, { Component } from 'react';
import './guess-input.css';
import {connect} from 'react-redux';
import {addGuess} from './actions';
import store from './store';

export class GuessInput extends Component {
	constructor(props) {
		super(props);
	}

	onSubmit (event) {
		event.preventDefault();
		this.props.dispatch(addGuess(this.textInput.value));
		this.props.onSubmit(null);
		console.log(store.getState().game_value);
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


export default connect()(GuessInput);