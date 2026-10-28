# भद्रा कलेक्शन storefront preview

A responsive, static men’s-clothing storefront built with HTML, CSS and vanilla JavaScript. No framework or build step is required.

## Run locally

1. Extract the ZIP folder.
2. Open `index.html` in a current browser.
3. For the smoothest local development experience, serve this folder with VS Code Live Server or run `python -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Configured preferences

- Online shop plus physical store
- Adult audience; affordable and simple brand direction
- Categories: Shirts, T-Shirts, Jeans & Trousers, Ethnic Wear, Jackets, Formal Wear
- Mixed price positioning, INR currency
- Requested methods: UPI and Cash on Delivery
- Local-city delivery only; exact city/area still pending
- English and Marathi requested; the current preview is not yet fully translated
- Admin panel required; it has not been implemented yet
- Contact phone `8390512476` and Instagram handle `tushar_bhoi03`
- Inventory is still being planned, so prices are withheld and demo items cannot be purchased

See [`STORE-SETUP.md`](STORE-SETUP.md) for the essential missing information, phased implementation plan and checkout launch gate. [`store-config.json`](store-config.json) records the current choices in machine-readable form.

## Included in this preview

- Responsive home page with category filters, search and sorting
- Product detail dialog with size and colour selectors
- Example size-guide layout, which must be replaced with measurements from real garments
- A preview shopping-bag shell
- Privacy Policy and Terms and Conditions templates
- Custom SVG favicon and `robots.txt` that currently disallows indexing

## Important limitations

**This is not yet a full store.** It has no backend, database, real inventory, account system, secure admin panel, order-management system, shipping integration or payment integration. Checkout is intentionally disabled. The catalogue and photographs are design references only and do not represent confirmed stock. Product prices have been removed until you provide actual inventory/pricing. Do not use this preview to accept customer orders.

Before launch, replace illustrative photos with original or properly licensed photos of the actual products; set correct details for every product variant; complete English and Marathi translations; choose a valid domain; confirm physical-store and delivery details; integrate real order storage and UPI/COD flows; secure the admin panel; and update/review the legal pages against the real business practices.

The requested domain `भद्रा_कलेक्शन.com` is invalid as typed because of the underscore. Check options such as `भद्राकलेक्शन.com` (if supported by the chosen registrar), `bhadra-collection.com`, or `bhadracollection.com`. Domain availability has not been checked.
