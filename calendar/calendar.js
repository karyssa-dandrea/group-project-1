import { renderCalendar, renderEvents } from '../utils/render-functions.js';
import { events } from '../data/events.js';

renderCalendar();
renderEvents(events);

const nextWeek = document.getElementById('next');

nextWeek.addEventListener('click', ()=>{
    renderCalendar();
    renderEvents(events);
});


//nextbutton event listener
//click button
//render calendar