### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
    JavaScript achieves asynchronous programming by the use of callbacks, promises and async/await.

- What is a Promise?
     A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). ... Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.

- What are the differences between an async function and a regular function?
       A normal function may or may not return a value whereas an async function always returns a promise. 
       
- What is the difference between Node.js and Express.js?
        
Usage:	Expressjs is used to build web-apps using approaches and principles of Node.js.	 Node.js is used to build server-side,            input-output, event-driven apps.

Building Block:	Expressjs is built on Node.js.	Nodejs is built on Google’s V8 engine.

Written in: Expressjs is written in	JavaScript	C, C++ whereas Nodejs is written in JavaScript

Framework/Platform: Expressjs is a	framework based on Node.js.	Nodejs is a run-time platform or environment designed for server-side execution of JavaScript.



- What is the error-first callback pattern?
    Error-First Callback in Node. js is a function which either returns an error object or any successful data returned by the function. ... The second argument of the callback function is reserved for any successful data returned by the function. If no error occurred then the error object will be set to null.    

- What is middleware?
    Middleware literally means anything you put in the middle of one layer of the software and another. Express middleware are functions that execute during the lifecycle of a request to the Express server. Each middleware has access to the HTTP request and response for each route (or path) it's attached to.

- What does the `next` function do?
    The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.

- What does `RETURNING` do in SQL? When would you use it?
    The RETURNING clause allows you to retrieve values of columns (and expressions based on columns) that were modified by an insert, delete or update. Without RETURNING you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns.

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
    The problem with the above code is that just because all the promises are returned as an array it is going to cause a performance delay.
 It would be best to use the username as the variable during declaration. 