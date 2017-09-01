## **Week 2: The Model**
# Class 6: AJAX & JSON

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. WRRC
1. AJAX and JSON
1. Lab Prep

### Announcements
* Surveys!
* Due Monday:
    * Lab 6
    * Portfolio 4
    * Quiz 1
    * Code Wars
    * Feedback
* Questions? Resources to share?
<hr></hr>

## Learning Objectives
* Identify when apps need persistence, to improve the UX and isolate the model logic in the code base.
* Explain how the browser uses the request-response (WRRC) cycle to render an HTML file or AJAX call.
* Implement AJAX to get data to display.
* Declare variables using ES2015 `let` and `const`.

### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| Loaded our data from JS objects. | Load our data from a JSON file. |
| Didn't have persistent data. | Make our data persist using LocalStorage. |
| Declared variables using the keyword `var`. | Declare variables using the keywords `let` and `const`. |

<hr></hr>

## Notes

* WRRC *(Web Request Response Cycle)* & HTTP *(Hypertext Transfer Protocol)*
    * What is a website?
        * A buncha files: html, css, js, json, images, audio, etc
        * How do we open it?
        * How do we open it if it's not on our computer?
    * How do computers talk to each other??!
        * HTTP = Hypertext Transfer Protocol
            * Kinda like a language: nouns, verbs, adjectives
        * Nouns = files, URLS
        * Verbs = what we want to do with those files (aka resources): GET, POST, DELETE
        * Adjectives = did our request happen okay?
        * Two computers having a chat:
            * The request-response cycle
            * 3 parts of an HTTP request
            * 3 parts of an HTTP response

* Using AJAX & JSON
    * JSON
        * JavaScript Object Notation
        * Format of passing data around the internet (remember those HTTP conversations?)
        * Looks like an object, but everything is stringy!

    * AJAX
        * What?
            * Back to that HTTP conversation - how was it initiated? 
            * Before, only our browsers could start a convo with a server using the address bar
            * But that's cubmersome - so let's do it with JS!
        * Why
            * So we don't have to reload the page for new information
                * new data for an article
                * form validation - does this user exist?
        * How
            * jQuery <3
        * Demo - How
            * load data as JSON
            * caching data
            * conditionally reload based on eTag
            * Understanding the asynchronous nature of callback functions.
            * Familiarity with jQuery deferred methods:** .done(), .fail(), .always().



## Readings
* JS & jQ, Ch 8: pp.367-408 (Context: 384-387; Essential: 367-383, 388-399; Reference:400-408)
* [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) (Essential)


## Lab
[Lab 5: AJAX & JSON](https://github.com/acl-301d-summer-2017/05-ajax-and-json-and-wrrc)

[Portfolio lab](https://github.com/acl-301d-summer-2017/05-ajax-and-json-and-wrrc/blob/master/PORTFOLIO-ASSIGNMENT.md)