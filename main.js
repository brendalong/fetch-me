console.log("hello beautiful");

//our machines are fast - check it out
for (var i = 0; i < 2000000; i++){
	//running a loop for fun
	var x = i + 1/1 * 6 - 4;
}
console.log("I just looped ", i, " times.");


const getBigData = () => {
	return fetch("JEOPARDY_QUESTIONS1.json")
		.then(response => response.json())
		.then(parsedData => {
			console.log("jeopardyQs", parsedData)
		})
}

const getSmallData = () => {
	return fetch("colors.json")
		.then(response => response.json())
		.then(parsedData => {
			console.log("colors", parsedData);
			return parsedData;
		})
}

const jeopardyQs = getBigData()

const colors = getSmallData()
//and if I want to use this data after it has been retrieved
//.then accepts the results of the promise.
	.then(colorsArray => {
		console.log("what is colors Array", colorsArray);
	})

//Which one consoles first?