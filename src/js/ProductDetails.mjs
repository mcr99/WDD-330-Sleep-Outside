import { getLocalStorage, setLocalStorage, itemsInCart } from "./utils.mjs";
import { discountBadgeTemplate } from "./ProductList.mjs";

export default class ProductDetails {
  constructor(productId, dataSource) {
    this.productId = productId;
    this.product = {};
    this.dataSource = dataSource;
  }
  async init() {
    this.product = await this.dataSource.findProductById(this.productId);
    this.renderProductDetails();
    document.getElementById("addToCart").onclick = () => {
      this.addProductToCart();
    }
  }
  addProductToCart() {
    const data = getLocalStorage("so-cart") || [];
    data.push(this.product);
    setLocalStorage("so-cart", data);
    itemsInCart()
  }
  
  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}

function productDetailsTemplate(product) {
  const discountHTML = discountBadgeTemplate(product);
  if (discountHTML) {
    document.getElementById("discountBadge").innerHTML = discountHTML;
    document.getElementById("productOriginalPrice").textContent = `$${product.SuggestedRetailPrice}`;
  }
  document.querySelector("h2").textContent = product.Brand.Name;
  document.querySelector("h3").textContent = product.NameWithoutBrand;

  const productImage = document.getElementById("productImage");
  if (productImage) {
    productImage.src = product.Images.PrimaryLarge;
    productImage.alt = product.NameWithoutBrand;
  }
  

  document.getElementById("productPrice").textContent = `Final Price: $${product.FinalPrice}`;
  document.getElementById("productColor").textContent =
    product.Colors[0].ColorName;
  document.getElementById("productDesc").innerHTML =
    product.DescriptionHtmlSimple;

  document.getElementById("addToCart").dataset.id = product.Id;
}
