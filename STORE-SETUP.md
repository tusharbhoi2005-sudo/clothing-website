# भद्रा कलेक्शन — store setup and implementation plan

## 1. Confirmed choices

- **Store name:** भद्रा कलेक्शन
- **Business model:** Online shop plus physical store
- **Audience:** Adult customers
- **Brand direction:** Affordable, simple menswear
- **Requested categories:** Shirts, T-shirts, Jeans & Trousers, Ethnic Wear, Jackets, Formal Wear
- **Price positioning:** Mixed price ranges; actual prices are not supplied yet
- **Payment methods requested:** UPI and Cash on Delivery (COD)
- **Delivery scope:** Local city only; the city and serviceable areas are not yet confirmed
- **Languages requested:** English and Marathi
- **Inventory status:** Still planning; no live products, stock quantities, verified prices, or owned product photos supplied yet
- **Admin panel:** Required
- **Contact number supplied:** 8390512476
- **Instagram handle supplied:** `tushar_bhoi03`
- **Requested domain:** `भद्रा_कलेक्शन.com` — invalid as typed because of the underscore; choose a valid alternative before registration

## 2. Current preview status

This folder is still a **static storefront preview**, not a production e-commerce system. The catalogue cards and images are layout references only. Prices are deliberately withheld because no actual inventory/pricing has been provided. Add-to-bag is disabled for these sample items, and checkout remains disabled. No customer order is sent, no payment is processed, and no admin login is included.

The supplied phone and Instagram handle are shown as contact links. The phone number is not assumed to be a WhatsApp number. The physical address, local delivery city, domain, real products, bilingual translations, backend, database and admin panel remain to be completed.

## 3. Essential information still needed

Resolve these before production checkout is built:

1. **Physical shop details:** Correct operator/legal business name (if different from the brand), complete store address, opening hours, and a map link if desired.
2. **Delivery boundary:** City, serviceable localities or PIN codes, delivery fee, expected delivery window, whether delivery is handled by shop staff or a courier, and how failed deliveries are handled.
3. **Domain:** Choose a valid name and check availability with a registrar. Options to check include `भद्राकलेक्शन.com` (IDN support must be confirmed with the registrar), `bhadra-collection.com`, or `bhadracollection.com`. Availability is not checked here.
4. **Real catalogue:** For each product, supply its name, category, actual images, sale price, optional MRP, SKU, available sizes/colours, stock quantity for every variant, fabric composition, fit, care instructions, and garment measurements. Do not publish sample products as actual stock.
5. **Order policies:** Return/exchange period, condition requirements, cancellation rules, refund method and timing, damaged/wrong-item process, COD confirmation approach, and how customers raise complaints.
6. **Payments:** Select a legitimate UPI payment/checkout method or provider and complete merchant onboarding outside this front-end. Confirm whether the supplied phone number should also appear as WhatsApp contact. Do not paste private banking credentials, API secrets, or OTPs into website code or chat.
7. **Customer support and legal details:** A monitored support email, full business/postal address, and applicable tax/registration details. Review the final privacy policy and terms for the actual business and processes.
8. **Language content:** Confirm preferred Marathi wording for the brand/category names and customer-policy pages. Every page, validation message, order notification and email should be translated, not only the homepage heading.
9. **Admin access:** Decide who will operate the panel and which staff accounts/permissions are needed. Admin credentials should be created securely in the application, not hard-coded into source files.

## 4. Suggested implementation phases

### Phase A — Store identity and catalogue planning
Confirm address, city/PIN codes, domain, contact channels, policy choices and prices. Prepare a product spreadsheet first. Use only original photos or images with verified usage rights; record accurate details from each real garment.

### Phase B — Customer storefront
Keep the simple HTML/CSS/vanilla JavaScript approach. Add a real English/Marathi language switch backed by translated content, working category filters for all six categories, product search/sorting, accurate product pages, size charts sourced from the garments, stock availability, store address/hours and local delivery eligibility. Replace all editorial photos with actual inventory photography before accepting orders.

### Phase C — Backend, database and admin panel
Add a server-side application and database. A straightforward option for this small store is **PHP + MySQL**; the front-end can remain HTML/CSS/JavaScript. Build secure admin sign-in, hashed passwords, session expiry, role permissions and server-side validation. The admin panel should manage products, categories, variants/sizes/colours, image uploads, price and stock, orders, COD status, delivery PIN codes, cancellations, returns/exchanges and basic reports. Never rely on browser-only JavaScript to enforce price or stock.

Core data tables should include admins/users, products, product variants, inventory, product images, customer/order contact details, orders, order items, payment records, delivery areas and return/refund records. Store only what is needed, protect it, and define retention/access rules before launch.

### Phase D — Orders and real UPI/COD processing
The server must recalculate prices and verify stock when an order is submitted. UPI orders must only be marked paid after verified server-side confirmation from the chosen payment provider; a browser success message or screenshot is not proof of payment. COD orders should be recorded as COD/pending-confirmation and move through defined fulfilment statuses. Keep this disabled until the provider, order database, notifications and operational workflow are tested.

### Phase E — Local delivery and in-store operations
Restrict delivery to confirmed city/PIN codes. Show delivery fee and estimate before order confirmation. Let staff distinguish website orders from in-store sales if a single inventory count will be used for both. Ensure stock cannot go negative when online and physical sales happen close together.

### Phase F — Legal review, testing and launch
Update privacy/terms/returns with real business information and actual data practices; review applicable Indian consumer e-commerce obligations. Test mobile layout, keyboard navigation, Marathi text, product image loading, stock changes, duplicate submissions, failed payments, COD cancellation, refund handling, database backups, admin permissions, HTTPS, domain redirects, and recovery from server errors. Remove preview notices and permit search-engine indexing only after the production experience is ready.

## 5. Launch gate

Do **not** enable checkout until the following all exist and have passed testing: real product/price/stock data; a confirmed delivery city/area and fees; real order persistence; a working UPI integration with server-side payment verification; COD confirmation and fulfilment workflow; customer support details; reviewed policies; secured admin access; HTTPS and a valid domain. Until then, this website must remain a preview and should not imply it accepts orders.
