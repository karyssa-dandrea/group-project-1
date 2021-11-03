import { getUserObject, setUser, confirmUser } from '../utils/storage-utils.js';

const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userObject = getUserObject();
    const formData = new FormData(form);
    const userName = formData.get('username');
    const password = formData.get('password');

    if (confirmUser(userObject, userName, password)) {
        const newUserObject = {
            username: userName,
            password: password,
            users: [
                {
                    name: 'zachary',
                    password: 'admin1234',
                    admin: true
          
                }, {
                    name: 'bailey',
                    password: 'admin1234',
                    admin: true
          
                }, {
                    name: 'karyssa',
                    password: 'admin1234',
                    admin: true
                }
            ]
        };
        userObject.push(newUserObject);
        setUser(userObject);
    }
});