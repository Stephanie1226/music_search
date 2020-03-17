import { CHANGE_PCARD_INFO } from './pcardInfo-constant.js';

export const change_pcardinfo = (info) => {
	return {
		type: CHANGE_PCARD_INFO,
		payload: {
			pcard_info: info
		},
	}
}