import { events } from '../data/events.js';

const form = document.getElementById('admin-form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const data = new FormData(form);
 
    const newEvent = {
        venue: data.get('venue'),
        opener: data.get('opener'),
        headliner: data.get('headliner'),
        price: data.get('price'),
        image: data.get('image'),
        doors: data.get('doors'),
        date: data.get('date'), 
        link: data.get('link')
    };
    console.log(newEvent);
    events.push(newEvent);
    alert('New Event Added');
    document.querySelector('form').reset();
    return events;
    
});