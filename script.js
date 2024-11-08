
function obtenerUsuarios() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('container');
    
    data.forEach(user => {
      const row = document.createElement('div');
      row.classList.add('row');
      row.classList.add('mb-3');
      const idCol = document.createElement('div');
      idCol.classList.add('col');
      idCol.textContent = user.id;
      const nameCol = document.createElement('div');
      nameCol.classList.add('col');
      nameCol.textContent = user.name;
      const emailCol = document.createElement('div');
      emailCol.classList.add('col');
      emailCol.textContent = user.email;
      row.appendChild(idCol);
      row.appendChild(nameCol);
      row.appendChild(emailCol);
      container.appendChild(row);
    });
  })
  .catch(error => console.error('Error:', error));

}

obtenerUsuarios()

