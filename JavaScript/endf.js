function send(){
var name = document.getElementById("input1").value;
var mail = document.getElementById("input2").value;
var phone = document.getElementById("input3").value;
var content = document.getElementById("input4").value;
if(name=="")
{
label2.style.display = 'none';
label1.style.display = 'none';
label0.style.display = 'block';;
return false;
}
if(mail=="")
{
label3.style.display = 'none';
label4.style.display = 'none';
label5.style.display = 'block';;
return false;
}

if(content=="")
{
        label8.style.display = 'none'; 
        label9.style.display = 'none'; 
        label10.style.display = 'block'; //*必填
        return false;
}
else{
	//成功后处理留言



alert('信息已发送到站长邮箱，感谢您的支持！\n （您可以离开此页面了！！）');
var r=confirm("你确定要离开此页面吗？");
if (r==true)
  {
  window.open("主页1.htm","New_window");
  window.opener=null;   
  window.opener=null;    
  window.close();
  }
else
  {
  alert("你已取消！！！");
  }
}

 

}
function jieshou(){
var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var nametext = document.getElementById("input1").value;
if(nametext!=""){
label0.style.display = 'none';
label1.style.display = 'block';
label2.style.display = 'none';
}
else{
label0.style.display = 'block';
label1.style.display = 'none';
label2.style.display = 'none';
}
 
}
function mailtext(){
var mailvalue = document.getElementById("input2").value;
var mailtext = document.getElementById("input2");
var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
if(mailvalue!=""){ //邮箱如果非空 显示正确
label5.style.display = 'none';  
label3.style.display = 'block';//显示正确
label4.style.display = 'none';       
}
else{
label5.style.display = 'block';//显示*必填
label3.style.display = 'none';
label4.style.display = 'none'; 
return false;
}
//上面为一段


if(!myreg.test(mailvalue)){  //既而 正则表达式 验证邮箱 如果不是邮箱地址label4显示出来
        label3.style.display = 'none'; 
        label4.style.display = 'block'; //*邮箱地址错误
        return false;
    }    
else{
        label3.style.display = 'block'; 
        label5.style.display = 'none';
        label4.style.display = 'none';
}
//上面为一段

}
</script>

<script type="text/javascript">
function phonetext(){
var phonetext = document.getElementById("input3").value;
if(!(/^1[3|4|5|7|8]\d{9}$/.test(phonetext))){ 
        label6.style.display = 'none'; 
        label7.style.display = 'block'; //*手机号码错误
        return false;
    } 
else{
        label6.style.display = 'block'; 
        label7.style.display = 'none';
}
}

function content(){
var content = document.getElementById("input4").value;
if(content!=""){ 
        label8.style.display = 'block'; 
        label9.style.display = 'none'; 
        label10.style.display = 'none'; //*必填
        return false;
    } 
else{
        label8.style.display = 'none'; 
        label9.style.display = 'none'; 
        label10.style.display = 'block';  
}

}
