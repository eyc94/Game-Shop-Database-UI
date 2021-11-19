-- Data Manipulation Language


-- Data Manipulation Queries
-- The colon : character everywhere below is used to denote the variables that will have
-- data from back-end programming language.


-- =====================================
-- Customers

-- Add a new customer.
INSERT INTO customers (firstName, lastName, email, phoneNumber, address)
VALUES
(:firstNameInput, :lastNameInput, :emailInput, :phoneNumberInput, :addressInput);

-- Search for a customer.
-- Search by customer ID.
SELECT * FROM customers WHERE customerID = :customerIDInput;

-- Search by customer first name.
SELECT * FROM customers WHERE firstName = :firstNameInput;

-- Search by customer last name.
SELECT * FROM customers WHERE lastName = :lastNameInput;

-- Search by customer email.
SELECT * FROM customers WHERE email = :emailInput;

-- Update a customer.
-- Update a customer's first name, last name, email, phone number, or address.
UPDATE customers
SET firstName = :firstNameInput, lastName = :lastNameInput, email = :emailInput, phoneNumber = :phoneNumberInput, address = :addressInput
WHERE customerID = :customerIDInput;

-- Delete a customer.
-- We will delete a customer by their respective ID.
DELETE FROM customers
WHERE customerID = :customerIDInput;


-- =====================================
-- Products