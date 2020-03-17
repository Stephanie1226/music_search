import { P_CHECKBOXES_CHANGED } from './pcheckboxes-constant.js';

const initialState = {
	pCheckStatus: [],
}

const pcheckboxes_reducer = (state=initialState, action) => {
	switch(action.type) {
		case P_CHECKBOXES_CHANGED:
			return Object.assign({}, state, {pCheckStatus: action.payload.pCheckStatus});
		default:
			return state
	}
}


export default pcheckboxes_reducer;