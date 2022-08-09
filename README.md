# E-Commerce Store Frontend 2022

### Package Installs for Frontend

> npx create-react-app e-commerce-store-frontend

> npm install react-router-dom@6

* Require in Browser Router in index.js and wrap < App/> with < Browser Router/>

* Adds Favicon and changes store name.

> npm run start

* Displays Functional Component < h1 > heading.

* Adds node_modules/ and .env to .gitignore file.  

### Create Header and Footer install React Bootstrap.

* Creates Component File
* Adds Header Functional Component and Footer Functional Component.
* Installs React Bootstrap for Styling and !(https://bootswatch.com/) for color themes.
* Bootswatch - Click on download bootstrap.min.css bring in source file, require file into index.js.
* Adds Footer styling with React Bootstrap 
* Adds Header styling using a combination of Bootswatch and React Bootstrap.
* Adds awesome font icons for cart and sign-in.

### Create HomeScreen component for display of product images.

* Uses map function to loop through the images in an array.  By using React Bootstrap the Row of columns can display the number of images based on screen height.
* Passes in the Product Component through props.

### Create Product Component 
* Once we have access to the product I used a destructured method to gain access to entire product ({ product }).  I can now display the product title, name, image, reviews, etc.

### Create Ratings Component
* Creating a rating component allows for static reviews to be displayed based on json created with product info.  Ternary statement will either display the star value or skip it depending on value. 

```javascript
<i
   style={{ color: "black" }}
   className={
     value >= 1
       ? "fas fa-star"
       : value >= 0.5
       ? "fas fa-star-half-alt"
       : "far fa-star"
   }
 ></i>
```
* If value is >= greater than or equal to 1 show full star value, if value is 0.5 show half star value by using awesome fonts. This checks each star value up to 5 star rating.

### Installs React Router and React Router Bootstrap
> npm install react-router-dom@6 
> npm install react-router-bootstrap

* Done earlier index.js is set up for react-router-dom@6.
* In App.js require in React Router.
```javascript
import { Routes, Route } from "react-router-dom";
// On top of App.js
```
* When establishing routes you need to wrap <Routes> in <Route>
```javascript
<Routes>
<Route path="/" element={<HomeScreen/>}>
<Route path="/" element={<ProductScreen/>}>
</Routes>
```
* Once Routes are established.  Link Container from React Bootstrap will need to be implemented since React Router will not work