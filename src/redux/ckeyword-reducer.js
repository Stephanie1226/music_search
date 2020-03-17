import { CLASSICAL_KEYWORD } from './ckeyword-constant.js';

const initialState = {
	c_keyword: 'flbexonfpcdgoyleq',
}

const ckeyword_reducer = (state=initialState, action) => {
	switch(action.type) {
		case CLASSICAL_KEYWORD:
			return Object.assign({}, state, {c_keyword: action.payload.c_keyword});
		default:
			return state
	}
}


export default ckeyword_reducer;