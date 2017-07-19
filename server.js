var path = require('path');

//这里是创建一个本地服务器；
const config = {
    port:'1234',
    noInfo: true,
    contentBase:path.join(__dirname,'/app/'),
    host:"172.28.3.21"

    //设置电脑的网络ip，可以实现本地测试，如果ip不对，会报错。如果为空，则默认为localhost
}

module.exports = config;