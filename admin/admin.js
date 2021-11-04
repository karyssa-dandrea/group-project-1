import { events } from '../data/events.js';
import { setEvents } from '../utils/storage-utils.js';

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
    
    
    setEvents(newEvent);
    alert('New Event Added');
    document.querySelector('form').reset();
    
    
});