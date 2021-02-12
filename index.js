require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));

// 1. execute 'npm install' for starters
// 2. execute 'npx knex migrate:latest'
// 3. execute 'npx knex seed:run'
// 4. in api directory, create sub directory named 'auth'
// 5. in auth directory, create auth-router.js file
// 6. in server.js, create route variable for auth-router.js file
// 7. in server.js, mount auth variable as follows:
// server.us('/api/auth', authRouter);
// 8. in auth-router.js file, connect the router to the users-model.js file
// 9. in the auth-router.js file, you will only be adding post methods, one to register, the other to log in
//10. install bcrypt with npm install bcrypt
//11. import bcrypt into auth-router.js file
//12. in auth-router.js, in the body of the post request, add the following variable
// const hash = await bcrypt.hashSync(user.password, 10)
// then, the following
// user.password = hash
// these itmes must come before the try/catch
//13. test in postman by adding a username and password to confirm the hash works
//http://localhost:5000/api/auth/register
//14. build out the post method for logging in, using the /login endpoint
// test in postman with the following endpoint
//http://localhost:5000/api/auth/login
//15. to start using sessions, install express-session with 'npm install express-session'
//16. in server.js file, add const session = require('express-session);
//17. next, in server.js, create sessionConfig variable, after the variable declarations but just 
// before the server.use() declarations
//18. the sessionConfig is an object that contains the following:
//name, secret, cookie: { maxAge: , secure: t/f, httpOnly: t/f}, resave: t/f, 
// saveUninitialize: t/f
//19. next, pass the session as follows, server.use(session(sessionConfig))
//20. in the auth-router.js file, in the login post method, in the if statement add 
// 'req.session.user = user' just before the res.status(200) statement
//21. in the auth directory, create logged-in-check-middleware.js file
//22. build out the code for the logged-in-check-middleware.js file
//23. import logged-in-check-middleware into users-router.js file
//24. add logged-in-check-middleware as middleware to the get method in users-router.js file
//25. create a get request in the auth-router.js file for logging out with a logout route.
//26. next, install 'npm install connect-session-knex' 
//27. add a variable that adds connect-session-knex to server.js, like the following
// const knexSessionStore = require('connect-session-knex')(session) session comes from the variable created from 
// const session = require('express-session');
//28. next, add a store object inside of your sessionConfig object that holds the following
/**
 *   store: new knexSessionStore(
    {
      knex: require("../database/connection.js"), 
      tablename: "sessions",
      sidfieldname: "sid",
      createtable: true,
      clearInterval: 1000 * 60 * 60
    }
  )
 */

