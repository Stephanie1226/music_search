import { CHANGE_CCARD_INFO } from './ccardInfo-constant.js';

const initialState = {
	ccard_info: [],
}

const change_ccardinfo_reducer = (state=initialState, action) => {
	switch(action.type) {
		case CHANGE_CCARD_INFO:
			return Object.assign({}, state, {ccard_info: action.payload.ccard_info});
		default:
			return state
	}
}

export default change_ccardinfo_reducer;