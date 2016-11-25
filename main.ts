import {Observable, Observer} from 'rxjs';

let numbers = [1, 3, 23];
let source = Observable.from(numbers);

source.subscribe(
    value => console.log('value', value),
    e => console.log('error', e),
    () => console.log('complete')
);
