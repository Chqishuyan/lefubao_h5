import * as types from '../mutation-types';
import * as base from "../../libs/common.js";
import api from "../../../api.config.js";

const state = {
	posList:[],
    comfirm_show:false,
    testData:1
}

const mutations = {
	[types.loadData](state){
		base.useAjax({
			url:api.ip+"pos/findPosList",
			data:{
            	loginKey:base.getUrlParam("LOGINKEY"),
                pageNum:1,
                posSn:"",
                status:"",
                sign:base.useMd5([
                    {loginKey:base.getUrlParam("LOGINKEY")},
                    {pageNum:1},
                    {posSn:""},
                    {status:""}
                ])
         	},
         	success:function(data){
         		console.log(data);
         		data.data.map(function(el,index){
         			state.posList.push(el);
         		});
         	}
		})
	},
	[types.comfirm_toggle](state){
		state.comfirm_show = !state.comfirm_show;
        $(document).bind('touchmove',function(e){
            e.preventDefault();
        });
	},
	[types.comfirm_success](state){
        state.comfirm_show = false;
        $(document).unbind('touchmove');
        alert("执行成功的回调")
    }
}

export default {
    state,
    mutations
}