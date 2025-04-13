//! Views are the user-facing part of the application, in this case, HTML files
//! we use template engines to create our views, when we want them to be dynamic/customizable based on 
//! say a user info
require('dotenv').config();
const path = require('node:path');
const express = require('express');
const app = express();

//! set maps first argument to second argument and be retrieved using get
app.set("views", path.join(__dirname, "views")); //..ejs-demo/views
app.set("view engine", "ejs");

//! Since we’ve already defined the views and view engine app properties, the first argument of
//! res.render is programmed to look for “a template called index in the specified folder”, 
//! while the second argument is an object of variables that are to be made available to that specific template.
// app.get("/", (req, res) => {
//   // res.locals.foo = 'water'; // binds foo to 'water', can be used anywhere in the views folder using locals.foo
//   res.render("index", { message: "EJS rocks!" });
// });

// app.js
const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

const users = ["Rose", "Cake", "Biff"];

app.get("/", (req, res) => {
  res.render("index", { links: links, users: users });
});


app.listen(process.env.PORT, () => {
  console.log('Server running...');
})