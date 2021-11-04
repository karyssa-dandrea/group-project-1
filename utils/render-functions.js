
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();
let todayDay = today.getDate();
today = mm + '/' + dd + '/' + yyyy;

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

        eventData.forEach(event =>{
            const eventDiv = document.createElement('div');
            const eventName = document.createElement('a');
            eventName.textContent = event.headliner;
            eventName.href = event.link;
        
            const eventImage = document.createElement('img');
            eventImage.src = event.image;
            eventDiv.append(eventImage, eventName);
            td.append(eventDiv);
        });
        
        tr.append(td);
        tbody.append(tr);
    }}