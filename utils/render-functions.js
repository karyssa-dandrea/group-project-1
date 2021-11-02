import events from './data/events.js';

export function getWeekDay(){}

export function renderCalender() {
    const selectWeek = document.getElementById('select-week');
    console.log(selectWeek);

    // const calRow = document.createElement('tr');

    // for (let event of events){
    //     const calData = document.createElement('td');

    // }

}

export function renderEvents(){
    const eventName = document.createElement('h1');
    eventName.textContent = events.headliner;
    
    const eventImage = document.createElement('img');
    eventImage.src = events.image;
    
    const eventOpener = document.createElement('h2');
    eventOpener.textContent = events.opener;
    
    const eventDoors = document.createElement('');
    eventDoors.textContent = events.doors;
    
    const eventPrice = document.createElement('');
    eventPrice.textContent = events.price;
    
    const eventDate = document.createElement('');
    eventDate.textContent = events.date;
    
    const eventLink = document.createElement('');
    eventLink.textContent = events.link;
    
    const eventVenue = document.createElement('');
    eventVenue.textContent = events.venue;

}