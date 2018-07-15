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
