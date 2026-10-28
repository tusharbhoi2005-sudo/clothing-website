/*
  भद्रा कलेक्शन storefront preview
  Before launch, replace all sample catalogue values and connect real checkout.
  Set social/contact URLs below only after the business accounts exist.
*/
const STORE_CONFIG = {
  storeName: 'भद्रा कलेक्शन',
  storeType: 'online-and-physical',
  audience: 'adults',
  currency: 'INR',
  locale: 'en-IN',
  categories: ['Shirts', 'T-Shirts', 'Jeans & Trousers', 'Ethnic Wear', 'Jackets', 'Formal Wear'],
  pricePositioning: 'mixed',
  requestedDomain: 'भद्रा_कलेक्शन.com', // Not valid as written: domain labels cannot contain underscores.
  domainStatus: 'needs-confirmation',
  phoneNumber: '8390512476', // Supplied business contact; add country code only after confirmation.
  instagramHandle: 'tushar_bhoi03',
  instagramUrl: 'https://www.instagram.com/tushar_bhoi03/',
  paymentMethodsRequested: ['UPI', 'Cash on delivery'],
  deliveryScope: 'local-city-only',
  deliveryCity: '', // Do not set a city until the owner confirms the service area.
  languagesRequested: ['English', 'Marathi'],
  inventoryStatus: 'planning',
  adminPanelRequired: true,
  whatsappNumber: '', // Only configure if the supplied contact number is confirmed as WhatsApp.
  contactEmail: '' // Add a monitored customer-support email before launch.
};

const products = [
  {
    id: 'BC-SH-001', name: 'Oxford Casual Shirt', category: 'Shirts', price: 0,
    sku: 'SAMPLE-SH-001', description: 'A versatile button-down shirt concept for workdays and weekend plans. Confirm the actual weave, fit, colour and measurements before publishing.',
    fabric: 'Sample detail: cotton blend', care: 'Confirm care label before launch', origin: 'Brand origin to be confirmed',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colours: [{name:'White', hex:'#eeeae1'}, {name:'Navy', hex:'#27364b'}, {name:'Olive', hex:'#68745a'}],
    image: 'shirts.png',
    alt: 'Men’s casual shirt styling reference', label: 'Sample listing', credit: 'https://unsplash.com/'
  },
  {
    id: 'BC-TS-002', name: 'Essential Crew-Neck T-Shirt', category: 'T-Shirts', price: 0,
    sku: 'SAMPLE-TS-002', description: 'A clean everyday T-shirt listing concept. Replace this sample with the actual fabric composition, GSM, fit and available colours.',
    fabric: 'Sample detail: cotton jersey', care: 'Confirm care label before launch', origin: 'Brand origin to be confirmed',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colours: [{name:'Black', hex:'#252525'}, {name:'Off-white', hex:'#e8e1d5'}, {name:'Forest', hex:'#34483b'}],
    image: 'T shirts.png',
    alt: 'Plain T-shirt product styling reference', label: 'Sample listing', credit: 'https://unsplash.com/'
  },
  {
    id: 'BC-TR-003', name: 'Straight-Fit Casual Trousers', category: 'Jeans & Trousers', price: 0,
    sku: 'SAMPLE-TR-003', description: 'A straight-fit trouser concept for casual and smart-casual outfits. Verify waist, rise, inseam and leg opening measurements before launch.',
    fabric: 'Sample detail: cotton twill', care: 'Confirm care label before launch', origin: 'Brand origin to be confirmed',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colours: [{name:'Khaki', hex:'#b2a17d'}, {name:'Black', hex:'#282828'}, {name:'Navy', hex:'#29384b'}],
    image: 'jeans.png',
    alt: 'Men’s trousers styling reference', label: 'Sample listing', credit: 'https://unsplash.com/'
  },
  {
    id: 'BC-EW-004', name: 'Classic Men’s Kurta', category: 'Ethnic Wear', price: 0,
    sku: 'SAMPLE-EW-004', description: 'A classic men’s kurta concept for family gatherings and festive occasions. Confirm the garment length, fabric, placket, fit and actual finish.',
    fabric: 'Sample detail: cotton', care: 'Confirm care label before launch', origin: 'Brand origin to be confirmed',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colours: [{name:'Ivory', hex:'#e7dfce'}, {name:'Sage', hex:'#a3a88d'}, {name:'Navy', hex:'#283a52'}],
    image: 'ethic wear.png',
    alt: 'Men’s smart traditional-inspired outfit reference', label: 'Sample listing', credit: 'https://unsplash.com/'
  },
  {
    id: 'BC-JK-005', name: 'Structured Everyday Jacket', category: 'Jackets', price: 0,
    sku: 'SAMPLE-JK-005', description: 'A lightweight jacket concept for layering. Add the exact outer fabric, lining, closure, pocket details and season suitability from the real product.',
    fabric: 'Sample detail: woven blend', care: 'Confirm care label before launch', origin: 'Brand origin to be confirmed',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colours: [{name:'Charcoal', hex:'#4a4a48'}, {name:'Olive', hex:'#59634b'}, {name:'Tan', hex:'#a77d56'}],
    image: 'jeckets.png',
    alt: 'Men’s jacket product styling reference', label: 'Sample listing', credit: 'https://unsplash.com/'
  },
  {
    id: 'BC-SH-006', name: 'Textured Weekend Shirt', category: 'Shirts', price: 0,
    sku: 'SAMPLE-SH-006', description: 'A relaxed shirt concept for weekend wear. Confirm the real garment’s texture, sleeve length, fit and fabric composition before publishing.',
    fabric: 'Sample detail: textured cotton blend', care: 'Confirm care label before launch', origin: 'Brand origin to be confirmed',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colours: [{name:'Blue', hex:'#627e91'}, {name:'Cream', hex:'#e2d7c3'}, {name:'Rust', hex:'#9b6047'}],
    image: 'shirths.jpg',
    alt: 'Men’s shirt and smart-casual outfit reference', label: 'Sample listing', credit: 'https://unsplash.com/'
  },
  {
    id: 'BC-JN-007', name: 'Straight-Fit Denim Jeans', category: 'Jeans & Trousers', price: 0,
    sku: 'SAMPLE-JN-007', description: 'Layout example only. The final product name, price, denim composition, fit, wash, available waist sizes and stock must come from actual inventory.',
    fabric: 'To be confirmed from actual label', care: 'To be confirmed from actual care label', origin: 'To be confirmed',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colours: [{name:'Dark blue', hex:'#283a52'}, {name:'Black', hex:'#282828'}],
    image: 'jeans.png',
    alt: 'Men’s denim and trousers styling reference, not confirmed inventory', label: 'Sample listing', credit: 'https://unsplash.com/'
  },
  {
    id: 'BC-FW-008', name: 'Classic Formal Shirt', category: 'Formal Wear', price: 0,
    sku: 'SAMPLE-FW-008', description: 'Layout example only. Replace with a real formalwear item and verified details before publishing. This is not an offer for sale.',
    fabric: 'To be confirmed from actual label', care: 'To be confirmed from actual care label', origin: 'To be confirmed',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colours: [{name:'White', hex:'#eeeae1'}, {name:'Light blue', hex:'#aabfce'}],
    image: 'formal wear.png',
    alt: 'Men’s formal shirt styling reference, not confirmed inventory', label: 'Sample listing', credit: 'https://unsplash.com/'
  }
];

const formatPrice = amount => new Intl.NumberFormat(STORE_CONFIG.locale, { style: 'currency', currency: STORE_CONFIG.currency, maximumFractionDigits: 0 }).format(amount);
const byId = id => document.getElementById(id);
let activeCategory = 'All';
let activeProduct = null;
let activeColour = null;
let lastFocusedElement = null;
let toastTimeout = null;
let bag = loadBag();

function loadBag() {
  try {
    const value = JSON.parse(localStorage.getItem('bhadra-preview-bag') || '[]');
    return Array.isArray(value) ? value.filter(item => products.some(p => p.id === item.id && p.price > 0) && Number.isInteger(item.qty) && item.qty > 0 && item.qty <= 10) : [];
  } catch { return []; }
}
function saveBag() {
  try { localStorage.setItem('bhadra-preview-bag', JSON.stringify(bag)); } catch { /* Storage may be disabled. The current session still works. */ }
}
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
}
function renderProducts() {
  const query = byId('product-search').value.trim().toLocaleLowerCase();
  const sort = byId('sort-products').value;
  let list = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesQuery = `${product.name} ${product.category} ${product.description} ${product.fabric}`.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });
  if (sort === 'price-low') list.sort((a, b) => a.price - b.price);
  if (sort === 'price-high') list.sort((a, b) => b.price - a.price);
  if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
  byId('product-grid').innerHTML = list.map(product => `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${escapeHtml(product.alt)}" loading="lazy">
        <span class="product-label">${escapeHtml(product.label)}</span>
        <button class="quick-view" type="button" data-product-id="${product.id}">View details</button>
      </div>
      <div class="product-meta"><div><h3 class="product-name">${escapeHtml(product.name)}</h3><p class="product-category">${escapeHtml(product.category)}</p></div><p class="product-price">${product.price > 0 ? formatPrice(product.price) : 'Price to be confirmed'}</p></div>
      <div class="product-colours" aria-label="Sample colours">${product.colours.map(c => `<span class="tiny-swatch" style="background:${c.hex}" title="${escapeHtml(c.name)}"></span>`).join('')}</div>
    </article>`).join('');
  byId('results-count').textContent = `${list.length} sample ${list.length === 1 ? 'style' : 'styles'}`;
  byId('empty-state').hidden = list.length > 0;
  byId('product-grid').hidden = list.length === 0;
}
function setCategory(category) {
  activeCategory = category;
  document.querySelectorAll('[data-filter]').forEach(button => {
    const active = button.dataset.filter === category;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderProducts();
}
function showToast(message) {
  const toast = byId('toast');
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => { toast.hidden = true; }, 2600);
}
function openProduct(id) {
  const product = products.find(item => item.id === id);
  if (!product) return;
  activeProduct = product;
  activeColour = product.colours[0];
  lastFocusedElement = document.activeElement;
  byId('modal-product-category').textContent = product.category;
  byId('modal-product-name').textContent = product.name;
  byId('modal-product-price').textContent = product.price > 0 ? formatPrice(product.price) : 'Price to be confirmed';
  byId('add-to-bag').disabled = !(product.price > 0);
  byId('add-to-bag').textContent = product.price > 0 ? 'Add to bag' : 'Not available yet';
  byId('modal-product-description').textContent = product.description;
  byId('modal-product-sku').textContent = `SKU: ${product.sku} · Sample listing`;
  byId('modal-product-image').src = product.image;
  byId('modal-product-image').alt = product.alt;
  byId('modal-product-fabric').textContent = product.fabric;
  byId('modal-product-care').textContent = product.care;
  byId('modal-product-origin').textContent = product.origin;
  byId('product-size').innerHTML = product.sizes.map(size => `<option value="${escapeHtml(size)}">${escapeHtml(size)}</option>`).join('');
  byId('size-hint').textContent = product.category === 'Jeans & Trousers' ? 'Check waist and inseam measurements. Sample size information must be replaced.' : 'Measurements shown in the guide are sample values. Verify against each garment.';
  byId('product-quantity').value = '1';
  byId('colour-options').innerHTML = product.colours.map((colour, index) => `<button type="button" class="colour-choice" data-colour-index="${index}" aria-label="${escapeHtml(colour.name)} colour" aria-pressed="${index === 0}" title="${escapeHtml(colour.name)}"><span style="background:${colour.hex}"></span></button>`).join('');
  byId('selected-colour-label').textContent = activeColour.name;
  byId('size-guide-panel').hidden = true;
  byId('product-modal-backdrop').hidden = false;
  document.body.style.overflow = 'hidden';
  byId('modal-close')?.focus();
  byId('product-modal').querySelector('[data-close-product]').focus();
}
function closeProduct() {
  byId('product-modal-backdrop').hidden = true;
  document.body.style.overflow = '';
  byId('size-guide-panel').hidden = true;
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}
function addToBag() {
  if (!activeProduct) return;
  if (!(activeProduct.price > 0)) { showToast('This is a sample listing. Add a real product and price before launch.'); return; }
  const qtyValue = Number(byId('product-quantity').value);
  const qty = Math.max(1, Math.min(10, Number.isFinite(qtyValue) ? Math.floor(qtyValue) : 1));
  const size = byId('product-size').value;
  const colour = activeColour ? activeColour.name : 'Default';
  const key = `${activeProduct.id}|${size}|${colour}`;
  const found = bag.find(item => item.key === key);
  if (found) found.qty = Math.min(10, found.qty + qty);
  else bag.push({ key, id: activeProduct.id, size, colour, qty });
  saveBag(); updateBag(); closeProduct(); showToast(`${activeProduct.name} added to your preview bag.`);
}
function updateBag() {
  const count = bag.reduce((sum, item) => sum + item.qty, 0);
  byId('bag-count').textContent = String(count);
  byId('cart-item-total').textContent = `(${count})`;
  const cartItems = byId('cart-items');
  cartItems.innerHTML = bag.map(item => {
    const product = products.find(p => p.id === item.id);
    return `<div class="cart-line"><img src="${product.image}" alt="${escapeHtml(product.alt)}" loading="lazy"><div><h3>${escapeHtml(product.name)}</h3><p>${escapeHtml(item.size)} · ${escapeHtml(item.colour)}</p><div class="cart-line-actions"><button class="qty-button" type="button" data-cart-action="decrease" data-cart-key="${escapeHtml(item.key)}" aria-label="Decrease ${escapeHtml(product.name)} quantity">−</button><span class="qty-value">${item.qty}</span><button class="qty-button" type="button" data-cart-action="increase" data-cart-key="${escapeHtml(item.key)}" aria-label="Increase ${escapeHtml(product.name)} quantity">+</button></div><button class="remove-line" type="button" data-cart-action="remove" data-cart-key="${escapeHtml(item.key)}">Remove</button></div><strong class="cart-line-price">${formatPrice(product.price * item.qty)}</strong></div>`;
  }).join('');
  const total = bag.reduce((sum, item) => sum + products.find(p => p.id === item.id).price * item.qty, 0);
  byId('cart-subtotal').textContent = formatPrice(total);
  byId('cart-empty').hidden = bag.length > 0;
  byId('cart-footer').hidden = bag.length === 0;
  saveBag();
}
function openCart() {
  lastFocusedElement = document.activeElement;
  byId('cart-backdrop').hidden = false;
  byId('cart-drawer').hidden = false;
  document.body.style.overflow = 'hidden';
  byId('close-cart').focus();
}
function closeCart() {
  byId('cart-backdrop').hidden = true;
  byId('cart-drawer').hidden = true;
  document.body.style.overflow = '';
  if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
}
function changeCartItem(key, action) {
  const item = bag.find(line => line.key === key);
  if (!item) return;
  if (action === 'increase') item.qty = Math.min(10, item.qty + 1);
  if (action === 'decrease') item.qty -= 1;
  if (action === 'remove' || item.qty < 1) bag = bag.filter(line => line.key !== key);
  updateBag();
}

document.addEventListener('click', event => {
  const productButton = event.target.closest('[data-product-id]');
  if (productButton) openProduct(productButton.dataset.productId);
  const filterButton = event.target.closest('[data-filter]');
  if (filterButton) setCategory(filterButton.dataset.filter);
  const categoryTile = event.target.closest('[data-category]');
  if (categoryTile) {
    setCategory(categoryTile.dataset.category);
    byId('collection').scrollIntoView({ block: 'start' });
  }
  const colourButton = event.target.closest('[data-colour-index]');
  if (colourButton && activeProduct) {
    activeColour = activeProduct.colours[Number(colourButton.dataset.colourIndex)];
    byId('selected-colour-label').textContent = activeColour.name;
    byId('colour-options').querySelectorAll('[data-colour-index]').forEach(button => button.setAttribute('aria-pressed', String(button === colourButton)));
  }
  const cartAction = event.target.closest('[data-cart-action]');
  if (cartAction) changeCartItem(cartAction.dataset.cartKey, cartAction.dataset.cartAction);
  if (event.target.closest('[data-close-product]')) closeProduct();
});
byId('product-search').addEventListener('input', renderProducts);
byId('sort-products').addEventListener('change', renderProducts);
byId('open-cart').addEventListener('click', openCart);
byId('close-cart').addEventListener('click', closeCart);
byId('cart-backdrop').addEventListener('click', closeCart);
byId('continue-shopping').addEventListener('click', closeCart);
byId('add-to-bag').addEventListener('click', addToBag);
byId('clear-cart').addEventListener('click', () => { bag = []; updateBag(); showToast('Your preview bag has been cleared.'); });
byId('open-size-guide').addEventListener('click', () => { byId('size-guide-panel').hidden = false; byId('size-guide-panel').scrollIntoView({ block: 'nearest' }); });
byId('close-size-guide').addEventListener('click', () => { byId('size-guide-panel').hidden = true; byId('open-size-guide').focus(); });
byId('clear-filters').addEventListener('click', () => { byId('product-search').value = ''; byId('sort-products').value = 'featured'; setCategory('All'); });
byId('mobile-menu-toggle').addEventListener('click', () => {
  const nav = byId('mobile-nav');
  const isOpen = byId('mobile-menu-toggle').getAttribute('aria-expanded') === 'true';
  byId('mobile-menu-toggle').setAttribute('aria-expanded', String(!isOpen));
  nav.hidden = isOpen;
});
byId('mobile-nav').addEventListener('click', event => {
  if (event.target.closest('a')) { byId('mobile-nav').hidden = true; byId('mobile-menu-toggle').setAttribute('aria-expanded', 'false'); }
});
byId('product-modal-backdrop').addEventListener('click', event => { if (event.target === byId('product-modal-backdrop')) closeProduct(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    if (!byId('product-modal-backdrop').hidden) closeProduct();
    else if (!byId('cart-drawer').hidden) closeCart();
  }
});
byId('current-year').textContent = new Date().getFullYear();
renderProducts();
updateBag();

// Contact details supplied for this setup preview. No order or payment is submitted here.
if (STORE_CONFIG.phoneNumber) {
  const link = document.createElement('a'); link.href = `tel:${STORE_CONFIG.phoneNumber}`; link.textContent = `Call: ${STORE_CONFIG.phoneNumber}`;
  byId('contact-note').append(link);
}
if (STORE_CONFIG.instagramUrl) {
  const link = document.createElement('a'); link.href = STORE_CONFIG.instagramUrl; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = `Instagram: @${STORE_CONFIG.instagramHandle}`;
  byId('contact-note').append(link);
}
if (STORE_CONFIG.whatsappNumber) {
  const link = document.createElement('a'); link.href = `https://wa.me/${STORE_CONFIG.whatsappNumber}`; link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = 'WhatsApp';
  byId('contact-note').append(link);
}
if (STORE_CONFIG.contactEmail) {
  const link = document.createElement('a'); link.href = `mailto:${STORE_CONFIG.contactEmail}`; link.textContent = STORE_CONFIG.contactEmail;
  byId('contact-note').append(link);
}
