## **Week 3: The Controller**
# Class Class 14: Middleware

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. Middleware and PageJS
1. Lab Prep

### Announcements
* Questions?

<hr></hr>

## Learning Objectives
* Add middleware to our routes
* Use PageJS context object to get query params

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Loaded all of our resources on one page (`/articles`). | Load singular resources on their own page (`/article/<article-id>`). |
| Passed data around using functions. | Use the PageJS context object to pass data. |

<hr></hr>

## Notes

**Middleware?!?! What's that?**
  - You've been using middleware all along: in your Express server
  - Middleware functions:
    - receive data (request, response, context)
    - can call the next middleware function
    - analogy: passing the baton in a relay race, especially if they alter the baton in some way; the baton is the data and the runners are the middleware functions
  - When do you need middleware?
    - If you want to run the same code regardless of the route being visited
      - For example: using the public directory to serve static files
    - If you want to provide different data to a specific function
      - For example: loading articles by category vs author
  - Demo - Using middleware with PageJS
    - The context object `ctx`, `next()`
    - Multiple callbacks
    - Working with URL params
  
## Readings
* [Page.js selections](https://github.com/visionxmedia/page.js#context) *(Especially the "Context" and “Routing” sections)*

## Lab
- [Lab 14: Managing State](https://github.com/acl-301d-summer-2017/14-managing-state-and-middleware)
