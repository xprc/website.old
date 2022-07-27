
jQuery(document).ready(function() {

    $('.page-container form').submit(function(){
        var username = $(this).find('.username').val();
        var password = $(this).find('.password').val();
        if(username == '') {
            $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '27px');
            });
            $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.username').focus();
            });
            return false;
        }
        else if(password == '') {
             $(this).find('.error').fadeOut('fast', function(){
                $(this).css('top', '96px');
             });
             $(this).find('.error').fadeIn('fast', function(){
                $(this).parent().find('.password').focus();
             });
            return false;
        }
        else if(username == '123456')
        {
        	if (password == '123456')
        	{
        		alert("欢迎你回来！")
        		window.open("../index-1.htm","New_window");
        		document.cookie="username="+username+"password="+password;       		
        		window.opener=null;   
            window.opener=null;    
            window.close();

        	}
        	else
        	{
        		alert("你输入的密码/指定密码错误！！！")
        	}
        	}
        	else if (username == '13601034825')
        	{
        	if(password == 'abc123456')
        	{
        		alert("欢迎你回来！")
        		window.open("../index-1.htm","New_window");
        		usernames=username;
            if (usernames!=null && usernames!="")
            {
              setCookie('usernames',usernames,365)
            }
        		window.opener=null;   
            window.opener=null;    
            window.close();
        	}
        	else
        	{
        		alert("你输入的密码/指定密码错误！！！")
        	}
        	}
        	else if (username == 'zyy005011')
        	{
        		if (password == '987654321yy1')
        		{
        			alert("欢迎您回来！")
        		window.open("../view/留言/38.htm","New_window");
        		usernames=username;
            if (usernames!=null && usernames!="")
            {
              setCookie('usernames',usernames,365)
            }
        		window.opener=null;   
            window.opener=null;    
            window.close();
        		}
        		else
        		{
        			alert("你输入的密码/指定密码错误！！！")
        		}
        	}
        	else if (username == 'Greenlei')
        	{
        	if(password == '0987654321')
        	{
        		alert("欢迎你回来！")
        		window.open("../view/ls-1.htm","New_window");
        		usernames=username;
            if (usernames!=null && usernames!="")
            {
              setCookie('usernames',usernames,365)
            }
        		window.opener=null;   
            window.opener=null;    
            window.close();
        	}
        	else
        	{
        		alert("你输入的密码/指定密码错误！！！")
        	}
        	}
        	else if (username == '123')
        	{
        		if (password == '456')
        		{
        			alert("欢迎您回来！")
        		window.open("//1256799889.vod2.myqcloud.com/vod-player/1256799889/5285890781022258223/tcplayer/console/vod-player.html?autoplay=false&width=1920&height=1080","New_window");
        		usernames=username;
            if (usernames!=null && usernames!="")
            {
              setCookie('usernames',usernames,365)
            }
        		window.opener=null;  
            window.opener=null;    
            window.close();
        		}
        		else
        		{
        			alert("你输入的密码/指定密码错误！！！")
        		}
        	}
        	else
        	{
        		alert("奇怪了！在这个星球里没有找到这个用户名/领取码！！！")
        	}
    });

    $('.page-container form .username, .page-container form .password').keyup(function(){
        $(this).parent().find('.error').fadeOut('fast');
    });

});

