$(document).ajaxStart(function(){
    NProgress.start();
})

$(document).ajaxStop(function(){
    setTimeout(function(){
        NProgress.done();
    },1000)
})

$(function(){
    // 左侧二级菜单切换
    $('.category').click(function(){
        console.log(123)
        $(this).next().slideToggle();
    })

    // 左侧侧边栏切换
    $('.icon_left').click(function(){
        $('.lt_aside').toggleClass("hidemenu")
        $('.lt_topbar').toggleClass("hidemenu")
        $('.lt_main').toggleClass("hidemenu")
    })

    // 退出功能
    $('.icon_right').click(function(){
        $('#myModal').modal("show");
    })

    $('#logoutBtn').click(function(){
        $.ajax({
            type:"get",
            url:"/employee/employeeLogout",
            dataType:"json",
            success:function( info ){
                console.log(info)
                if(info.success){
                    location.href = "login.html";
                }
            }
        })
    })
})