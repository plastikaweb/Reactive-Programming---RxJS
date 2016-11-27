import { Observable } from 'rxjs/Rx';

let output = document.getElementById('output');
let btn = document.getElementsByTagName('button')[0];
let click = Observable.fromEvent(btn, 'click');

function load(url: string) {

    return Observable.create(observer => {
        let xhr = new XMLHttpRequest();

        xhr.addEventListener('load', () => {
            let data = JSON.parse(xhr.responseText);
            observer.next(data);
            observer.complete();
        });

        xhr.open('GET', url);
        xhr.send();
    })

}

function renderMovies(movies) {
    movies.forEach(m => {
        let div = document.createElement('div');
        div.innerText = m.title;
        output.appendChild(div);
    })
}

load('movies.json').subscribe(renderMovies);

click.flatMap(e => load('movies.json'))
.subscribe(
    renderMovies,
    e => console.error('error', e),
    () => console.info('complete')
);
