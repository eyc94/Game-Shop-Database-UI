-- Data Manipulation Language


-- Data Manipulation Queries
-- The colon : character everywhere below is used to denote the variables that will have
-- data from back-end programming language.



-- Customers
-- =====================================

-- Add a new customer.
INSERT INTO customers (firstName, lastName, email, phoneNumber, address)
VALUES
(:firstNameInput, :lastNameInput, :emailInput, :phoneNumberInput, :addressInput);

-- Display all customers.
SELECT * FROM customers;

-- Search for a customer.
-- Search by customer ID.
SELECT * FROM customers WHERE customerID = :customerIDInput;

-- Search by customer first name.
SELECT * FROM customers WHERE firstName = :firstNameInput;

-- Search by customer last name.
SELECT * FROM customers WHERE lastName = :lastNameInput;

-- Search by customer email.
SELECT * FROM customers WHERE email = :emailInput;

-- Search by customer phone number.
SELECT * FROM customers WHERE phoneNumber = :phoneNumberInput;

-- Search by customer address.
SELECT * FROM customers WHERE address = :addressInput;

-- Update a customer.
-- Update a customer's first name, last name, email, phone number, or address.
UPDATE customers
SET firstName = :firstNameInput, lastName = :lastNameInput, email = :emailInput, phoneNumber = :phoneNumberInput, address = :addressInput
WHERE customerID = :customerIDInput;

-- Delete a customer.
-- We will delete a customer by their respective ID.
DELETE FROM customers
WHERE customerID = :customerIDInput;



-- Products
-- =====================================

-- Add a new product.
INSERT INTO products (productName, price, publisher, genre)
VALUES
(:productNameInput, :priceInput, :publisherInput, :genreInput);

-- Display all products.
SELECT * FROM products;

-- Search for a product.
-- Search by product ID.
SELECT * FROM products WHERE productID = :productIDInput;

-- Search by product name.
SELECT * FROM products WHERE productName = :productNameInput;

-- Search by price.
SELECT * FROM products WHERE price = :priceInput;

-- Search by publisher.
SELECT * FROM products WHERE publisher = :publisherInput;

-- Search by genre.
SELECT * FROM products WHERE genre = :genreInput;

-- Update a product.
-- Update a product's name, price, publisher, or genre.
UPDATE products
SET productName = :productNameInput, price = :priceInput, publisher = :publisherInput, genre = :genreInput
WHERE productID = :productIDInput;

-- Delete a product.
-- We will delete a product by its ID.
DELETE FROM products
WHERE productID = :productIDInput;



-- Reviews
-- =====================================

-- Add a new review.
INSERT INTO reviews (customerID, productID, rating, reviewText, dateWritten)
VALUES
(:customerIDInput, :productIDInput, :ratingInput, :reviewTextInput, :dateWrittenInput);

-- Display all reviews.
SELECT * FROM reviews;

-- Search for reviews.
-- Search by review ID.
SELECT * FROM reviews WHERE reviewID = :reviewIDInput;

-- Search by customer ID.
SELECT * FROM reviews WHERE customerID = :customerIDInput;

-- Search by product ID.
SELECT * FROM reviews WHERE productID = :productIDInput;

-- Search by rating.
SELECT * FROM reviews WHERE rating = :ratingInput;

-- Search by date.
SELECT * FROM reviews WHERE dateWritten = :dateWrittenInput;

-- Update a review.
-- Update the review's customerID, productID, rating, or dateWritten.
UPDATE reviews
SET customerID = :customerIDInput, productID = :productIDInput, rating = :ratingInput, dateWritten = :dateWrittenInput;
WHERE reviewID = :reviewIDInput;

-- Delete a review.
-- We will delete a review by its ID.
DELETE FROM reviews
WHERE reviewID = :reviewIDInput;



-- Orders
-- =====================================

-- Add a new order.
INSERT INTO orders (customerID, orderDate, pickup)
VALUES
(:customerIDInput, :orderDateInput, :pickupInput);

-- Display all orders.
SELECT * FROM orders;

-- Search for an order.
-- Search by orderID.
SELECT * FROM orders WHERE orderID = :orderIDInput;

-- Search by customerID.
SELECT * FROM orders WHERE customerID = :customerIDInput;

-- Search by orderDate.
SELECT * FROM orders WHERE orderDate = :orderDateInput;

-- Search by pickup option.
SELECT * FROM orders WHERE pickup = :pickupInput;

-- Update an order.
-- Update the customerID, orderDate, or pickup option.
UPDATE orders
SET customerID = :customerIDInput, orderDate = :orderDateInput, pickup = :pickupInput;
WHERE orderID = :orderIDInput;

-- Delete an order.
-- We will delete by ID.
DELETE FROM orders
WHERE orderID = :orderIDInput;