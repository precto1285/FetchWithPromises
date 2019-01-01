const http = new easyHTTP;

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(error => console.log(err));

// console.log(users);

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

//Create User
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(err));

//update User
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(error => console.log(err));

// Delete User
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(error => console.log(err));