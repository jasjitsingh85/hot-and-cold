
import { SET_GAME_VALUE, ADD_GUESS } from '../actions'

const initialState = {
	game_value : null,
	guesses : []
}

export const hotOrColdReducer = (state = initialState, action) => {
	if (action.type === SET_GAME_VALUE) {
		return Object.assign({}, state, {
			game_value : action.game_value
		});
	} else if (action.type === ADD_GUESS) {
		return Object.assign( {}, state, {...state, guesses : [...state.guesses, action.guess]})
	}
	return state;
}