-- Data Definition Language


-- Part (a)
-- Data Definition Queries

-- Customers
CREATE TABLE customers (
    customerID INT(11) AUTO_INCREMENT NOT NULL,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    PRIMARY KEY (customerID)
);

-- Products
CREATE TABLE products (
    productID INT(11) AUTO_INCREMENT NOT NULL,
    productName VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    publisher VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    PRIMARY KEY (productID)
);

-- Reviews
CREATE TABLE reviews (
    reviewID INT(11) AUTO_INCREMENT NOT NULL,
    customerID INT(11),
    productID INT(11),
    rating VARCHAR(255) NOT NULL,
    reviewText VARCHAR(255) NOT NULL,
    dateWritten DATE NOT NULL,
    PRIMARY KEY (reviewID),
    FOREIGN KEY (customerID) REFERENCES customers(customerID) ON DELETE SET NULL ON UPDATE CASCADE,
    FOREIGN KEY (productID) REFERENCES products(productID) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Orders
CREATE TABLE orders (
    orderID INT(11) AUTO_INCREMENT NOT NULL,
    customerID INT(11),
    orderDate DATE,
    pickup VARCHAR(1) NOT NULL,
    PRIMARY KEY (orderID),
    FOREIGN KEY (customerID) REFERENCES customers(customerID) ON DELETE SET NULL ON UPDATE CASCADE
);

-- Order Details
CREATE TABLE orderDetails (
    orderID INT(11),
    productID INT(11),
    quantity INT(11),
    PRIMARY KEY (orderID, productID),
    FOREIGN KEY (orderID) REFERENCES orders(orderID) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (productID) REFERENCES products(productID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Part (b)
-- Sample Data

INSERT INTO customers (firstName, lastName, email, phoneNumber, address)
VALUES
("Michael", "Scott", "sample@gmail.com", "1234567890", "123 Main St."),
("Jim", "Halpert", "sample@yahoo.com", "3820382198", "3421 Second St."),
("Pam", "Beesley", "test@hotmail.com", "3929310349", "3129 Circle Dr."),
("Dwight", "Scrute", "j.smith@sample.com", "4859307765", "321 Sample Ct."),
("Creed", "Bratton", "c.bratton@gmail.com", "1029574039", "3634 Third St");

INSERT INTO products (productName, price, publisher, genre)
VALUES
("Valorant", 0.00, "Riot Games", "First Person Shooter"),
("Counter Strike: Global Offensive", 9.99, "Valve Corporation", "First Person Shooter"),
("Heroes of Newerth", 9.99, "S2 Games", "Multiplayer Online Battle Arena"),
("League of Legends", 0.00, "Riot Games", "Multiplayer Online Battle Arena"),
("Horizon Forbidden West", 59.99, "Guerrilla Games", "Role-Playing Game"),
("Forza Horizon 5", 59.99, "Playground Games", "Racing"),
("Cyberpunk 2077", 59.99, "CD Projekt", "Role-Playing Game");

INSERT INTO reviews (customerID, productID, rating, reviewText, dateWritten)
VALUES
(5, 5, "5", "This game makes me feel like Michael Scarn!", "2020-06-02"),
(5, 15, "3", "Makes me feel more like a US agent!", "2019-04-21"),
(5, 55, "5", "I'm Michael, the nascar driver :)", "2021-11-17"),
(45, 65, "3", "This game needs more work, but I see the potential.", "2021-07-21"),
(35, 35, "1", "Horrrrrible game!", "2019-05-20"),
(15, 55, "5", "I love racing games and Forza is by far the best.", "2021-11-04"),
(25, 25, "3", "I don't know what's going on. The graphics are good though.", "2020-09-30");

INSERT INTO orders (customerID, orderDate, pickup)
VALUES
(5, "2019-05-01", "1"),
(15, "2020-03-29", "0"),
(25, "2018-02-14", "1"),
(35, "2012-07-12", "1"),
(45, "2017-01-01", "1"),
(5, "2021-06-15", "0");

INSERT INTO orderDetails (orderID, productID, quantity)
VALUES
(5, 5, 1),
(5, 15, 2),
(15, 55, 2),
(15, 65, 1),
(25, 25, 2),
(35, 35, 1),
(35, 25, 1),
(45, 65, 2),
(45, 15, 1),
(55, 55, 3);
