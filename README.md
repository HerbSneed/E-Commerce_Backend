# E-Commerce Back End App

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Function

```md
GIVEN a functional Express.js API
WHEN the USER adds their database name, MySQL username, and MySQL password to an environment variable file
THEN they are able to connect to a database using Sequelize
WHEN the USER enters schema and seed commands
THEN the development database is created and is seeded with test data
WHEN the USER enter the command to invoke the application
THEN their server is started and the Sequelize models are synced to the MySQL database
WHEN the USER opens API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN the USER tests API POST, PUT, and DELETE routes in Insomnia
THEN they are able to successfully create, update, and delete data in their database
```

## Getting Started

1. Set up a .env file with the following format:
DB_NAME='ecommerce_db'
DB_USER=''
DB_PASSWORD=''

2. In the command line type 'mysql -u (username) -p'.  From there you will be prompted to enter your password.

3. Once in the MYSQL Shell, type source './db/schema.sql;' .

4. Type show databases; to make sure ecommerce_db is available to you.

5. Type use 'ecommerce_db'.

6. Type 'quit' to exit the MYSQL shell.

7. In the command line type 'npm run seed' to seed that database.

8. Type 'node sever.js' to run your server.

9. From here you can check routes in Insomnia or your api development platform of choice.  You can also view your database in MSQL Workbench or your database management application of choice.
## Technology
Express, NodeJS, Sequilize & Mysql

## Links
Video Walkthrough
https://youtu.be/3PZZc1skvaQ

GitHub Repo
https://github.com/HerbSneed/E-Commerce_Backend


