import Vue from "vue";
import Vuex from "vuex";
import * as actions from './actions.js';
import * as getters from './getters.js';
import posQuery from './modules/posQuery.js';

Vue.use(Vuex);

export default new Vuex.Store({
	getters,
	actions,
	modules:{
		posQuery
	}
})
