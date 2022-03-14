function validate() 
{
	let username=document.getElementById("username").value;
	let password=document.getElementById("password").value;
	if(username=="robo123"&& password=="robo123")
	{
		 alert("Login successful");	
	}
	else
	{
		alert("Login failed");
	}
}