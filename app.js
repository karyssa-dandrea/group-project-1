import { getUserObject, setUser, confirmUser } from '../utils/storage-utils.js';
import { users } from '../data/users.js';

const form = document.getElementById('login-form');
setUser(users);
getUserObject();

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userObject = getUserObject();
    console.log(userObject);
    const formData = new FormData(form);
    const userName = formData.get('username');
    const password = formData.get('password');

    if (confirmUser(userObject, userName, password)) {
        const newUserObject = {
            username: userName,
            password: password,
            admin: false
        };
        userObject.push(newUserObject);
        setUser(userObject);
        getUserObject();
    }
});