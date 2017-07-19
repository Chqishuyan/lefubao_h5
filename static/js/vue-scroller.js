import Vue from "vue";
import * as base from "../libs/common.js";
import comfirmBox from "../components/public/comfirmBox/comfirmBox.vue";
import "../css/posQuery.less";
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

import "../css/posQuery.less";

const vm = new Vue({
	el:"#root",
	data:{
		loginKey:base.getUrlParam("LOGINKEY"),
		posList:[],
        comfirm_show:false,
        page:1
	},
	mounted(){

        $(".lfb").height($(window).height())
        this.fentchData(this.page);
        this.top = 1
      	this.bottom = 20
        
	},
	methods:{
        comfirm_toggle(){
            this.comfirm_show = !this.comfirm_show;
            $(document).bind('touchmove',function(e){
                e.preventDefault();
            });
        },
        comfirm_success(){
            this.comfirm_show = false;
            // $(document).unbind('touchmove');
            alert("执行成功的回调")
        },
        fentchData(page){
            
            base.useAjax({
                url:"https://v.lefu8.com/alliance-front/pos/findPosList",
                type:"post",
                data:{
                    loginKey:this.loginKey,
                    pageNum:page,
                    posSn:"",
                    status:"",
                    sign:base.useMd5([
                        {loginKey:this.loginKey},
                        {pageNum:page},
                        {posSn:""},
                        {status:""}
                    ])
                },
                success:(data)=>{

                    console.log(data)
                    data.data.map(function(el,index){
                        vm.posList.push(el);
                    });

                }
            })
        },
        refresh(done){
			setTimeout(()=>{
				var start = this.top - 1;
				this.posList = [];
				this.page = 1;
		        this.fentchData(1);
		        this.top = this.top - 10;
		        done();
			},1000)
		},
		infinite(done){

			// if(this.posList){
	  //           setTimeout(() => {
	  //               //没有数据了 执行 finishInfinite(2)
	  //               this.$refs.myScroller.finishInfinite(2);
	  //           })
	  //           return;
	  //       }

			// console.log(this.page)
			// setTimeout(()=>{
			// 	let start = this.bottom + 1
		 //        this.fentchData(this.page);
		 //        this.page ++;
		 //        this.$refs.myScroller.finishPullToRefresh();
		 //        done();
		 //        this.bottom + 10;
			// },1000);
		} 
	},
    components:{
        comfirmBox
    }
});
