# SQL Practice 
Choose - SELECT
Insert - INSERT INTO
Update - UPDATE
Delete - DELETE FROM

### Basic Selector:
SELECT * FROM table;

### Select DIFFERENT Values:
SELECT DISTINCT FROM table;

### Select all records where a column has a certain value:
SELECT * FROM table
WHERE Column = ‘Keyword’;

### Select all records where column is NOT a certain value:
SELECT * FROM table 
WHERE NOT Column = ‘Keyword’;

### Select all records where the CustomerID has a value of 32:
SELECT * FROM table
WHERE CustomerID = 32;

### Select all records where the City column has a value ‘Berlin’ and the PostalCode has a value of 12209:
SELECT * FROM table
WHERE City = ‘Berlin’
AND PostalCode = 12209;

### Select all records where the City column has the value ‘Berlin’ and also the records where the City Column has a value of ‘London’:
SELECT * FROM Customers
WHERE City = ‘Berlin’
OR City = ‘London’;

### Select all records from Customers table and sort the result alphabetically by the column City:
SELECT * FROM Customers
ORDER BY City;

### Select all records from Customers table and sort the result in reverse alphabetical order by the column City:
SELECT * FROM Customers
ORDER BY City desc;

### Select all records from the Customers table, sort the result alphabetically, first by the column Country, then, by the column City:
SELECT * FROM Customers
ORDER BY Country, City;

### How to Insert into a table:
INSERT INTO table (column1, column2, column3)
VALUES (value1, value2, value3);

### Select all records from the Customers where the PostalCode column is empty:
SELECT * FROM Customers
WHERE PostalCode IS null;

### Select all records from the Customers where the PostalCode column is NOT empty:
SELECT * FROM Customers
WHERE PostcalCode IS NOT null;

### Update the City column of all records in the Customers table:
UPDATE Customers
SET City = ‘Oslo’;

### Set the value of the City columns to 'Oslo', but only the ones where the Country column has the value "Norway”:
UPDATE Customers
SET City = ‘Oslo’
WHERE Country = ‘Norway’;

### Update the City value and the Country value:
UPDATE Customers
SET City = ‘Oslo’, Country = ‘Norway’
WHERE CustomerID = 32;

### Delete all the records from the Customers table where the Country value is 'Norway’:
DELETE FROM Customer
WHERE Country = ‘Norway’;

### Delete all the records from the Customers table:
DELETE FROM Customers;

#### SQL MIN() and MAX() Functions 

* The MIN() function returns the smallest value of the selected column.
* The MAX() function returns the largest value of the selected column.

### Use the MIN function to select the record with the smallest value of the Price column:
SELECT MIN(Price)
FROM Products;

### Use an SQL function to select the record with the highest value of the Price column:
SELECT MAX(Price)
FROM Products;

OR 

SELECT MAX(Price) AS LargestPrice
FROM Products;

### Use the correct function to return the numbers of records that have the Price value set to 18:
SELECT COUNT(*)
FROM Products
WHERE Price = 18;

### Use an SQL function to calculate the average price of all products:
SELECT AVG(Price)
FROM Products;

### Use an SQL function to calculate the sum of all the Price column values in the Products table:
SELECT SUM(Price)
FROM Products;

#### The LIKE operator is used in a WHERE clause to search for a specified pattern in a column.

### Select all records where the value of the City column starts with the letter “a”:
SELECT * FROM Customers 
WHERE City LIKE ‘a%’;

### Select all records where the value of the City column ends with the letter “a”:
SELECT * FROM Customers
WHERE City LIKE ‘%a’;

### Select all records where the value of the City column contains the letter “a”:
SELECT * FROM Customers
WHERE City LIKE ‘%a%’;

### Select all records where the value of the City column starts with letter "a" and ends with the letter “b”:
SELECT * FROM Customers 
WHERE City LIKE ‘a%b’;

### Select all records where the value of the City column does NOT start with the letter “a”:
SELECT * FROM Customers
WHERE City NOT LIKE ‘a%’;

### Select all records where the second letter of the City is an “a”:
SELECT * FROM Customers
WHERE City LIKE ‘_a%’;

### Select all records where the first letter of the City is an "a" or a "c" or an “s”:
SELECT * FROM Customers 
WHERE City LIKE ‘[acs]%’;

### Select all records where the first letter of the City starts with anything from an "a" to an “f”:
SELCT * FROM Customers 
WHERE City LIKE ‘[a-f]%’;

### Select all records where the first letter of the City is NOT an "a" or a "b" or a “c”:
SELECT * FROM Customers
WHERE City LIKE ‘[!abc]%’;

### Use the IN operator to select all the records where Country is either "Norway" or "France”:
SELECT * FROM Customers
WHERE Country IN (‘Norway’, ‘France’);

### Use the IN operator to select all the records where Country is NOT "Norway" and NOT "France”:
SELECT * FROM Customers 
Where Country NOT IN (‘Norway’, ‘France’);

### Use the BETWEEN operator to select all the records where the value of the Price column is between 10 and 20:
SELECT * FROM Products
WHERE Price BETWEEN 10 AND 20;

### Use the BETWEEN operator to select all the records where the value of the Pricecolumn is NOT between 10 and 20:
SELECT * FROM Products 
WHERE Price NOT BETWEEN 10 AND 20;

### Use the BETWEEN operator to select all the records where the value of theProductName column is alphabetically between 'Geitost' and 'Pavlova’:
SELECT * FROM Products
WHERE ProductName BETWEEN ‘Geitost’ AND ‘Pavlova’;

#### Aliases
* SQL aliases are used to give a table, or a column in a table, a temporary name.
* Aliases are often used to make column names more readable.
* An alias only exists for the duration of the query.

### When displaying the Customers table, make an ALIAS of the PostalCodecolumn, the column should be called Pno instead:
SELECT CustomerName, Address, PostalCode AS Pno
FROM Customers;

### When displaying the Customers table, refer to the table as Consumers instead of Customers:
SELECT * FROM Customers AS Consumers;

#### Joins
* (INNER) JOIN: Returns records that have matching values in both tables
* LEFT (OUTER) JOIN: Return all records from the left table, and the matched records from the right table
* RIGHT (OUTER) JOIN: Return all records from the right table, and the matched records from the left table
* FULL (OUTER) JOIN: Return all records when there is a match in either left or right table

### Insert the missing parts in the JOIN clause to join the two tables Orders and Customers, using the CustomerID field in both tables as the relationship between the two tables:
SELECT * 
FROM Orders
LEFT JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;

### Choose the correct JOIN clause to select all records from the two tables where there is a match in both tables:
SELECT * FROM Orders
INNER JOIN Customers
ON Orders.CustomerID = Customers.CustomerID;

### Choose the correct JOIN clause to select all the records from the Customerstable plus all the matches in the Orders table:
SELECT * FROM Orders
RIGHT JOIN Customers
ON Orders.CustomerID=Customers.CustomerID;

### List the number of customers in each country:
SELECT COUNT(CustomerID),
Country
FROM Customers
GROUP BY Country;

### List the number of customers in each country, ordered by the country with the most customers first:
SELECT COUNT(CustomerID), 
Country
FROM Customers
GROUP BY Country
ORDER BY COUNT(CustomerID) DESC;

### Write the correct SQL statement to create a new database called testDB:
CREATE DATABASE testDB;

### Write the correct SQL statement to delete a database named testDB:
DROP DATABASE testDB;

### Write the correct SQL statement to create a new table called Persons:
CREATE TABLE Persons (
	PersonID int,
  	LastName varchar(255),
  	FirstName varchar(255),
  	Address varchar(255),
  	City varchar(255)
)

### Write the correct SQL statement to delete a table called Persons:
DROP TABLE Persons;

### Use the TRUNCATE statement to delete all data inside a table:
TRUNCATE TABLE Persons;

### Add a column of type DATE called Birthday:
ALTER TABLE Persons
ADD Birthday DATE;

### Delete the column Birthday from the Persons table:
ALTER TABLE Persons
DROP COLUMN Birthday;











