import { C_CHECKBOXES_CHANGED } from './ccheckboxes-constant.js';

const initialState = {
	cCheckStatus: [],
}

const ccheckboxes_reducer = (state=initialState, action) => {
	switch(action.type) {
		case C_CHECKBOXES_CHANGED:
			return Object.assign({}, state, {cCheckStatus: action.payload.cCheckStatus});
		default:
			return state
	}
}


export default ccheckboxes_reducer;