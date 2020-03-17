import { POP_KEYWORD } from './pkeyword-constant.js';

const initialState = {
	p_keyword: 'flbexonfpc',
}

const pkeyword_reducer = (state=initialState, action) => {
	switch(action.type) {
		case POP_KEYWORD:
			return Object.assign({}, state, {p_keyword: action.payload.p_keyword});
		default:
			return state
	}
}


export default pkeyword_reducer;