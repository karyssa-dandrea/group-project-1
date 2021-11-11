import { getUser, setUser, confirmUser } from '../utils/storage-utils.js';
import { users } from '../data/users.js';

const form = document.getElementById('login-form');
setUser(users);
// I don't think you need this -- you're not doing anything with the returned array
// getUser();


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userArray = getUser();
    const formData = new FormData(form);
    const userName = formData.get('username');
    const password = formData.get('password');
    confirmUser(userArray, userName, password);
});