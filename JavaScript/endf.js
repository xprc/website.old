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
        label10.style.display = 'block'; //*����
        return false;
}
else{
	//�ɹ���������



alert('��Ϣ�ѷ��͵�վ�����䣬��л����֧�֣�\n ���������뿪��ҳ���ˣ�����');
var r=confirm("��ȷ��Ҫ�뿪��ҳ����");
if (r==true)
  {
  window.open("��ҳ1.htm","New_window");
  window.opener=null;   
  window.opener=null;    
  window.close();
  }
else
  {
  alert("����ȡ��������");
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
if(mailvalue!=""){ //��������ǿ� ��ʾ��ȷ
label5.style.display = 'none';  
label3.style.display = 'block';//��ʾ��ȷ
label4.style.display = 'none';       
}
else{
label5.style.display = 'block';//��ʾ*����
label3.style.display = 'none';
label4.style.display = 'none'; 
return false;
}
//����Ϊһ��


if(!myreg.test(mailvalue)){  //�ȶ� ������ʽ ��֤���� ������������ַlabel4��ʾ����
        label3.style.display = 'none'; 
        label4.style.display = 'block'; //*�����ַ����
        return false;
    }    
else{
        label3.style.display = 'block'; 
        label5.style.display = 'none';
        label4.style.display = 'none';
}
//����Ϊһ��

}
</script>

<script type="text/javascript">
function phonetext(){
var phonetext = document.getElementById("input3").value;
if(!(/^1[3|4|5|7|8]\d{9}$/.test(phonetext))){ 
        label6.style.display = 'none'; 
        label7.style.display = 'block'; //*�ֻ��������
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
        label10.style.display = 'none'; //*����
        return false;
    } 
else{
        label8.style.display = 'none'; 
        label9.style.display = 'none'; 
        label10.style.display = 'block';  
}

}
