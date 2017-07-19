import Vue from "vue";
import * as base from "../libs/common.js";
import comfirmBox from "../components/public/comfirmBox/comfirmBox.vue";
import InfiniteLoading from 'vue-infinite-loading';

import "../css/posQuery.less";

const vm = new Vue({
	el:"#root",
	data:{
		loginKey:base.getUrlParam("LOGINKEY"),
		posList:[],
        comfirm_show:false,
        page:1,
        distance:0
	},
	mounted(){
        // $("#wrap").css({
        //     "height":$(window).height(),
        //     "overflow":"auto"
        // })
        //this.fentchData(this.page);
        
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

        onInfinite(){

            base.useAjax({
                url:"https://v.lefu8.com/alliance-front/pos/findPosList",
                type:"post",
                data:{
                    loginKey:this.loginKey,
                    pageNum:this.page,
                    posSn:"",
                    status:"",
                    sign:base.useMd5([
                        {loginKey:this.loginKey},
                        {pageNum:this.page},
                        {posSn:""},
                        {status:""}
                    ])
                },
                success:(data)=>{

                    console.log(data)
                    data.data.map(function(el,index){
                        vm.posList.push(el);
                    });

                    if(this.page>=5){
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete');
                        return;
                    }
                    else{
                        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
                    }
                    
                    this.page++;

                }
            })
            
        }
	},
    components:{
        comfirmBox,
        InfiniteLoading
    }
});
