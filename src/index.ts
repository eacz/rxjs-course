import { fromEvent, range } from 'rxjs'
import { map } from 'rxjs/operators'

/* 
range(1, 5)
.pipe(map<number, string>((val) => (val * 10).toString()))
.subscribe(console.log)
*/

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

const keyupCode$ = keyUp$.pipe(map((e) => e.code))


keyupCode$.subscribe((code) => console.log('map ', code))
