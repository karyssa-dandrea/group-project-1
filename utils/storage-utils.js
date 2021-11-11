import { events } from '../data/events.js';

// I'd changed this to plural so as not to confuse
// it with the logged in user
export function setUser(userArray) {
    localStorage.setItem('USER', JSON.stringify(userArray));
}

export function getUser() {
    const userString = localStorage.getItem('USER') || '[ ]';
    return JSON.parse(userString);
}

export function confirmUser(userArray, username, password) {
    for (let user of userArray) {
        if (username === user.name && password === user.password) {
            const loggedIn = user;
            localStorage.setItem('LOGGEDIN', JSON.stringify(loggedIn));
            return window.location.replace('../admin/index.html');
        } 
        // would be good to add an else condition here
        // to handle the case where the login doesn't match
    }

}

export function getEvents() {
    let lsEvents = localStorage.getItem('EVENTS');
    let parsedEvents = JSON.parse(lsEvents);
    if (!lsEvents) {
        localStorage.setItem('EVENTS', JSON.stringify(events));
        parsedEvents = events;   
    }
    return parsedEvents || events;
}

export function setEvents(newEvent) {
    let events = getEvents();
    events.push(newEvent);
    let eventString = JSON.stringify(events);
    localStorage.setItem('EVENTS', eventString);
}