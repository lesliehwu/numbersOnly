function numbersOnly(arr){
	var newArr = [];
	for (var i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}

function removesFrom(arr){
	for (var i = 0; i < arr.length; i++){
		if(typeof arr[i] === "number"){
			arr[i] = arr[i+1];
		}
	}
	for (var i = arr.length-1; i >= 0; i--){
		if(arr[i] === arr[i-1] || typeof arr[i] === undefined || arr[i] === arr[i+1]){
			arr.pop();
			continue;
		}
		if(arr[0] === arr[1]){
			arr.shift();
		}
	}
	return arr;
}
