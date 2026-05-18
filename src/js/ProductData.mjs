const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ProductData {
  // Entonces tengo que eliminar el constructor de ProductData??, porque getData todavía usa el parámetro 'category' en ProductList.js así: async init() {
  //   const list = await this.dataSource.getData(this.category);
  //   this.renderList(list);
  // }, ¿o es que solo le tengo que pasar 'category' específicamente a getData() y no a toda la clase?
  constructor(category) {
    this.category = category;
  }
  async getData(category) {
  const response = await fetch(`${baseURL}products/search/${category} `);
  const data = await convertToJson(response);
  return data.Result;
}
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
  }
} 
