import { CHANGE_PCARD_INFO } from './pcardInfo-constant.js';

const initialState = {
	pcard_info: [],
}

const change_pcardinfo_reducer = (state=initialState, action) => {
	switch(action.type) {
		case CHANGE_PCARD_INFO:
			return Object.assign({}, state, {pcard_info: action.payload.pcard_info});
		default:
			return state
	}
}

export default change_pcardinfo_reducer;