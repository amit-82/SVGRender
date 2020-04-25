const console_log = console.log;

const disallowConsoleLog = () => {
	console.log = (...args) => {
		console.error('Console.log was caught in test! tried to log:');
		console_log(...args);
		throw 'console.log is not allowed in tests';
	};
};

//disallowConsoleLog();
