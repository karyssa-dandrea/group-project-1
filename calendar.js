import { renderCalendar, renderEvents } from './utils/render-functions.js';
import { getEvents } from './utils/storage-utils.js';

const events = getEvents();
renderCalendar();
renderEvents(events);




// //nextbutton event listener
// //click button
// //render calendar