import { Observable } from 'rxjs/Rx';
import { load } from './loader';

let source = Observable.merge(
    Observable.of(1),
    Observable.from([2,4,5]),
    Observable.throw(new Error('Stop!')),
    Observable.of(8)
).catch(e => {
    console.log(e);
    return Observable.of(10);
});

source.subscribe(
    value => console.log('value', value),
    error => console.error('error', error),
    () => console.info('complete')
);

/*let output = document.getElementById('output');
let btn = document.getElementsByTagName('button')[0];
let click = Observable.fromEvent(btn, 'click');

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement('div');
        div.innerText = m.title;
        output.appendChild(div);
    })
}

//load('movies.json').subscribe(renderMovies);

click.flatMap(e => load('movies.json'))
    .subscribe(
    renderMovies,
    e => console.error('error', e),
    () => console.info('complete')
    );
*/