
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>ASP 实验页</title>

</head>
<body>
<h1 style="font-size:80px;text-align:center">
<%
dim numvisits
response.cookies("NumVisits").Expires=date+365 
numvisits=request.cookies("NumVisits")

if numvisits="" then
   response.cookies("NumVisits")=1
   response.write("欢迎！这是您第一次访问本页面。")
else
   response.cookies("NumVisits")=numvisits+1
   response.write("之前，您已经访问过本页面 ")
   response.write(numvisits & " 次。")
end if
%>
</h1>


</body>
</html>