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