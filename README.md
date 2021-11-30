# Game Shop Database UI

This is a database UI modeled along the theme of a gameshop. This gameshop holds data about Customers, Orders, Products, Reviews, and OrderDetails. The primary user of this is an admin/database manager. The user has the ability to implement the CRUD (Create, Read, Update, Delete) functionalities of a database in the form of a web-based interface.

## Entities

#### Customers
This represents data about the customers of the gameshop. The properties of the customers include **Customer ID**, **First Name**, **Last Name**, **Email**, **Phone Number**, and **Address**.

The admin has the ability to create a new customer, search for an existing customer by first name, view existing customers, update an existing customer, and delete an existing customer.

#### Products
This represents data about the products of the gameshop. The properties of the products include **Product ID**, **Product Name**, **Price**, **Publisher**, **Genre**.

The admin has the ability to create a new product, view existing products, update information on an existing product, and delete an existing product.

#### Orders
This represents data about the orders of the gameshop. The properties of the orders include **Order ID**, **Customer ID**, **Order Date**, and **Pickup**.

The admin has the ability to create a new order, view existing orders, update existing orders, and delete an existing order.

#### Reviews
This represents data about the reviews of the products in the gameshop. The properties of reviews inclue **Review ID**, **Customer ID**, **Product ID**, **Rating**, **Review Text**, and **Date Written**.

The admin has the ability to create an entry for a review, view existing reviews, update an existing review, and delete an existing review.

#### Order Details