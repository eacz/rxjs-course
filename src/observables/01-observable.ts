import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
  next: (value) => console.log('|next|: ', value),
  //callback called when there is an error
  error: (error) => console.warn('|error|: ', error),
  //callback called when the Observable call the .complete() method successfully
  complete: () => console.info('|complete|'),
}

const obs$ = new Observable<string>((subscriber) => {
  subscriber.next('Hello')
  subscriber.next('World')

  subscriber.next('Hello')
  subscriber.next('World')

  //Force error
  //const a = undefined
  //a.active = true

  subscriber.next('If there is an error this message will not show')

  subscriber.complete()

  // These values will not be listened, 'cause they're after the complete method
  subscriber.next('Hello')
  subscriber.next('World')
})

obs$.subscribe(observer)

//obs$.subscribe(
//  //callback called when .next() call is successful
//  (value) => console.log('next: ', value),
//  //callback called when there is an error
//  (error) => console.warn('error: ', error),
//  //callback called when the Observable call the .complete() method successfully
//  () => console.info('complete')
//)
