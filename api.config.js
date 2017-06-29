
var ENV = "pro"  //设置环境

var API_HTTP = "";

var apiIp = [{
 	"env":"testA",
 	"http":"http://10.10.111.147:8084/alliance-front/"
},{
 	"env":"testB",
 	"http":"http://10.10.129.26:8084/alliance-front/"
},{
 	"env":"pro",
 	"http":"https://v.lefu8.com/alliance-front/"
}]


apiIp.map(function(el,index){
	if(ENV == el.env){
		API_HTTP = el.http;
	}
})

console.log({env:ENV,ip:API_HTTP})

module.exports = {
	env:ENV,
	ip:API_HTTP
};
