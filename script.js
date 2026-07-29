const rupeeSymbol = String.fromCharCode(8377);
const starSvg = `
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    <path d="M12 2.5l2.94 5.96 6.58.96-4.76 4.64 1.12 6.55L12 17.52 6.12 20.61l1.12-6.55L2.48 9.42l6.58-.96L12 2.5z"></path>
  </svg>
`;
const productsPerPage = 6;

const products = [
  {
    id: 'tee-001',
    name: '46 The Doctor Edition',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.9,
    description: 'Front-and-back rider artwork with six preview images in one product card.',
    colors: ['#312e81', '#111827'],
    images: [
      'assets/products/46-fa/01.png',
      'assets/products/46-fa/02.png',
      'assets/products/46-fa/03.png',
      'assets/products/46-fa/04.png',
      'assets/products/46-fa/05.png',
      'assets/products/46-fa/06.png'
    ]
  },
  {
    id: 'tee-002',
    name: 'Acid Wash Oversized Tee',
    category: 'oversized',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Oversized acid-wash tee with five preview images in one gallery card.',
    colors: ['#3b2f2a', '#8a6c59'],
    images: [
      'assets/products/acid-wash-fa/01.png',
      'assets/products/acid-wash-fa/02.png',
      'assets/products/acid-wash-fa/03.png',
      'assets/products/acid-wash-fa/04.png',
      'assets/products/acid-wash-fa/05.png'
    ]
  },
  {
    id: 'tee-003',
    name: 'Biker Helmet Graphic Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.7,
    description: 'Front-and-back biker helmet artwork with five preview images in one gallery card.',
    colors: ['#111827', '#e5e7eb'],
    images: [
      'assets/products/biker-helmet-fa/01.png',
      'assets/products/biker-helmet-fa/02.png',
      'assets/products/biker-helmet-fa/03.png',
      'assets/products/biker-helmet-fa/04.png',
      'assets/products/biker-helmet-fa/05.png'
    ]
  },
  {
    id: 'tee-004',
    name: 'Biker Plug Graphic Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Front chest plug graphic with large back biker art and five preview images in one gallery card.',
    colors: ['#111827', '#f8fafc'],
    images: [
      'assets/products/biker-plug-fa/01.png',
      'assets/products/biker-plug-fa/02.png',
      'assets/products/biker-plug-fa/03.png',
      'assets/products/biker-plug-fa/04.png',
      'assets/products/biker-plug-fa/05.png'
    ]
  },
  {
    id: 'tee-005',
    name: 'Born To Ride Graphic Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.9,
    description: 'Front slogan with bold back bike artwork and four preview images in one gallery card.',
    colors: ['#f97316', '#ffffff'],
    images: [
      'assets/products/born-to-ride-fa/01.png',
      'assets/products/born-to-ride-fa/02.png',
      'assets/products/born-to-ride-fa/03.png',
      'assets/products/born-to-ride-fa/04.png'
    ]
  },
  {
    id: 'tee-006',
    name: 'Honda Oversized Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Honda front logo with oversized back print and four preview images in one gallery card.',
    colors: ['#d6c2a1', '#f97316'],
    images: [
      'assets/products/honda-f/01.jpg',
      'assets/products/honda-f/02.png',
      'assets/products/honda-f/03.png',
      'assets/products/honda-f/04.png'
    ]
  },
  {
    id: 'tee-007',
    name: 'Kakashi Anime Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Minimal front with large Kakashi back artwork and five preview images in one gallery card.',
    colors: ['#111827', '#f8fafc'],
    images: [
      'assets/products/kakashi-fa/01.png',
      'assets/products/kakashi-fa/02.png',
      'assets/products/kakashi-fa/03.png',
      'assets/products/kakashi-fa/04.png',
      'assets/products/kakashi-fa/05.png'
    ]
  },
  {
    id: 'tee-008',
    name: 'Looney Tunes Graphic Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.7,
    description: 'Minimal front with bold Looney Tunes back artwork and five preview images in one gallery card.',
    colors: ['#111827', '#f8fafc'],
    images: [
      'assets/products/looney-tunes-f/01.png',
      'assets/products/looney-tunes-f/02.png',
      'assets/products/looney-tunes-f/03.png',
      'assets/products/looney-tunes-f/04.png',
      'assets/products/looney-tunes-f/05.png'
    ]
  },
  {
    id: 'tee-009',
    name: 'Naruto Anime Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.9,
    description: 'Small Naruto front logo with bold back artwork and four preview images in one gallery card.',
    colors: ['#111827', '#facc15'],
    images: [
      'assets/products/naruto-fa/01.png',
      'assets/products/naruto-fa/02.png',
      'assets/products/naruto-fa/03.png',
      'assets/products/naruto-fa/04.png'
    ]
  },
  {
    id: 'tee-010',
    name: 'Ninja Theme Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.6,
    description: 'Small front print with Japanese-style back artwork and five preview images in one gallery card.',
    colors: ['#111827', '#ef4444'],
    images: [
      'assets/products/ninja-theme-fa/01.png',
      'assets/products/ninja-theme-fa/02.png',
      'assets/products/ninja-theme-fa/03.png',
      'assets/products/ninja-theme-fa/04.png',
      'assets/products/ninja-theme-fa/05.png'
    ]
  },
  {
    id: 'tee-011',
    name: 'Risk Taker Oversized Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Minimal front logo with oversized Risk Taker back artwork and four preview images in one gallery card.',
    colors: ['#111827', '#f8fafc'],
    images: [
      'assets/products/risk-taker-fa/01.png',
      'assets/products/risk-taker-fa/02.png',
      'assets/products/risk-taker-fa/03.png',
      'assets/products/risk-taker-fa/04.png'
    ]
  },
  {
    id: 'tee-012',
    name: 'Siva Chill Graphic Tee',
    category: 'graphic',
    price: 499,
    mrp: 599,
    rating: 4.7,
    description: 'Minimal front with bold Chill Chill back artwork and four preview images in one gallery card.',
    colors: ['#e5e7eb', '#64748b'],
    images: [
      'assets/products/siva-chill-fa/01.png',
      'assets/products/siva-chill-fa/02.png',
      'assets/products/siva-chill-fa/03.png',
      'assets/products/siva-chill-fa/04.png'
    ]
  },
  {
    id: 'tee-013',
    name: 'Puma Pattern Polo',
    category: 'minimal',
    price: 499,
    mrp: 599,
    rating: 4.7,
    description: 'Blue abstract polo pattern with four preview images in one gallery card.',
    colors: ['#1e3a8a', '#dbeafe'],
    images: [
      'assets/products/puma-01/01.png',
      'assets/products/puma-01/02.png',
      'assets/products/puma-01/03.png',
      'assets/products/puma-01/04.png'
    ]
  },
  {
    id: 'tee-014',
    name: 'Abstract Summer Shirt',
    category: 'minimal',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Fresh all-over abstract print shirt with four preview images in one gallery card.',
    colors: ['#d6d3c4', '#334155'],
    images: [
      'assets/products/puma-02/01.png',
      'assets/products/puma-02/02.png',
      'assets/products/puma-02/03.png',
      'assets/products/puma-02/04.png'
    ]
  },
  {
    id: 'tee-015',
    name: 'Geo Pattern Polo',
    category: 'minimal',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Fresh geometric print polo with four preview images in one gallery card.',
    colors: ['#64748b', '#d9f99d'],
    images: [
      'assets/products/puma-03/01.png',
      'assets/products/puma-03/02.png',
      'assets/products/puma-03/03.png',
      'assets/products/puma-03/04.png'
    ]
  },
  {
    id: 'tee-016',
    name: 'Earth Splash Polo',
    category: 'minimal',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Soft earth-tone abstract polo with four preview images in one gallery card.',
    colors: ['#9a7b61', '#2f3f63'],
    images: [
      'assets/products/puma-04/01.png',
      'assets/products/puma-04/02.png',
      'assets/products/puma-04/03.png',
      'assets/products/puma-04/04.png'
    ]
  },
  {
    id: 'tee-017',
    name: 'Rose Geo Polo',
    category: 'minimal',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: 'Rose-toned geometric polo with four preview images in one gallery card.',
    colors: ['#b48a97', '#3f4654'],
    images: [
      'assets/products/puma-05/01.png',
      'assets/products/puma-05/02.png',
      'assets/products/puma-05/03.png',
      'assets/products/puma-05/04.png'
    ]
  },
  {
    id: 'tee-018',
    name: 'Coming Soon',
    category: 'minimal',
    price: 499,
    mrp: 599,
    rating: 4.8,
    description: '',
    colors: ['#312e81', '#8b5cf6'],
    comingSoon: true
  }
];

const state = {
  filter: 'all',
  page: 1,
  cart: []
};

const productsGrid = document.getElementById('productsGrid');
const pagination = document.getElementById('pagination');
const template = document.getElementById('productCardTemplate');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartDrawer = document.getElementById('cartDrawer');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const newsletterForm = document.getElementById('newsletterForm');
const featuredButton = document.querySelector('.add-featured');
const customForm = document.getElementById('customForm');
const designUpload = document.getElementById('designUpload');
const designPreview = document.getElementById('designPreview');

function formatPrice(price) {
  return `${rupeeSymbol}${new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0
  }).format(price)}`;
}

function createRatingMarkup(value) {
  return `
    <span class="stars" aria-hidden="true">${Array.from({ length: 5 }, () => starSvg).join('')}</span>
    <span>${value.toFixed(1)}</span>
  `;
}

function filteredProducts() {
  return state.filter === 'all'
    ? products
    : products.filter((product) => product.category === state.filter);
}

function paginatedProducts() {
  const start = (state.page - 1) * productsPerPage;
  return filteredProducts().slice(start, start + productsPerPage);
}

function totalPages() {
  return Math.max(1, Math.ceil(filteredProducts().length / productsPerPage));
}

function renderProducts() {
  productsGrid.innerHTML = '';

  paginatedProducts().forEach((product) => {
    const clone = template.content.cloneNode(true);
    const card = clone.querySelector('.product-card');
    const image = clone.querySelector('.product-image');
    const thumbnails = clone.querySelector('.product-thumbnails');
    const gallery = clone.querySelector('.product-gallery');
    const meta = clone.querySelector('.product-meta');
    const name = clone.querySelector('.product-name');
    const description = clone.querySelector('.product-description');
    const price = clone.querySelector('.product-price');
    const addToCartButton = card.querySelector('.add-to-cart');

    clone.querySelector('.product-category').textContent = product.category;
    clone.querySelector('.product-rating').innerHTML = createRatingMarkup(product.rating);
    clone.querySelector('.product-rating').setAttribute('aria-label', `Rated ${product.rating.toFixed(1)} out of 5`);
    name.textContent = product.name;
    description.textContent = product.description;
    price.innerHTML = product.mrp
      ? `<span class="product-mrp">${formatPrice(product.mrp)}</span> <span>${formatPrice(product.price)}</span>`
      : formatPrice(product.price);

    if (product.comingSoon) {
      card.classList.add('product-card-coming-soon');
      gallery.remove();
      meta.remove();
      description.remove();
      price.remove();
      addToCartButton.remove();
      productsGrid.appendChild(clone);
      return;
    }

    if (product.images?.length) {
      image.src = product.images[0];
      image.alt = `${product.name} preview`;

      product.images.forEach((imagePath, index) => {
        const thumbButton = document.createElement('button');
        thumbButton.type = 'button';
        thumbButton.className = `product-thumb${index === 0 ? ' active' : ''}`;
        thumbButton.setAttribute('aria-label', `View ${product.name} image ${index + 1}`);

        const thumbImage = document.createElement('img');
        thumbImage.src = imagePath;
        thumbImage.alt = `${product.name} thumbnail ${index + 1}`;
        thumbButton.appendChild(thumbImage);

        thumbButton.addEventListener('click', () => {
          image.src = imagePath;
          thumbnails.querySelectorAll('.product-thumb').forEach((button) => button.classList.remove('active'));
          thumbButton.classList.add('active');
        });

        thumbnails.appendChild(thumbButton);
      });
    } else {
      image.alt = `${product.name} preview`;
      image.style.background = `linear-gradient(135deg, ${product.colors[0]}, ${product.colors[1]})`;
    }

    addToCartButton.addEventListener('click', () => addToCart(product.id));
    productsGrid.appendChild(clone);
  });
}

function renderPagination() {
  const pages = totalPages();
  pagination.innerHTML = '';

  if (pages <= 1) {
    return;
  }

  for (let pageNumber = 1; pageNumber <= pages; pageNumber += 1) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `page-btn${pageNumber === state.page ? ' active' : ''}`;
    button.textContent = pageNumber;
    button.setAttribute('aria-label', `Go to page ${pageNumber}`);
    button.addEventListener('click', () => {
      state.page = pageNumber;
      renderProducts();
      renderPagination();
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    pagination.appendChild(button);
  }
}

function addToCart(productId) {
  const existing = state.cart.find((item) => item.id === productId);
  if (existing) {
    existing.quantity += 1;
  } else {
    const product = products.find((item) => item.id === productId);
    state.cart.push({ ...product, quantity: 1 });
  }

  renderCart();
  openCart();
  showToast('Added to cart');
}

function removeFromCart(productId) {
  state.cart = state.cart.filter((item) => item.id !== productId);
  renderCart();
}

function renderCart() {
  cartCount.textContent = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  cartItems.innerHTML = '';

  if (!state.cart.length) {
    cartItems.innerHTML = '<p class="empty-state">Your cart is empty. Add some t-shirts to get started.</p>';
    cartTotal.textContent = formatPrice(0);
    return;
  }

  let total = 0;

  state.cart.forEach((item) => {
    total += item.price * item.quantity;
    const wrapper = document.createElement('div');
    wrapper.className = 'cart-item';
    wrapper.innerHTML = `
      <strong>${item.name}</strong>
      <div class="cart-item-meta">
        <span>${formatPrice(item.price)} x ${item.quantity}</span>
        <button type="button" data-remove="${item.id}">Remove</button>
      </div>
    `;
    wrapper.querySelector('button').addEventListener('click', () => removeFromCart(item.id));
    cartItems.appendChild(wrapper);
  });

  cartTotal.textContent = formatPrice(total);
}

function openCart() {
  cartDrawer.classList.add('open');
  overlay.classList.add('show');
  cartDrawer.setAttribute('aria-hidden', 'false');
}

function hideCart() {
  cartDrawer.classList.remove('open');
  overlay.classList.remove('show');
  cartDrawer.setAttribute('aria-hidden', 'true');
}

function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 1800);
}

function renderDesignPreview(file) {
  if (!file) {
    designPreview.innerHTML = '<p>No design uploaded yet</p>';
    return;
  }

  const imageUrl = URL.createObjectURL(file);
  designPreview.innerHTML = `
    <img src="${imageUrl}" alt="Custom design preview" class="design-preview-image" />
    <div class="design-preview-meta">
      <strong>${file.name}</strong>
      <span>${Math.round(file.size / 1024)} KB</span>
    </div>
  `;
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    state.filter = button.dataset.filter;
    state.page = 1;
    renderProducts();
    renderPagination();
  });
});

cartToggle.addEventListener('click', openCart);
closeCart.addEventListener('click', hideCart);
overlay.addEventListener('click', hideCart);
featuredButton.addEventListener('click', () => addToCart(featuredButton.dataset.productId));

designUpload.addEventListener('change', (event) => {
  const [file] = event.target.files;
  renderDesignPreview(file);
});

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailInput = document.getElementById('emailInput');
  showToast(`Thanks for subscribing, ${emailInput.value}!`);
  newsletterForm.reset();
});

customForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const uploadedFile = designUpload.files[0];
  if (!uploadedFile) {
    showToast('Please upload your design image');
    return;
  }

  const customerName = document.getElementById('customerName').value;
  const customQuantity = document.getElementById('customQuantity').value;
  const printPlacement = document.getElementById('printPlacement').value;
  const designNotes = document.getElementById('designNotes').value.trim();

  showToast(`Custom print request received for ${customerName}`);
  customForm.reset();
  designPreview.innerHTML = '<p>No design uploaded yet</p>';

  console.log({
    type: 'custom-print-request',
    customerName,
    customQuantity,
    printPlacement,
    designNotes,
    fileName: uploadedFile.name
  });
});

document.querySelector('.checkout-btn').addEventListener('click', () => {
  if (!state.cart.length) {
    showToast('Your cart is empty');
    return;
  }

  showToast('Checkout flow ready for payment integration');
});

renderProducts();
renderPagination();
renderCart();
