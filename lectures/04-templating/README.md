## **Week 1: The View**
# Class 4: Templating

[Schedule](#schedule) | [Announcements](#announcements) </br>
[Objectives](#learning-objectives) | [Yesterday vs Today](#yesterday-vs-today) </br>
[Lecture Notes](#notes) | [Readings](#readings)


<hr></hr>

## Schedule
1. Objectives and Stand Up
1. Code Review
1. Typography
1. Templating
1. Lab Prep

### Announcements
* [Dan's debugging tips!](https://github.com/codefellowspdx/201d-spring-2017/blob/7b349d6bb2b5f96b66198395ff6231c5abf70ad1/class-10-js_debugging-wireframe_part_2/dan-debugging.md#debugging-workflow)
* Questions? 

<hr></hr>

## Learning Objectives
* Discuss different ways to reuse HTML, specifically using templates.
* Display data using a Handlebars template.
* Distinguish between the different Handlebars expression types ( `{{}}` vs `{{{}}}` ).
* Add personality to a website by styling the typography.
* Interpolate a variable into a string using ES2015 template literals.


### Yesterday vs Today
| Yesterday we... | Today we will... |
| --------------- | ---------------- |
| <ul><li> Created an HTML element to use as a template. </li><li> Used jQuery to clone our template and create new elements.</li><li> Used string concatenation to concatenate a variable to a string. </li></ul> | <ul><li> Use Handlebars.js to compile our template. </li><li> Use ES2015 template literals to interpolate a variable to a string.  </li></ul> |



<hr></hr>

## Notes

#### Code review
* [Eli, Zach](https://github.com/acl-301d-summer-2017/03-jquery-with-events/tree/code-review)

#### Typography
* Typography
    * Why typography matters
        * Typography : Websites :: Audio : Movies
    * Key terms 
        * Serif vs Sans Serif
        * Baseline, x-height, cap height, ascender, descender
    * [Web font formats](https://creativemarket.com/blog/the-missing-guide-to-font-formats)
    * Font sizes and using a font-scale

#### Templates
* Template systems simplify the tedious task of creating elements one by one
    * They provide placeholders for dynamically set data
* Handlebars.js is a compiler 
    * It takes an HTML template, compiles it into a JS function which takes an object and returns a filled out HTML template
    * Four steps
        * include the library
        * create an HTML template
        * compile the template
        * fill the template with data

## Readings
* [Handlebars.js Official Documentation](http://handlebarsjs.com/) (Reference)
* [Learn Handlebars.js in 10 Minutes tutorial](http://tutorialzine.com/2015/01/learn-handlebars-in-10-minutes/) (Essential)

## Lab
[4: Templating](https://github.com/acl-301d-summer-2017/04-templating)

[Portfolio Lab:](https://github.com/acl-301d-summer-2017/04-templating/blob/master/PORTFOLIO-README.md)