export function findById(items, id) {
    for (let item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function setUser(userObject) {
    localStorage.setItem('USER', JSON.stringify(userObject));
}

export function getUserObject() {
    const userString = localStorage.getItem('USER') || '[ ]';
    return JSON.parse(userString);
}

export function confirmUser(userObject, username, password) {
    for (let user of userObject) {
        if (username === user.username && password === user.password) {
            const loggedIn = user;
            localStorage.setItem('LOGGEDIN', JSON.stringify(loggedIn));
            return window.location.replace('../calendar/index.html');
        }
    }
}