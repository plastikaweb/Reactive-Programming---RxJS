import {Observable} from 'rxjs';

let numbers = [1, 3, 23];
let source = Observable.create(observer => {
    
    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);
        
        if(index < numbers.length) {
            setTimeout(produceValue, 2000)
        } else {
            observer.complete();
        }
    }

    produceValue();
});

source.subscribe(
    value => console.log('value', value),
    e => console.error('error', e),
    () => console.info('complete')
);
