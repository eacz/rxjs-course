import { interval, timer } from 'rxjs'
const observer = {
  next: (val) => console.log('next: ', val),
  complete: () => console.log('complete'),
}

const todayPlusFive = new Date()
todayPlusFive.setSeconds(todayPlusFive.getSeconds() + 5)

// Timer start to emit a value after an amount of time 
// if a number is provided as first argument, it will emit after that time (in ms)
// if a date is provided as first argument, it will emit the value at the given date
//by default, it will emit the value just one time, but if a second argument is provided (time in ms) it will emit values in a interval of that time (!IMPORTANT: it still start emitting based on first argument)

// const $timer = timer(2000)
// const $timer = timer(2000, 1000)
const timer$ = timer(todayPlusFive)
// A simple observer that works like an interval
const interval$ = interval(1000)

console.log('inicio');
// interval$.subscribe(observer)
timer$.subscribe(observer)
console.log('fin');
