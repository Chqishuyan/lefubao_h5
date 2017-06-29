<template>
	<div class="login">
		<h2>欢迎加入乐富宝</h2>
		<div class="register_table">
			<table>
				<tr>
					<td>
						<input type="tel" placeholder="请输入您的手机号" maxlength="11">
					</td>
				</tr>
				<tr>
					<td>
						<input type="tel" placeholder="请输入验证码" maxlength="6">
					</td>
				</tr>
				<tr>
					<td>
						<input type="text" placeholder="请输入密码">
					</td>
				</tr>
				<tr>
					<td>
						<input type="text" placeholder="请再次输入密码">
					</td>
				</tr>
			</table>
		</div>
		<div class="subBtn">
			<button>注册</button>
		</div>
	</div>
</template>

<script>

	import Vue from "vue";

	export default{
		data(){
			return{

			}
		},
		mounted(){
			console.log(this.$route.query)
		}
	}
</script>

<style lang="less" scoped>
	.login{
		width: 92%;
		margin: 0 auto;
		overflow: hidden;
		padding-top: 26px;
		h2{
			width: 100%;
			display: block;
			text-align: center;
			font-size: 21px;
			margin-bottom: 30px;
		}
	}
</style>
