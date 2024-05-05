## Project Start Up

1. Once the repository is downloaded, cd into both the client folder and the server folder and run 'npm install'.
2. Create database in MySQLWorkbench and use the queries file to create tables and seed in a few sample values.
3. Connect database the index.js file (replace host, user, password, and database in const db).
4. Keep 2 terminals open, one in the client folder and run 'npm start'. The other should be in the server folder and run 'node index.js'.
5. 'npm start' should bring you to a local host webpage where you can click the buttons to explore the different tables.

## Project info:
The front end is built React JS. 

The back end database is connected to the front end via express. We use axios API calls to the database to get, update, and add information and render it on the front end.

You can find the SQL queries in index.js.