-- Data Definition Language


-- Part (a)
-- Data Definition Queries

-- Customer
CREATE TABLE customer (
    customerID INT(11) AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY (customerID)
);

-- Product
CREATE TABLE product (
    productID INT(11) AUTO_INCREMENT NOT NULL,
    productName VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    publisher VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL
    PRIMARY KEY (productID)
);


-- Part (b)
-- Sample Data