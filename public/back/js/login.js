$(function () {
    // console.log(234)
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove', // 校验失败
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            username: {
                validators: {
                    notEmpty: {
                        message: "请输入用户名"
                    },
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "用户名长度必须是2-6位"
                    },
                    callback:{
                        message:"用户名不存在",
                    },
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: "请输入密码"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "密码长度必须是6-12位"
                    },
                    callback:{
                        message:"密码错误",
                    },
                }
            }
        }
    });
    $('#form').on('success.form.bv', function (e) {


        e.preventDefault();

        $.ajax({
            type: "post",
            url: "/employee/employeeLogin",
            data: $('#form').serialize(),
            datatype: 'json',
            success: function (info) {
                console.log(info)
                if (info.error === 1000) {
                    alert("用户名不存在");
                    $('#form').data("bootstrapValidator").updateStatus("username","INVALID","callback")
                    return;
                }
                if (info.error === 1001) {
                    alert("密码错误");
                    $('#form').data("bootstrapValidator").updateStatus("password","INVALID","callback");
                    return;
                }
                if (info.success) {
                    location.href = "index.html";
                }
            }
        })
    });
    $('[type="reset"]').on('click',function () {
        $('#form').data("bootstrapValidator").resetForm();
    })
})