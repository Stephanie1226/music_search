import { combineReducers } from 'redux';

import change_pcardinfo_reducer from './pcardInfo-reducer';
import pkeyword_reducer from './pkeyword-reducer';
import pcheckboxes_reducer from './pcheckboxes-reducer';

import change_ccardinfo_reducer from './ccardInfo-reducer';
import ckeyword_reducer from './ckeyword-reducer';
import ccheckboxes_reducer from './ccheckboxes-reducer';

export default combineReducers({
  pcardInfo: change_pcardinfo_reducer,
  pkeyword: pkeyword_reducer,
  pcheckboxes: pcheckboxes_reducer,
  ccardInfo: change_ccardinfo_reducer,
  ckeyword: ckeyword_reducer,
  ccheckboxes: ccheckboxes_reducer,
});