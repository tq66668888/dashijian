$(function() {
        // 封装一个函数来获取用户信息
        getUserNews()

        // function getUserNews() {
        //     $.ajax({
        //         type: 'get',
        //         url: '/my/userinfo',
        //         success: function(res) {
        //             // console.log(res);
        //             if (res.status !== 0) {
        //                 return layui.layer.msg('获取用户信息失败')
        //             }
        //             renderAvatar(res.data)
        //         }
        //     })
        // }
        var layer = layui.layer
            /**** 2-退出登录 ****/
        $('#logout').on('click', function() {
            // 询问
            layer.confirm('您确定要退出吗?', { icon: 3, title: '提示' }, function(index) {
                //do something
                // 清除本地存储中的token
                localStorage.removeItem('token')
                    // 页面跳转到登录页
                location.href = '/login.html'
                layer.close(index);
            });
        })
    })
    // function renderAvatar(usernews) {
    //     var name = usernews.nickname || usernews.username
    //     $('#welcome').html('欢迎' + name)
    //     if (usernews.user_pic == null) {
    //         $('.text-avatar').html(name[0].toUpperCase())
    //         $('.layui-nav-img').hide()
    //     } else {
    //         $('.layui-nav-img').attr('src', usernews.user_pic).show()
    //         $('.text-avatar').hide()
    //     }
    // }

})

function getUserNews() {
    $.ajax({
        type: 'get',
        url: '/my/userinfo',
        success: function(res) {
            // console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            renderAvatar(res.data)
        }
    })
}

function renderAvatar(usernews) {
    var name = usernews.nickname || usernews.username
    $('#welcome').html('欢迎' + name)
    if (usernews.user_pic == null) {
        $('.text-avatar').html(name[0].toUpperCase())
        $('.layui-nav-img').hide()
    } else {
        $('.layui-nav-img').attr('src', usernews.user_pic).show()
        $('.text-avatar').hide()
    }
}