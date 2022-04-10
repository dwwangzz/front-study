
// 【setTimeout】延迟执行 setTimeout
function myFunc(arg) {
    console.log(`arg was => ${arg}`);
}
setTimeout(myFunc, 1500, 'funky');


// 【setImmediate】所有函数执行之后执行setImmediate中传入的函数
console.log('before immediate');
setImmediate((arg) => {
  console.log(`executing immediate: ${arg}`);
}, 'so immediate');
console.log('after immediate');


// 【intervalFunc】每个一个时间间隔执行一次，永远轮询 
function intervalFunc() {
    console.log('Cant stop me now!');
}
setInterval(intervalFunc, 1500);


// 清除定时器
const timeoutObj = setTimeout(() => {
    console.log('timeout beyond time');
}, 1500);
const immediateObj = setImmediate(() => {
    console.log('immediately executing immediate');
});
const intervalObj = setInterval(() => {
    console.log('interviewing the interval');
}, 500);
clearTimeout(timeoutObj);
clearImmediate(immediateObj);
clearInterval(intervalObj);

