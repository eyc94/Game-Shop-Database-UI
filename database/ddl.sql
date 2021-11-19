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



-- Part (b)
-- Sample Data