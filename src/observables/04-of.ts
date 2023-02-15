import { of } from 'rxjs'

//const obs$ = of([1,2], {a:1, b:2}, () => {}, true, Promise.resolve((true)))
const obs$ = of<number[]>(1, 2, 3, 4, 5, 6)

console.log('start obs')

obs$.subscribe({
  next: (next) => console.log('next ', next),
  complete: () => console.log('end!'),
})
console.log('end obs')
