import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";
<<<<<<< HEAD
import { loadHeaderFooter } from './utils.mjs';

loadHeaderFooter();
=======
import { loadHeaderFooter } from "./utils.mjs";
>>>>>>> f66e3447ae8d42a5f640198bd0eb949c597489f3

loadHeaderFooter();

const dataSource = new ProductData();
const productId = getParam("product");
const productDetails = new ProductDetails(productId, dataSource);
productDetails.init();

