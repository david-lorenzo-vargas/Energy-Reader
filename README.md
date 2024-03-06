# PLEASE ANSWER ALL THESE QUESTIONS YOURSELF AND WITHOUT HELP, DO NOT SHARE THIS MATERIAL ONLINE.

<img src="https://www.eonnext.com/branding/eon/social/social-logo.png" alt="e.on next logo" width="100"/>

# Tech test for a frontend developer position at E.ON Next

_Hi, and congratulations to have made it to this stage! You will have one week after receiving access to this repo to finish our e.on next tech test and send over your answers. Good luck!_

_Please clone this repository with your own github account and add all your answers to your cloned repository. Your repository has to be set to private and shared with us as soon as you are finished and before the deadline._

_The folder structure of your repository is entirely up to you, you can also follow any naming convention you prefer.

_Please try to respond to all the questions as best you can, if you should have any questions please feel free to email james.timms@eonnext.com_

_Writing test cases for your functions will give you bonus points_

## Content

- [Project Description](#project-description)
- [Questions - ways of working](#questions---ways-of-working)
- [Technical exercise](#technical-exercise)
  
## Project Description

We would like you to create an app to collect customer's meter readings. Please extend the scope of this task as much as you like.<br>

## Questions - Ways of working

_Please answer these two questions in a respective MD or text file (e.g. w1.txt and w2.txt) saved to the cloned repo._
<br><br>
<b>W1.</b><br>
You have taken the lead on this project which currently has the highest priority on our backlog. On one of the other apps you maintain, the product owner has contacted you personally and asked you to create some new features as well as fix a bug. You feel you cannot complete all of this work in a reasonable amount of time. How would you handle this situation?<br>
<br>
<b>W2.</b><br>
You have a preliminary meeting to discuss some of the features for an existing frontend application, one of the senior members of the team suggests a solution that you strongly believe will not work. What, if any, actions would you take?<br>
<br>

## Technical Exercise

# Meter Readings

For this exercise, we would like you to create an app to collect customer's meter readings.

Customers read the numbers from their electricity meter, and send them to us so we can properly bill them for their electricity and gas usage.

We need this app to do the following:

## Adding new readings

We want to allow users to add new meter readings using the input box.

New meter readings should be displayed in the section marked "previous meter readings", ordered from most to least recent.

## Validating meter readings

New readings should be validated against the following rules:
a. They must be a 5 digit number between 00000 and 99999.
b. A new reading must be higher than the last _customer_ reading.

When a customer enters an invalid meter, we should apply the `error` class to the input field, and show an error message.

## Predicted usage

We want to predict the customer's upcoming usage and show it on the page. We predict future usage by taking the last four meter readings, taking the average distance between them, and adding that to the latest reading.

For example, if the customers' readings were (in descending order):

00400
00350
00250
00100

The average distance between each of these is:

00400 - 00350 = 50
00350 - 00250 = 100
00250 - 00100 = 150

(150 + 100 + 50) / 3 = 100

Predicted usage = 00400 + 100 = 00500
