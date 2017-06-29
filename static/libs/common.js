import md5 from "md5";

//封装ajax；
export const useAjax = function(options){

    var defaults = {
        url:'',
        type:'POST',
        overtime:"30000",
        dataType:'json',
        data:{},
        success:null
    };

    options = $.extend({},defaults,options);

    jQuery.ajax({
      url: options.url,
      type: options.type,
      timeout:options.overtime,
      dataType: options.dataType,
      data: options.data,
      beforeSend:function(){
        loading("show");
      },
      complete:function(xhr, textStatus) {
        if(textStatus=='timeout'){
            tips({
                content:"请求超时，请稍后重试！"
            });
            loading("hide");
        }
      },
      success:function(data) {

        loading("hide");

        if(!data) return;

        if(data.code=="0000"){
           if(typeof options.success=="function"){
              options.success(data);
           }
        }
        else{
            tips({
                content:data.msg
            });
            if(typeof errorCall=="function"){
              errorCall(data);
           }
        }
        
      },
      error:function() {
        loading("hide");
        tips({
            content:"服务器请求失败，请稍后重试！"
        });
      }
    });
};

export const loading = function(state){
    if(state=="show"){
        $(document).bind("touchmove",function(e){ 
            e.preventDefault(); 
         });

        $(".loadingBg").remove();
        $("body").append("<div class='loadingBg'><div class='loading'>请稍后</div></div>");
    }
    else if(state=="hide"){
        $(".loadingBg").remove();
        $(document).unbind("touchmove");
    }
}

//md5添加签名标识
export const useMd5 = function(array){
    var signKey = '86eb1492-6e08-481d-b377-678acd5c3de5';
    var resultString = "";

    if(array.length>0){

        var parmas = [];
        var resultArray = [];

        for(let i=0;i<array.length;i++){
            for(let key in array[i]){
                parmas.push(key);
            }
        }

        for(let i=0;i<parmas.sort(function(a,b){
            if(a.toString().toLowerCase()>b.toString().toLowerCase()){
                return 1;
            }
            else{
                return -1;
            }
        }).length;i++){
            for(let j=0;j<array.length;j++){
                for(let key in array[j]){
                    if(parmas[i]==key){
                        resultArray.push(array[j]);
                    }
                }
            }
        }

        resultArray.map(function(el,index){
            for(let key in el){
                resultString += (key+"="+el[key]);
            }
        });

        //console.log(resultString)

    }

    return md5(resultString+signKey);
}

export const setCookie = function(name,value,Days){
    if(Days === null || Days === ''){  
        Days = 30;  
    }  
    var exp  = new Date();  
    exp.setTime(exp.getTime() + Days*24*60*60*1000);  
    document.cookie = name + "="+ escape (value) + "; path=/;expires=" + exp.toGMTString();
}

export const getCookie = function(name){
    var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
    if(arr=document.cookie.match(reg)){
        return unescape(arr[2]);
    }
    else{
        return null;
    }
};

export const clearCookie = function(name){
    setCookie(name,'', -1);
};

export const tips = function(options){
    var defaults = {
        "content":'请输入内容',
        'duration':2500,
        'type':'error'
    };

    options = $.extend(true, defaults, options);
    
    var timer = null;
    $('.weui_toptips').remove();
    var tips = $(".tips").remove();
    tips = $('<div class="tips tips_'+options.type+'">'+options.content+'</div>').appendTo(document.body);
    tips.stop(true,true).animate({
        'top':0
    },300);

    clearTimeout(timer);
    timer = setTimeout(function() {
        tips.stop(true, true).animate({
            'top': '-0.933333rem'
        }, 300, function() {
            tips.remove();
        });
    }, options.duration);
    
}

export const getUrlParam = function(name){
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substring(1).match(reg); //匹配目标参数
    if (r !== null) return decodeURI(r[2]);
    return ''; //返回参数值
};






