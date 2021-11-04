<<<<<<< HEAD
import { renderEvents } from '../utils/render-functions.js';
import { getEvents, setEvents } from '../utils/storage-utils.js';

=======
// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getEvents, setEvents, getUser, setUser } from '../utils/storage-utils.js';
 
>>>>>>> 78ae9edc93ca0f44089f1a4b5260d488560c235e
const test = QUnit.test;

test('getEvents should get events out of local storage', (expect) => {
    const fakeEvent = {
        venue: 'Doug Fir',
        opener: 'Zach',
        headliner: 'Karyssa',
        price: 'Free',
        image: 'www.fakeimage.com',
        doors: '7:00 pm',
        date: '2021-11-6',
        link: 'www.faketicket.com'
    };

    localStorage.setItem('EVENTS', JSON.stringify(fakeEvent));

    const events = getEvents();
    expect.deepEqual(events, fakeEvent);
});

test('setEvents should add an event to our event list', (expect) => {
    localStorage.removeItem('EVENTS');
    
    let events = getEvents();
    const newEvent = {
        venue: 'Doug Fir',
        opener: 'Zach',
        headliner: 'Karyssa',
        price: 'Free',
        image: 'www.fakeimage.com',
        doors: '7:00 pm',
        date: '2021-11-6',
        link: 'www.faketicket.com'
    };

    setEvents(newEvent);

    expect.equal(events.length, 24);
});

<<<<<<< HEAD
=======
test('getUser should return the userArray from localStorage ', (expect) => {
    const userArray = {
        name: 'zachary',
        password: 'admin1234',
        admin: true
    };
    setUser(userArray);
    const actual = getUser();
    expect.deepEqual(actual, userArray);

});
>>>>>>> 78ae9edc93ca0f44089f1a4b5260d488560c235e
