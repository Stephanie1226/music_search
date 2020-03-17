import { CHANGE_CCARD_INFO } from './ccardInfo-constant.js';

export const change_ccardinfo = (info) => {
	return {
		type: CHANGE_CCARD_INFO,
		payload: {
			ccard_info: info
		},
	}
}