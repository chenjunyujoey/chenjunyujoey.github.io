// JavaScript Document
function MM_changeProp(objId,x,theProp,theValue) { //v9.0
  var obj = null; with (document){ if (getElementById)
  obj = getElementById(objId); }
  if (obj){
    if (theValue == true || theValue == false)
      eval("obj.style."+theProp+"="+theValue);
    else eval("obj.style."+theProp+"='"+theValue+"'");
  }
}
function check()
{
if(form.your_name.value=="")
{
alert("账号不能为空");
form.your_name.focus();
return false;
}

if(form.pas2.value=="")
{
alert("请确认密码");
form.pas2.focus();
return false;
}
if(form.pas2.value!=form.pas1.value)
{
alert("两次输入的密码不一致");
form.pas2.focus();
return false;
}

if (document.getElementById('pas1').value=="123456") 
	{
       if(form.pas2.value==form.pas1.value)
{
alert("密码正确");
form.pas2.focus();
return ture;
} 
}

}