import endpoints from "endpoints";
const getProductos = async () => {
  const response = await fetch(endpoints.productos, {
    method: "POST",
  });

  const ProductosJSON = await response.json();
  //console.log(ProductosJSON);
  return ProductosJSON;
};

export default getProductos;
