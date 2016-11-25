import {Observable} from 'rxjs';

let numbers = [1, 3, 23];
let source = Observable.create(observer => {
    for(let n of numbers) {
        observer.next(n);
    }

    observer.complete();
});

source.subscribe(
    value => console.log('value', value),
    e => console.error('error', e),
    () => console.info('complete')
);
