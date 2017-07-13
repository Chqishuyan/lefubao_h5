import Vue from "vue";
import * as base from "../libs/common.js";
import comfirmBox from "../components/public/comfirmBox/comfirmBox.vue";

import "../css/posQuery.less";

const vm = new Vue({
	el:"#root",
	data:{
		loginKey:base.getUrlParam("LOGINKEY"),
		posList:[],
        comfirm_show:false
	},
	mounted(){

		base.useAjax({
			url:"https://v.lefu8.com/alliance-front/pos/findPosList",
			type:"post",
			data:{
            	loginKey:this.loginKey,
                pageNum:1,
                posSn:"",
                status:"",
                sign:base.useMd5([
                    {loginKey:this.loginKey},
                    {pageNum:1},
                    {posSn:""},
                    {status:""}
                ])
         	},
         	success:function(data){
         		console.log(data);
         		data.data.map(function(el,index){
         			vm.posList.push(el);
         		});
         	}
		})
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
        }
	},
    components:{
        comfirmBox
    }
});
