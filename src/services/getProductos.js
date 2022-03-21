const URL = "http://localhost/icandy/API/consulta_productos.php";

const getProductos = async () => {
  const response = await fetch(URL, {
    method: "POST",
  });

  const ProductosJSON = await response.json();
  //console.log(ProductosJSON);
  return ProductosJSON;
};

export default getProductos;
