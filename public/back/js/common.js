$(document).ajaxStart(function(){
    NProgress.start();
})

$(document).ajaxStop(function(){
    setTimeout(function(){
        NProgress.done();
    },1000)
})

