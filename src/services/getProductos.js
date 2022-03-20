const URL = "http://localhost/icandy/consulta_productos.php";

const getProductos = async () => {
  const response = await fetch(URL, {
    method: "POST",
  });
  const ProductosJSON = await response.json();
  return ProductosJSON;
};

export default getProductos;
