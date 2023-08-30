const { query } = require('express');
const mysql = require('mysql2');
  
// Create the connection pool. The pool-specific settings are the defaults
const db = mysql.createPool({
  host     : '127.0.0.1', // Your connection adress (localhost).
  user     : 'root',     // Your database's username.
  password : '30258_Rob!#$',        // Your database's password.
  database : 'rc',   // Your database's name.
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
  idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0
});

// For pool initialization, see above
// db.execute("INSERT INTO menu (item_name, description, price, active, inserted_at) VALUES (random, shit, 5.99, 1, "+today+")", function(err, rows, fields) {
//   // Connection is automatically released when query resolves
//   console.log(rows)
// });
