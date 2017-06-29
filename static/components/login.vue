<template>
	<div class="login">
		<h2>欢迎回到乐富宝</h2>
		<div class="register_table">
			<table>
				<tr>
					<td>
						<input type="tel" placeholder="请输入您的手机号" maxlength="11">
					</td>
				</tr>
				<tr>
					<td>
						<input type="text" placeholder="请输入密码">
					</td>
				</tr>
			</table>
		</div>
		<div class="subBtn">
			<button>登录</button>
			<p>
				<router-link :to="{path:'/register',query:{'tid':'123456','uid':'222222'}}" >注册账号</router-link>
				<router-link to="/forget">忘记密码？</router-link>
			</p>
		</div>
	</div>
</template>

<style lang="less">
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
			margin-bottom: 73px;
		}
	}
</style>
