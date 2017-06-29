<template>
	<div class="login">
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
			</table>
		</div>
		<div class="subBtn">
			<button>下一步</button>
		</div>
	</div>
</template>

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
