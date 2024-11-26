const apiUrl = 'http://localhost:5500'; // Asegúrate de que este sea el puerto correcto para tu API

// Función para cargar los datos de cada sección
function loadData(url, tableId) {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tableBody = document.querySelector(`#${tableId} tbody`);
      tableBody.innerHTML = ''; // Limpiar la tabla antes de agregar los nuevos datos
      data.forEach(item => {
        const row = document.createElement('tr');
        Object.values(item).forEach(value => {
          const td = document.createElement('td');
          td.textContent = value;
          row.appendChild(td);
        });
        tableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Asignar eventos a los botones para cargar datos
document.getElementById('fetchLibros').addEventListener('click', () => {
  loadData(`${apiUrl}/libros`, 'librosTable');
});

document.getElementById('fetchAutores').addEventListener('click', () => {
  loadData(`${apiUrl}/autores`, 'autoresTable');
});

document.getElementById('fetchEditoriales').addEventListener('click', () => {
  loadData(`${apiUrl}/editoriales`, 'editorialesTable');
});

document.getElementById('fetchUsuarios').addEventListener('click', () => {
  loadData(`${apiUrl}/usuarios`, 'usuariosTable');
});

document.getElementById('fetchCategorias').addEventListener('click', () => {
  loadData(`${apiUrl}/categorias`, 'categoriasTable');
});

document.getElementById('fetchPrestamos').addEventListener('click', () => {
  loadData(`${apiUrl}/prestamos`, 'prestamosTable');
});

document.getElementById('fetchMultas').addEventListener('click', () => {
  loadData(`${apiUrl}/multas`, 'multasTable');
});
