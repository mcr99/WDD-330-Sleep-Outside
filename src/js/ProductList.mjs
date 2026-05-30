import { renderListWithTemplate } from "./utils.mjs";

export function discountBadgeTemplate(product) {
  const isDiscounted = product.FinalPrice < product.SuggestedRetailPrice;
  if (isDiscounted) {
    const savings = (product.SuggestedRetailPrice - product.FinalPrice).toFixed(
      2,
    );
    return `<span class="discount-badge">Save $${savings}!!!</span>`;
  }
  return "";
}

export function productCardTemplate(product) {
  const discountHTML = discountBadgeTemplate(product);
  const isDiscounted = product.FinalPrice < product.SuggestedRetailPrice;
 
  return `
    <li class="product-card">
<<<<<<< HEAD
      <a href="product_pages/index.html?product=${product.Id}" aria-label="view details for ${product.Name}">
        <img src="${product.Image}" alt="${product.Name}" loading="lazy" />
        <h3 class="card__brand">${product.Brand?.Name || ""}</h3>
=======
      <a href="../product_pages/index.html?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}" />
        <h3 class="card__brand">${product.Brand.Name}</h3>
>>>>>>> f66e3447ae8d42a5f640198bd0eb949c597489f3
        <h2 class="card__name">${product.Name}</h2>
        
        <div class="product-card__price-info">
          ${discountHTML}
          <p class="product-card__price">$${product.FinalPrice}</p>
          ${
            isDiscounted
              ? `<p class="product-card__suggested-price"><strike>$${product.SuggestedRetailPrice}</strike></p>`
              : ""
          }
        </div>
      </a>
    </li>
  `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }
  renderList(list) {
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
  }
}
