 <div align="center">
  <img alt="Application image" src="https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_apps.jpg?v=1665592014" />
</div>
  <div align="center">
    <img src="https://img.shields.io/badge/-Nodejs-black?style=for-the-badge&logoColor=white&logo=nodejs&color=764ABC" alt="NodeJS" />
    <img src="https://img.shields.io/badge/-Postgresql-black?style=for-the-badge&logoColor=white&logo=PostgreSQL&color=61DAFB" alt="PSQL" />
    <img src="https://img.shields.io/badge/-Strapi-black?style=for-the-badge&logoColor=white&logo=strapi&color=764ABC" alt="Strapi" />
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Redux-black?style=for-the-badge&logoColor=white&logo=redux&color=764ABC" alt="redux" />
    <img src="https://img.shields.io/badge/-Styled-black?style=for-the-badge&logoColor=white&logo=styled&color=06B6D4" alt="styled" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Stripe-black?style=for-the-badge&logoColor=white&logo=stripe&color=764ABC" alt="Stripe" />
  </div>

# MULTISTORE-25

## MULTI ECOMMERCE APPLICATION

<div align="center">
  <img alt="Application image" src="https://vargaae.hu/images/projects/multi-micro-store-25-git.png" width="700" />
</div>
This project is an online B2C shopping application that contains a basic e-commerce’s
    functions from shopping to placing order with
    using microservices (!Demonstration only - Microservices are being further developed!).
You can check out the deployed application [here](https://multi-micro-store-24.onrender.com/)
->deployed on Render: ClientSide App+API+PostgreSQL DB

## 🛠 Features/Structure:

- 🚀React APP -> Redux for State Management + Redux-Persist for Persistance,
- 🚀STORE SERVICE: API [here](https://github.com/vargaae/multi-store-25-api)
  and Database for products with headless CMS: Strapi and PostgreSQL database,
- 🚀SHOP SERVICE: Database for products with Firebase,
- 🚀AUTHENTICATION/USER SERVICE - USER SLICE,
- 🚀AUTHENTICATION->Sign Up with email,
- 🚀AUTHENTICATION->Log in with email,
- 🚀AUTHENTICATION->Sign Up and Log In with Google account,
- 🚀CART SERVICE - CART SLICE,
- 🚀CART & CHECKOUT functionality (adding and decreasing amount, priceCount, TotalPriceCount),
- 🚀Adding to CART,
- 🚀CART+USERMENU DROPDOWNs,
- 🚀CHECKOUT,
- 🚀PAY WITH STRIPE,
- 🚀CATEGORIES SERVICE - CATEGORIES SLICE,
- 🚀Database for products and users with Firebase,
- 🚀ProductPage,
- 🚀AboutPage,
- 🚀ContactPage-> Contact with working email sending for the owner(email-js),
- 🚀Styled components

## 🛠 Front End:

- React 18.2
- Redux (+Redux Toolkit, Redux-Persist)
- SASS
- styled components
- TailwindCSS
- plugins(animation, sliders, icons)
- emailJS
- Firebase + FireStore connected
- Strapi + PostgreSQL connected
- Stripe connected

## 🛠 Back End - Services:

- STORE \
- NodeJS
- Strapi - CMS
- PostgreSQL
- Stripe connected -> /order
- SHOP \
- Firebase
- Firestore Database

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Clone this repo
2. Run `npm install`
3. Connect to STRAPI and FIREBASE -> You must add your own API key in the `utils/firebase/firebase-utils.js` file to connect to your Database.

You can grab STRAPI API key and TOKEN [here](https://strapi.io/)
, you can grab FIREBASE API key [here](https://firebase.google.com/)
and you can grab STRIPE keys [here](https://stripe.com/)

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
VITE_APP_STRAPI_TOKEN=
VITE_APP_STRAPI_API_URL=
VITE_FIREBASE_API_KEY=
VITE_APP_STRIPE_KEY=
```

1. **Running the Project**

```bash
npm run preview
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
