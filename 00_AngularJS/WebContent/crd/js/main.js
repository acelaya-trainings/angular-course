
window.onload = function () {
	var form = document.getElementById('crudForm'),
		deleteBtn = document.getElementsByClassName('delete');
	
	deleteBtn.onclick = deleteRow;
	form.onsubmit = save;
	populateTable();
};

function populateTable () {
	var productos = document.getElementById('productos');
	productos.innerHTML = '';
	for (var i in localStorage) {
		var product = JSON.parse(localStorage[i]);
		productos.innerHTML += 
			'<tr><td>' + product.id + 
			'</td><td>' + product.nombre + 
			'</td><td>' + product.precio + 
			'</td><td>' + product.cantidad + 
			'</td><td>' + (product.disponible ? 'Si' : 'No') + 
			'</td><td><button class="delete" onclick="deleteRow(' + product.id + ')">Delete</button>' +
			'</td></tr>';
	}
};

function save (e) {
	e.preventDefault();
	var product = {
		id: document.getElementById('id').value,
		nombre: document.getElementById('nombre').value,
		precio: document.getElementById('precio').value,
		cantidad: document.getElementById('cantidad').value,
		disponible: document.getElementById('disponible').checked,
	};
	localStorage.setItem('product_' + product.id, JSON.stringify(product));
	this.reset();
	populateTable();
};

function deleteRow (productId) {
	localStorage.removeItem('product_' + productId);
	populateTable();
};
