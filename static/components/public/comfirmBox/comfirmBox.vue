<template>
<div>
	<transition name="opacityIn">
		<div class="lfb_vue_comfirmBg" v-if="comfirm_show"></div>
	</transition>

	<transition name="fade">
		<div class="lfb_vue_comfirmBox" v-if="comfirm_show">
			<slot></slot>
			<div class="footer">
				<a href="javascript:;" @click="closeBox">取消</a>
				<a href="javascript:;" @click="comfirmBox">确定</a>
			</div>
		</div>
	</transition>
</div>
</template>

<script>
	
	export default{
		data(){
			return {
				isShow:false
			}
		},
		props:{
			comfirm_show:false
		},
		methods:{
			closeBox(){
				this.isShow = false;
				this.$emit("comfirm_toggle",this.isShow);
				this.addDrag()
			},
			comfirmBox(){
				this.isShow = false;
				this.$emit("comfirm_success",this.isShow);
				this.addDrag();
			},
			addDrag(){
				$(document).unbind('touchmove');
			}
		}
	}
</script>

<style lang="less">
	@import url("./index.less");
</style>
