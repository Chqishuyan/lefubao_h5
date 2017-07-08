
var ENV = "pro"  //设置环境

var ip = "";

switch(ENV){
	case "pro": ip = "https://v.lefu8.com/alliance-front/";
	break;
	case "testA": ip = "http://10.10.111.147:8084/alliance-front/";
	break;
	case "testB": ip = "http://10.10.129.26:8084/alliance-front/";
	break;
}

console.log({env:ENV,ip:ip})

module.exports = {
	env:ENV,
	ip:ip
};
