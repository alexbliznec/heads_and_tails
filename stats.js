const fs = require('fs');
const readLine = require('readline');

const interFace = readLine.createInterface({
	input : process.stdin,
	output : process.stdout
})


const log = fs.readFileSync('log.txt', 'utf8');

const logArr = log.split(',');


interFace.on('games', function (games){
	console.log(`количество игр -- ${logArr.length() - 1}`);
})

interFace.on('wins', function(){
	let winQuantity = logArr.filter(() => {
		indexOf('true');
		console.log(winQuantity);
	})
})