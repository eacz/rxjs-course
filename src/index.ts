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

  //the return callback is what is executed when an subscriber unsubscribe from an observable (like the return of useEffect xd)
  return () => {
    clearInterval(interval)
    console.log('interval cleaned')
  }
})

const subscription1 = interval$.subscribe(observer)
const subscription2 = interval$.subscribe(observer)
const subscription3 = interval$.subscribe(observer)

setTimeout(() => {
  subscription1.unsubscribe()
  subscription2.unsubscribe()
  subscription3.unsubscribe()
}, 3000)
