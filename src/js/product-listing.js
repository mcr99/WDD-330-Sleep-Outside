import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
<<<<<<< HEAD
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();

const category = getParams("category");

const dataSource = new ProductData();

const element = document.querySelector(".product-list");

const list = new ProductList("category", dataSource, element);

list.init();
=======
import { getParam, showCategory, loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter()

const category = getParam("category");
showCategory(category); 
const dataSource = new ProductData(category);

const element = document.querySelector(".product-list");

const list = new ProductList(category, dataSource, element);

list.init();
>>>>>>> f66e3447ae8d42a5f640198bd0eb949c597489f3
