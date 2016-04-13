//iterative
var fabonacci = function(n){
	if(n<2)
		return n;

	var f1=1, f0=0;
	for(var i=2; i<=n; i++){
		f2 = f1+f0;
		f0 = f1;
		f1 = f2;
	}
	return f2;

}

//recursive
var fabonacci = function(n){
	if(n<2)
		return n;
	return n>1? fabonacci(n-1) + fabonacci(n-2) : n;
}

//memorize recursive
var fabonacci = function(){
	var mem = [0,1];
	var fib = function(n){
		var result = mem[n];
		if(typeof result !== 'number'){
			result = fib(n-1) + fib(n-2);
			mem[n] = result;
		}
		return result;
	}
	return fib;
}();

//common memoizer
var memoizer = function(memo, formula){
	var recur = function(n){
		var result = memo[n];
		if(typeof result !== 'number'){
			result = formula(recur, n);
			memo[n] = result;
		}
		return result;
	}
	return recur;
};

var fabonacci = memoizer([0,1], function(recur, n){
	return recur(n-1) + recur(n-2);
});

var factorial = memoizer([1,1], function(recur, n){
	return recur(n-1)*n;
});
