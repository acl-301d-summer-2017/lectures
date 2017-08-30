## **Week 1: The View**
# Class 3: jQuery and Events 

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)

<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. jQuery events
1. Lab Prep

### Announcements
* If you haven't yet, get started on Code Wars!
    * change settings to "fundamentals"
    * don't stress too much, grading more for effort
* Extra credit options are available every day and can be turned in whenever!

<hr></hr>

## Learning Objectives
* Create event listeners using jQuery's `$.on()`
* Distinguish when to use event delegation.
* Select and target HTML elements using the `data` attribute.
* Run our scripts when the DOM is ready using `$(document).ready()`


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> used jQuery's data method to add data to elements.</li><li> used the DOM's addEventListener method to listen bind event handlers.</li><li> ran our scripts as soon as they loaded.</li></ul> | <ul><li> use jQuery's data method to update an element's data attributes. </li><li> use jQuery's on method to bind event handlers. </li><li> run our scripts when the document is ready. </li></ul> |



<hr></hr>

## Notes

* jQuery Events
    * Review
        * Vanilla JS events recap (pg. 244)
        * Connect the concept of events with the DOM
        * Common browser events
        * Events are handled by callback functions
        * Understanding ancestry of the DOM, how to traverse to child nodes
        * Event handling can be used to override default behavior (like link click, or form submit)
    * jQuery events
        * Examples: click, change/input, scroll
        * With jQuery, event listeners should be registered with `$.on()`
        * `$.on()`
            * Discuss `$.on()` with and without delegation.
        * Event delegation
            * How to add event listeners to dynamically created and inserted elements?


## Readings

* JavaScript & jQuery: pages 326-366
  *(Context: 354-361; Essential: 322-353; Reference: 362-366)*

## Lab
[Lab 3: jQuery and events](https://github.com/acl-301d-summer-2017/lab-03-jquery-events)

[Portfolio Lab:](https://github.com/acl-301d-summer-2017/lab-03-jquery-events)