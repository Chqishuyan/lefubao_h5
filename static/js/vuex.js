import store from "../vuex/store.js";
import {mapState,mapGetters,mapActions} from "vuex";
import Vue from "vue";
import comfirmBox from "../components/public/comfirmBox/comfirmBox.vue";
import "../css/posQuery.less";
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

var vm = new Vue({
	el:"#root",
	store,
	mounted(){
		store.commit('loadData');
		$(".lfb").height($(window).height())
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
		...mapActions(['comfirm_toggle','comfirm_success']),
		refresh(done){
			setTimeout(()=>{
				var start = this.top - 1
		        store.commit('loadData');
		        this.top = this.top - 10;
		        done();
			},1000)
		},
		infinite(done){

			setTimeout(()=>{
				var start = self.bottom + 1;
		        //store.commit('loadData');
		        self.bottom = self.bottom + 10;
		        done();
			},1500);

		}
	},
	components:{
		comfirmBox
	}
})