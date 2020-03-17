import { CLASSICAL_KEYWORD } from './ckeyword-constant.js';

export const change_classical_keyword = (ckw) => {
	return {
		type: CLASSICAL_KEYWORD,
		payload: {
			c_keyword: ckw
		},
	}
}