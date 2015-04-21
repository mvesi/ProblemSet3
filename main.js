// #1 - Write a function palindrome that takes a single string parameter and returns true if the parameter is a palindrome (the string is the same forward as it is backward), otherwise returns false. For example: palindrome("racecar") should return true because "racecar" is also "racecar" backwards.

var palindrome = function(str){
	var strArray = str.split("");
	console.log(strArray);
	var ans = true;

	for( var i=0 ; i<strArray.length ; i++){
	
		if(strArray[i] !== strArray.reverse()[i]){
			ans = false;
		}
		
	}
	return ans;
};

console.log(palindrome("racecar"));
console.log(palindrome("chocolate"));



// #1 - Refactored
var palindromeRefactored = function(str){
	var reversed = str.split("").reverse().join("");
	var ans = true;
	if(str!==reversed){
			ans = false;
		}
	return ans;
};

console.log(palindromeRefactored("racecar"));
console.log(palindromeRefactored("chocolate"));



// #2 - Write a function dashInsert that takes a single num parameter and returns the num with inserted dashes ('-') between adjacent odd digits. For example: if num is 454793 the output should be "4547-9-3".

var dashInsert = function (num){
	var numArray = num.toString().split("");
	console.log(numArray);
	for(var i=1 ; i<numArray.length ; i++){
		if(numArray[i-1]%2!==0 && numArray[i]%2!==0){
			numArray[i] = ('-'+numArray[i]);
		}

	}

	console.log(numArray.join(""));
};

console.log(dashInsert(454793));


