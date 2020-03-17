import { C_CHECKBOXES_CHANGED } from './ccheckboxes-constant.js';

export const c_checkboxes_changed = (status) => {
	return {
		type: C_CHECKBOXES_CHANGED,
		payload: {
			cCheckStatus: status
		},
	}
}