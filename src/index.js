import { HelloWorld } from './helloworld.ts';

/*
async function* timer() {
	while (true) {
		await new Promise(resolve => setTimeout(resolve, 1000));
		yield true
	}
}

const driver = async function() {
	for await (let time of timer()) {
		for (let element of document.getElementsByTagName('hello-world')) {
			element.time = Date.now()
		}
	}
}

driver()
*/