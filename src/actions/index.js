export const SET_GAME_VALUE = "GAME_VALUE";
export const setGameValue = (game_value) => ({
	type: SET_GAME_VALUE,
	game_value
})

export const ADD_GUESS = "ADD_GUESS";
export const addGuess = (guess) => ({
	type: ADD_GUESS,
	guess
})