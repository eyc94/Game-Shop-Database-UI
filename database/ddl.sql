-- Data Definition Language


-- Part (a)
-- Data Definition Queries

-- Customer
CREATE TABLE customers (
    customerID INT(11) AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY (customerID)
);

-- Product
CREATE TABLE products (
    productID INT(11) AUTO_INCREMENT NOT NULL,
    productName VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    publisher VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL
    PRIMARY KEY (productID)
);

-- Review
CREATE TABLE reviews (
    reviewID INT(11) AUTO_INCREMENT NOT NULL,
    customerID INT(11),
    productID INT(11),
    rating VARCHAR(255) NOT NULL,
    text VARCHAR(255) NOT NULL,
    dateWritten DATE NOT NULL,
    PRIMARY KEY (reviewID),
    FOREIGN KEY (customerID) REFERENCES customers(customerID) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (productID) REFERENCES products(productID) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Order
CREATE TABLE orders (
    orderID INT(11) AUTO_INCREMENT NOT NULL,
    customerID INT(11),
    orderDate DATE,
    PRIMARY KEY (orderID),
    FOREIGN KEY (customerID) REFERENCES customers(customerID) ON DELETE SET NULL ON UPDATE CASCADE
);


-- Part (b)
-- Sample Data