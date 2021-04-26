$(function() {
    // 进行表单验证
    layui.form.verify({
            pw: [
                /^[\S]{6,12}$/,
                '密码必须为6-12位且不能为空'
            ],
            repwd: function(value) {
                if (value === $('[name=oldPwd]').val()) {
                    return '两次密码不能一致'
                }
            },
            qrpwd: function(value) {
                if (value !== $('[name=newPwd]').val()) {
                    return '两次密码必须一致'
                }
            }

        })
        // 修改密码
    $('.layui-form').on('submit', function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        $.ajax({
            method: 'post',
            url: '/my/updatepwd',
            data: data,
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message, { icon: 5 })
                }
                layui.layer.msg(res.message, { icon: 6 })
                $('.layui-form')[0].reset()
            }
        })
    })









})