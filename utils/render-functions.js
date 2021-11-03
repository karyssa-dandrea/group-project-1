import { events } from '../data/events.js';


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
    for (let i = 0; i <= 6; i++){
        todayDay++;
        const th = document.createElement('th');
        th.textContent = mm + '/' + todayDay + '/' + yyyy;
        th.setAttribute('id', yyyy + '-' + mm + '-' + todayDay);
        thead.append(th);
    }
    return thead;
}



export function renderEvents(events){
    const tbody = document.getElementById('cal-body');
    
    const eventData = events.filter(event=>{
        let today = new Date();
        const eventDate = new Date(event.date);
        if (eventDate.getDate() + 1 <= today.getDate() + 7){
            
            
            return event;
        }
    });
    eventData.sort((a, b) => {
        let da = new Date(a.date),
            db = new Date(b.date);
        return da - db;
    });
    const tr = document.createElement('tr');
    todayDay = new Date().getDate();
    for (let i = 0; i <= 6; i++){
        todayDay++;
        const td = document.createElement('td');
        const eventData = events.filter(event=>{
            
            const eventDate = new Date(event.date);
            if (eventDate.getDate() + 1 === todayDay){
                
                
                return event;
            }
        });
        console.log(todayDay);
        console.log(eventData);
        //filter events using todayDay
        tr.append(td);
    }

    // for (let event of eventData){
    //     //findById each th
    //     //compare the id to filtered date by sorting
    //     //
    //     //let th = document.getElementById(th.textContent);
    //     //console.log(th);

    //     const td = document.createElement('td');
    //     td.setAttribute('headers', event.date);
        

    //     const eventName = document.createElement('a');
    //     eventName.textContent = event.headliner;
    //     eventName.href = event.link;
        
    //     const eventImage = document.createElement('img');
    //     eventImage.src = event.image;

    //     //sort and append by date
    //     td.append(eventImage, eventName);
    //     tbody.append(td);
    // }
    
    //let currentDate = todayDay;

    // for (    {
    //     const calDay = yyyy + '-' + mm + '-' + currentDate++ ;
    //     if (eventData === calDay){
    //         const td = document.createElement(td);

    //         const eventName = document.createElement('a');
    //         eventName.textContent = events.headliner;
    //         eventName.href = events.link;
        
    //         const eventImage = document.createElement('img');
    //         eventImage.src = events.image;

    //         td.append(eventImage, eventName);
    //         tbody.append(td);
    //     }
    //     return tbody;
    // }
    

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