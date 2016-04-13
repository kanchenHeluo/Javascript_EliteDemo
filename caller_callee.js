//caller example:
function callerfunc(){
	if(callerfunc.caller){
		var callerstr = callerfunc.caller.toString(); 
		alert(callerstr);
	}
	else{
		alert('this is top call func');
	}
}
function demofunc(){
	callerfunc();
}
demofunc();

//callee example:
function democallee(){
	alert(arguments.callee);
}

//callee practice
function factorial(n){
	if(n<=1){
		return n;
	}else{
		return n*arguments.callee(n-1);
	}
}
var anotherfact = factorial;
factorial = null;
var result = anotherfact(3);
alert(result);