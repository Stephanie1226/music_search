import { P_CHECKBOXES_CHANGED } from './pcheckboxes-constant.js';

export const p_checkboxes_changed = (status) => {
	return {
		type: P_CHECKBOXES_CHANGED,
		payload: {
			pCheckStatus: status
		},
	}
}