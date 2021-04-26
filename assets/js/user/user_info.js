$(function() {

    // 获取用户信息
    getUserInfo()

    function getUserInfo() {
        $.ajax({
            method: 'get',
            url: '/my/userinfo',
            success: function(res) {
                if (res.status !== 0) {
                    return layui.layer.msg(res.message, { icon: 5 })
                }
                layui.layer.msg(res.message, { icon: 6 })
                console.log(res);
                layui.form.val('formUserInfo', res.data)



            }
        })
    }
    $('#btnReset').on('click', function(e) {
        e.preventDefault()
        getUserInfo()
    })
    layui.form.verify({
            nickname: function(value) {
                if (value.length > 6) {
                    return '昵称字符不能超过6位'
                }
            }
        })
        // 用户信息修改功能
    $('.layui-btn').on('submit', function(e) {
        e.preventDefault()
        var data = $(this).serialize()
        console.log(data);
        $.ajax({
            method: 'post',
            url: '/my/userinfo',
            data: data,
            success: function(res) {
                // console.log(res);
                if (res.status !== 0) {
                    return layui.layer.msg(res.message, { icon: 5 })
                }
                layui.layer.msg(res.message, { icon: 6 })
                window.parent.getUserNews()
            }
        })

    })



















})