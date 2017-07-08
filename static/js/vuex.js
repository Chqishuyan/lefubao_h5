import store from "../vuex/store.js";
import {mapState,mapGetters,mapActions} from "vuex";
import Vue from "vue";
import comfirmBox from "../components/public/comfirmBox/comfirmBox.vue";
import "../css/posQuery.less";

var vm = new Vue({
	el:"#root",
	store,
	mounted(){
		store.commit('loadData');
	},
	computed:{
		...mapState({
			posList: state => state.posQuery.posList,
			comfirm_show: state => state.posQuery.comfirm_show,
			testData: state => state.posQuery.testData
		}),
		...mapGetters(['checkStatus'])
	},
	methods:{
		...mapActions(['comfirm_toggle','comfirm_success'])
	},
	components:{
		comfirmBox
	}
})