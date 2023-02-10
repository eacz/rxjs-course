import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<number> = {
  next: (value) => console.log('|next|: ', value),
  //callback called when there is an error
  error: (error) => console.warn('|error|: ', error),
  //callback called when the Observable call the .complete() method successfully
  complete: () => console.info('|complete|'),
}

const interval$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => {
    subs.next(Math.random())
  }, 1000)

  return () => {
    clearInterval(intervalId)
    console.log('interval destroyed')
  }
})

//Subject
// It emits the same data to all of its subscribers
// It can also be an observer of another obeservable
// It has the same callback properties 'next', 'error' and 'complete' 
const subject$ = new Subject()
// IMPORTANT: when the subject is complete, it DOESN'T terminate the observable it is observing
// So is still necessary to store the subscription and unsubscribe when required
const subscription = interval$.subscribe(subject$)

const s1 = subject$.subscribe((random) => console.log('subs1 ', random))

const s2 = subject$.subscribe((random) => console.log('subs2 ', random))


setTimeout(() => {
  subject$.next(10)
  subject$.complete()
  subscription.unsubscribe()
}, 3500)
