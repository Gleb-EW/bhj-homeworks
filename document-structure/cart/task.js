document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.product').forEach(product => {
    const decBtn = product.querySelector('.product__quantity-control_dec');
    const incBtn = product.querySelector('.product__quantity-control_inc');
    const quantityValue = product.querySelector('.product__quantity-value');

    decBtn.addEventListener('click', () => {
      let val = parseInt(quantityValue.textContent);
      if (val > 1) {
        quantityValue.textContent = val - 1;
      }
    });

    incBtn.addEventListener('click', () => {
      let val = parseInt(quantityValue.textContent);
      quantityValue.textContent = val + 1;
    });
  });

  const cart = document.querySelector('.cart');

  document.querySelectorAll('.product__add').forEach(btn => {
    btn.addEventListener('click', () => {
      const product = btn.closest('.product');
      const id = product.dataset.id;
      const imgSrc = product.querySelector('.product__image').src;
      const quantityValue = product.querySelector('.product__quantity-value');
      const quantityToAdd = parseInt(quantityValue.textContent);

      let cartProduct = cart.querySelector(`.cart__product[data-id="${id}"]`);

      if (cartProduct) {
        const countElem = cartProduct.querySelector('.cart__product-count');
        countElem.textContent = parseInt(countElem.textContent) + quantityToAdd;
      } else {
        cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = id;

        const img = document.createElement('img');
        img.className = 'cart__product-image';
        img.src = imgSrc;

        const count = document.createElement('div');
        count.className = 'cart__product-count';
        count.textContent = quantityToAdd;

        cartProduct.appendChild(img);
        cartProduct.appendChild(count);
        cart.appendChild(cartProduct);
      }
    });
  });
});
