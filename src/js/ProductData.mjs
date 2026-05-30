const baseURL = import.meta.env.VITE_SERVER_URL;

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

const baseURL = import.meta.env.VITE_SERVER_URL;

export default class ProductData {
<<<<<<< HEAD
  
=======
  constructor(category) {
    this.category = category;
  }
>>>>>>> f66e3447ae8d42a5f640198bd0eb949c597489f3
  async getData(category) {
  const response = await fetch(`${baseURL}products/search/${category}`);
  const data = await convertToJson(response);
  return data.Result;
}
<<<<<<< HEAD

  async findProductById(id, category) {
    const products = await this.getData(category);
    return products.find((item) => item.Id === id);
=======
  async findProductById(id) {
    const response = await fetch(`${baseURL}product/${id}`);
    const data = await convertToJson(response);
    return data.Result;
>>>>>>> f66e3447ae8d42a5f640198bd0eb949c597489f3
  }
} 
