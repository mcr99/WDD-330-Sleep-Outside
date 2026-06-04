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
      <a href="../product_pages/index.html?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}" />
        <h3 class="card__brand">${product.Brand.Name}</h3>
        <h2 class="card__name">${product.Name}</h2>
        
        <div class="product-card__price-info">
          ${discountHTML ? `<p class="discount-badge">${discountHTML}</p>` : ""}
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

  this.originalList = list;

  this.renderList(list);

  const sortSelect = document.querySelector("#sort-products");

    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        const sortedList = [...this.originalList];

        switch (e.target.value) {
          case "name-asc":
            sortedList.sort((a, b) => a.Name.localeCompare(b.Name));
            break;

          case "name-desc":
            sortedList.sort((a, b) => b.Name.localeCompare(a.Name));
            break;

          case "price-asc":
            sortedList.sort((a, b) => a.FinalPrice - b.FinalPrice);
            break;

          case "price-desc":
            sortedList.sort((a, b) => b.FinalPrice - a.FinalPrice);
            break;
        }

        this.renderList(sortedList);
      });
    }
  
}
}
