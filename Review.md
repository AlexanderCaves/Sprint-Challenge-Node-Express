# Review Questions

## What is Node.js?

## What is Express?

## Mention two parts of Express that you learned about this week.

## What is Middleware?

## What is a Resource?

## What can the API return to help clients know if a request was successful?

## How can we partition our application into sub-applications?

## What is express.json() and why do we need it?

1.  Node.js is a runtime environment that executes javascript applications outside the browser.

2.  Express is like React for the back end.  It's a web app framework that sits on top of Node.js.

3.  routing and middleware

4.  Functions that operate on the request and response objects.  Together they're like an array of functions
    that either return the response or pass to the next middleware.

5.  Everything is a resource, accessible via a unique URL.

6.  It can return a 200-299 series message.

7.  By splitting off different sets of endpoints into separate router files.

8.  It allows express to parse json info from the req body.