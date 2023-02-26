import {asyncScheduler, of, range, } from 'rxjs'

console.log('start');

//const src$ = of(1,2,3,4,5)
// const src$ = range(1, 5) output=1,2,3,4,5
// const src$ = range(5) output=0,1,2,3,4
// const src$ = range(-5,5) output=-5,-4,-3,-2,-1


const src$ = range(1, 5, asyncScheduler)

src$.subscribe(console.log)
console.log('end');

