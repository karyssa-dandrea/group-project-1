
import { setEvents } from '../utils/storage-utils.js';
// it would be cool to add a check here that the admin is currently logged in
// if not, you could redirect to the home page

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