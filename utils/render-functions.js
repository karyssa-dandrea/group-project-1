export function renderCalender(events) {
    const calTable = document.createElement('table');
    const calHead = document.createElement('thead');
    


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