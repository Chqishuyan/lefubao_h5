<template>
	<div class="lfb_loadMore">
		加载更多
	</div>
</template>

<script>
	export default{

		methods:{
			onInfinite(){
				$(window).scroll(function(){
	                let scrollTop = $(this).scrollTop();
	                let scrollHeight = $(document).height();
	                let windowHeight = $(this).height();

	                console.log("scrollTop："+scrollTop+"|scrollHeight："+scrollHeight+"|windowHeight："+windowHeight)
	            })
				this.$emit("onInfinite");
			}
		}
	}
</script>

