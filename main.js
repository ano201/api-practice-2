document.getElementById('load-user').addEventListener('click', function () {
 const count = parseInt(document.getElementById('user-count').value);
 fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {
 data = data.slice(0, count);
 userData(data)
 
})
})
const userContainer = document.getElementById('user');

function userData(data) {
 for (var i = 0; i < data.length; i++) {
  const user = data[i];
  const paragraph = document.createElement('p');
  paragraph.innerHTML = '';
  paragraph.innerHTML = `
   Name: <strong>${user.name}</strong>
   <button onclick='getDetails(${user.id})'>Get Details-${user.id}</button>
   `;
  userContainer.appendChild(paragraph);
 } 
}

function getDetails(useerId) {
 fetch(`https://jsonplaceholder.typicode.com/users/${useerId}`)
 .then(res => res.json())
 .then(data => {
  const detailsContainer = document.getElementById('details');
  detailsContainer.innerHTML = '';
  detailsContainer.innerHTML = `
   <h1>${data.name}</h1>
   <h3>Email: ${data.email}</h3>
   <h3>Phone: ${data.phone}</h3>
   <h3>Webite: ${data.website}</h3>
   <h3>Company: ${data.company.name}</h3>
  `;
 })
}