//import events from './data/events.js';

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let todayDay = today.getDate();
today = mm + '/' + dd + '/' + yyyy;

//if yyyy-mm-dd === event.date
//td.textcontent = event


export function renderCalendar() {
    const thead = document.getElementById('cal-thead');
    for (let i = 0; i <= 7; i++){
        todayDay++;
        const th = document.createElement('th');
        th.textContent = mm + '/' + todayDay + '/' + yyyy;
        thead.append(th);
    }
    return thead;
}

export function findByDate(date, events){

    for (let event of events){
        if (event.date === date){
            return event;
        }
    }
}

export function renderEvents(events){
    const tbody = document.getElementById('cal-body');
    const eventData = findByDate(events.date, events);
    console.log(eventData);
    let currentDate = todayDay;

    for (let i = 0; i <= 7; i++){
        const calDay = yyyy + '-' + mm + '-' + currentDate++ ;
        if (eventData === calDay){
            const td = document.createElement(td);

            const eventName = document.createElement('a');
            eventName.textContent = events.headliner;
            eventName.href = events.link;
        
            const eventImage = document.createElement('img');
            eventImage.src = events.image;

            td.append(eventImage, eventName);
            tbody.append(td);
        }
        return tbody;
    }
    

    // for (let event of events) {
        
    //     if (eventDate){

    //     }

    //     const td = document.createElement(td);

    //     const eventName = document.createElement('a');
    //     eventName.textContent = events.headliner;
    //     eventName.href = events.link;
        
    //     const eventImage = document.createElement('img');
    //     eventImage.src = events.image;

    //     td.append(eventImage, eventName);
        

        
    //     // const eventOpener = document.createElement('h2');
    //     // eventOpener.textContent = events.opener;
        
    //     // const eventDoors = document.createElement('');
    //     // eventDoors.textContent = events.doors;
        
    //     // const eventPrice = document.createElement('');
    //     // eventPrice.textContent = events.price;
        
    //     // const eventDate = document.createElement('');
    //     // eventDate.textContent = events.date;
        
    //     // const eventLink = document.createElement('');
    //     // eventLink.textContent = events.link;
        
    //     // const eventVenue = document.createElement('');
    //     // eventVenue.textContent = events.venue;
    //     return event;
    // }


    // //loop through events create TD for each event with matching date
    // //
    

}