import { renderCalendar, renderEvents } from './utils/render-functions.js';
import { getEvents } from './utils/storage-utils.js';

// I love the simplicity of this file -- great job
const events = getEvents();
renderCalendar();
renderEvents(events);