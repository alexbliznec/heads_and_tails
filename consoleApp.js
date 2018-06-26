//import { setTimeout } from 'timers';
const fs = require('fs');
const readLine = require('readline');

const rl = readLine.createInterface({
    input : process.stdin,
    output : process.stdout
});
rl.question('Желаете сыграть?', function (answer){
    if (answer == 'да'){
        console.log('Отлично! Начинаем!');
        rl.question('орел или решка?', function(answer){
            let res = (Math.floor(Math.random() * 2)) ? 'орел' : 'решка';
            console.log(`выпал ${res}`);
            if (res == answer){
            	console.log('Поздравляю вы победили!');
            	let result = true;
            	fs.appendFile('log.txt', result+',', function (err, data){
            		if(err){
            			console.error('ОЩИБКА');
            		}
            	});
            	rl.close();
            } else {
            	console.log('Увы, в повезет в следующий раз...');
            	let result = false;
            	fs.appendFile('log.txt', result+',', function (err, data){
            		if(err){
            			console.error('ОЩИБКА');
            	}
            		});
            	rl.close();
         }   
        });
        
    } else {
    	conslo.log('Тогда всего доброго...');
    	rl.close();
});