// import events from './data/events.js';

var today = new Date();
console.log(today);
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
let todayDay = today.getDate();
today = mm + '/' + dd + '/' + yyyy;


export function renderCalendar() {
    const thead = document.getElementById('cal-thead');
    for (let i = 0; i <= 7; i++){
        todayDay++;
        const th = document.createElement('th');
        th.textContent = mm + '/' + todayDay + '/' + yyyy;
        const tr = document.createElement('tr');
        
        tr.append(th);
        console.log(todayDay);
        thead.append(tr);
    
    }
    
    return thead;
    
    
    //On page load, load current week
    //render table heads
    //increment 1 week worth of dates
    //stop after 6
    //render empty <tr> in the <tbody>
}

export function renderEvents(){
    //loop through events create TD for each event with matching date
    //
    
    // const eventName = document.createElement('h1');
    // eventName.textContent = events.headliner;
    
    // const eventImage = document.createElement('img');
    // eventImage.src = events.image;
    
    // const eventOpener = document.createElement('h2');
    // eventOpener.textContent = events.opener;
    
    // const eventDoors = document.createElement('');
    // eventDoors.textContent = events.doors;
    
    // const eventPrice = document.createElement('');
    // eventPrice.textContent = events.price;
    
    // const eventDate = document.createElement('');
    // eventDate.textContent = events.date;
    
    // const eventLink = document.createElement('');
    // eventLink.textContent = events.link;
    
    // const eventVenue = document.createElement('');
    // eventVenue.textContent = events.venue;

}