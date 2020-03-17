import { POP_KEYWORD } from './pkeyword-constant.js';

export const change_pop_keyword = (pkw) => {
	return {
		type: POP_KEYWORD,
		payload: {
			p_keyword: pkw
		},
	}
}