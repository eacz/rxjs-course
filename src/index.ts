import { Observable } from 'rxjs'
// <string>
const obs$ = new Observable<string>((subscriber) => {
  subscriber.next('Hello')
  subscriber.next('World')

  subscriber.next('Hello')
  subscriber.next('World')
  subscriber.complete()

  // These values will not be listened, 'cause they're after the complete method
  subscriber.next('Hello')
  subscriber.next('World')
})

obs$.subscribe((res) => console.log(res))
