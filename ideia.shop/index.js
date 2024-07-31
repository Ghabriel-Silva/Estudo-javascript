document.addEventListener('DOMContentLoaded', () => {
    const products = [
      { id: 1, name: 'Produto 1', price: 10.00 },
      { id: 2, name: 'Produto 2', price: 20.00 },
      { id: 3, name: 'Produto 3', price: 30.00 },
    ];
  
    const cart = [];
  
    function renderProducts() {
      const productList = document.getElementById('product-list');
      productList.innerHTML = '';
  
      products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
          <h3>${product.name}</h3>
          <p>Preço: R$ ${product.price.toFixed(2)}</p>
          <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
        `;
        productList.appendChild(productDiv);
      });
    }
  
    function renderCart() {
      const cartItems = document.getElementById('cart-items');
      cartItems.innerHTML = '';
  
      cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.className = 'cart-item';
        cartItemDiv.innerHTML = `
          <h3>${item.name}</h3>
          <p>Preço: R$ ${item.price.toFixed(2)}</p>
          <p>Quantidade: ${item.quantity}</p>
        `;
        cartItems.appendChild(cartItemDiv);
      });
  
      const cartTotal = document.getElementById('cart-total');
      const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      cartTotal.innerHTML = `Total: R$ ${total.toFixed(2)}`;
    }
  
    window.addToCart = (productId) => {
      const product = products.find(p => p.id === productId);
      const cartItem = cart.find(item => item.id === productId);
  
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
  
      renderCart();
    };
  
    document.getElementById('view-cart-button').addEventListener('click', () => {
      const cartSection = document.getElementById('cart');
      cartSection.style.display = cartSection.style.display === 'none' ? 'block' : 'none';
    });
  
    renderProducts();
    renderCart();
  });
  