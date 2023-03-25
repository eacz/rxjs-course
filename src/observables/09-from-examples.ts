import { of, from } from 'rxjs'

/**
 * of = takes arguments and generate a sequence 
 * from = takes array, promise, itereabla, obsevable as argument
 */

const observer = {
  next: (val) => console.log('next', val),
  complete: () => console.log('complete')
}

//const source$ = from([1,2,3,4,5])
//const source$ = of(...[1,2,3,4,5])

//const source$ = from('Esteban')

//const source$ = from( fetch('https://api.github.com/users/eacz') )

//source$.subscribe(async (res) => {
  //  const data = await res.json()
  //  console.log(data);
  //})
  

//source$.subscribe(observer)

const generator = function*(){
  yield 1
  yield 2
  yield 3
  yield 4
  yield 5
}

const iterable = generator()

//for (const id of iterable) {
//  console.log(id);
//}

from(iterable).subscribe(observer)
