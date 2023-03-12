import { asyncScheduler } from 'rxjs'

const greetings = () => console.log('Hello World')
const greetingPerson = (name: string) => console.log(`Hello ${name}`)

//asyncScheduler can be use as timeout and interval, depending of the function definition we passed to it

// asyncScheduler.schedule(greetings, 2000)
// asyncScheduler.schedule(greetingPerson, 2000, 'Mimi')
const subs = asyncScheduler.schedule(function(state){
  console.log(state);
  this.schedule(state + 1, 1000)
}, 3000, 0)


// setTimeout(() => {
//  subs.unsubscribe()
// }, 5000);

asyncScheduler.schedule(() => subs.unsubscribe(), 5000)