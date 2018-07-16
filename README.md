# README

An example calendar app written using Rails, Webpacker, and React

### how it works

Webpacker delivers js & scss out of the frontend/ folder.

React is injected into individual views with the `javascript_pack_tag`

### setup

run `yarn`/`bundle`

database is setup for a mysql user with username/password 'calendar'/'calendar' on
calendar_dev, calendar_test, and calendar

run `bin/webpack-dev-server` to start compiling and serving javascript assets

and finally `rails s`


### What works

Add events to days using a datepicker

Add a username so you can tell who made what

Everything uses ajax and is snappy, you can see your friends' events get created in (semi) real time

React hasn't crashed! (yet)

### What needs work

Input validation - and better fields for time & duration input

Display of time for schedules - it's confusing when they overlap

Usernames - it can be hard to remember or you can just steal your friend's

### Things to improve next

Proper user authentication with something like devise

Allow users to apply to join other user's events

Display the schedules in something like google calendar to make it easier to understand what's overlapping

Timezones!

Email notifications - hey, best not forget when your next event is

Use Golang .. ? Somehow? Somewhere?
