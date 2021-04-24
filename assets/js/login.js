$(function() {
    // 自定义表单类型
    layui.form.verify({
            pwd: [
                /^[\S]{6,12}$/,
                '密码必须是6-12位的非空字符串'
            ],
            repwd: function(value, item) {
                // console.log(value);
                var pwd = $('#form_reg [name=password]').val().trim()
                if (value !== pwd) {
                    return '两次密码必须一致'
                }
            }
        })
        // 登录和注册页面的切换
    $('#link_reg').on('click', function() {
        $('.reg-box').show()
        $('.login-box').hide()

    })
    $('#link_login').on('click', function() {
            $('.reg-box').hide()
            $('.login-box').show()
        })
        // 注册页面绑定提交事件注册功能
    $('#form_reg').on('submit', function(e) {
            e.preventDefault()
            var username = $('#form_reg [name=username]').val().trim()
            var password = $('#form_reg [name=password]').val().trim()
            var data = {
                username: username,
                password: password
            }
            $.ajax({
                type: 'post',
                url: '/api/reguser',
                data: data,
                success: function(res) {
                    // console.log(res);
                    if (res.status !== 0) {
                        // return alert('用户注册失败')
                        return layui.layer.msg(res.message, { icon: 5 })
                    }
                    layui.layer.msg(res.message, { icon: 6 }, function() {
                        $('#link_login').click()
                    })
                }
            })
        })
        // 登录功能
    $('#form_login').on('submit', function(e) {
        e.preventDefault()
        var data = $(this).serialize()
            // console.log(data);
        $.ajax({
            type: 'post',
            url: '/api/login',
            data: data,
            success: function(res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layui.layer.msg(res.message, { icon: 5 })
                }
                layui.layer.msg(res.message, { icon: 6 }, function() {
                    localStorage.setItem('token', res.token)
                    location.href = 'index.html'
                })
            }
        })
    })




























})