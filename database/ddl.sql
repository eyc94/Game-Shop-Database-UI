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

-- Review
CREATE TABLE review (
    reviewID INT(11) AUTO_INCREMENT NOT NULL,
    customerID INT(11) NOT NULL,
    productID INT(11) NOT NULL,
    rating VARCHAR(255) NOT NULL,
    text VARCHAR(255) NOT NULL,
    dateWritten DATE NOT NULL,
    PRIMARY KEY (reviewID),
    FOREIGN KEY (customerID) REFERENCES customer(customerID),
    FOREIGN KEY (productID) REFERENCES product(productID)
)


-- Part (b)
-- Sample Data