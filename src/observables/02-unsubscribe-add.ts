import { Observable, Observer } from 'rxjs'

const observer: Observer<number> = {
  next: (value) => console.log('|next|: ', value),
  //callback called when there is an error
  error: (error) => console.warn('|error|: ', error),
  //callback called when the Observable call the .complete() method successfully
  complete: () => console.info('|complete|'),
}

const interval$ = new Observable<number>((subs) => {
  let count = 0

  const interval = setInterval(() => {
    count++
    subs.next(count)
    console.log('count ', count)
  }, 1000)

  setTimeout(() => {
    //when complete is called, the complete callback is executed and after that the return callback is executed immediately
    subs.complete()
  }, 2500)

  //the return callback is what is executed when an subscriber unsubscribe from an observable (like the return of useEffect xd)
  return () => {
    clearInterval(interval)
    console.log('interval cleaned')
  }
})

const subscription1 = interval$.subscribe(observer)
const subscription2 = interval$.subscribe(observer)
const subscription3 = interval$.subscribe(observer)

//these way, s2 & s3 are executed one after another
//Example s1 => s2 => s3
subscription2.add(subscription3)
subscription1.add(subscription2)

//these way, s2 & and s3 are executed at the same time on unsubscribe
//Example s1 => s2 & s3
subscription1.add(subscription2)
subscription1.add(subscription3)

setTimeout(() => {
  subscription1.unsubscribe()
}, 3000)
