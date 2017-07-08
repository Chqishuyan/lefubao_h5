import * as types from "./mutation-types.js";

//机具查询列表；
export const closeBox = ({commit}) => {
	commit(types.closeBox);
}
export const comfirmBox = ({commit}) => {
	commit(types.comfirmBox);
}
export const addDrag = ({commit}) => {
	commit(types.addDrag);
}

//机具查询列表；
export const comfirm_toggle = ({commit}) => {
	commit(types.comfirm_toggle);
}
export const comfirm_success = ({commit}) => {
	commit(types.comfirm_success);
}
