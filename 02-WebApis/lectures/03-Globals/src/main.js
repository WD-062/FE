// setTimeout
const timeoutId = setTimeout(() => console.log("Timeout"), 5000);

clearTimeout(timeoutId); // Cancels the timeout

// setInterval
const greet = () => {
    let now = new Date();
    console.log(now.toLocaleTimeString())
};

const intervalId = setInterval(greet, 1000);

clearInterval(intervalId); // Cancels the interval
