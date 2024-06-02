function addProduct() {
  let title = document.getElementById("title").value;
  let price = document.getElementById("price").value;
  let imageUrl = document.getElementById("imageUrl").value;

  if (title && price && imageUrl) {
    
    let product = {
      title: title,
      price: price,
      imageUrl: imageUrl,
    };

    if (localStorage.getItem("products") === null) {
      let products = [];
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
    } else {
      let products = JSON.parse(localStorage.getItem("products"));
      products.push(product);
      localStorage.setItem("products", JSON.stringify(products));
    }

    displayProducts();
    clearForm();
  } else {
    alert("Заполните все поля!!!");
  }
}

function displayProducts() {
  let table = document.getElementById("productTable");
  table.innerHTML =
    "<tr><th>Title</th><th>Price</th><th>Image</th><th>Action</th></tr>";

  let products = JSON.parse(localStorage.getItem("products"));

  if (products !== null) {
    for (var i = 0; i < products.length; i++) {
      let row = table.insertRow(table.rows.length);
      let cell1 = row.insertCell(0);
      let cell2 = row.insertCell(1);
      let cell3 = row.insertCell(2);
      let cell4 = row.insertCell(3);

      cell1.innerHTML = products[i].title;
      cell2.innerHTML = products[i].price;
      cell3.innerHTML =
        '<img src="' +
        products[i].imageUrl +
        '" alt="' +
        products[i].title +
        '" style="max-width: 100px; max-height: 100px;">';
      cell4.innerHTML =
        '<button onclick="editProduct(' +
        i +
        ')">Edit</button> ' +
        '<button onclick="deleteProduct(' +
        i +
        ')">Delete</button>';
    }
  }
}

function editProduct(index) {
  let products = JSON.parse(localStorage.getItem("products"));
  let product = products[index];

  document.getElementById("title").value = product.title;
  document.getElementById("price").value = product.price;
  document.getElementById("imageUrl").value = product.imageUrl;

  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();
}

function deleteProduct(index) {
  let products = JSON.parse(localStorage.getItem("products"));
  products.splice(index, 1);
  localStorage.setItem("products", JSON.stringify(products));

  displayProducts();
}

function clearForm() {
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("imageUrl").value = "";
}

displayProducts();
