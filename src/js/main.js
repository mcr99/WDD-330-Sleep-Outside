<<<<<<< HEAD
=======
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ProductData("tents");

const element = document.querySelector(".product-list");

const list = new ProductList("tents", dataSource, element);

list.init();
>>>>>>> f66e3447ae8d42a5f640198bd0eb949c597489f3
