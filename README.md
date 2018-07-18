# Timestamp Microservice

## Overview

Returns a Unix and UTC timestamp for a given date.

## User Stories

1.  The API endpoint is `GET /api/timestamp/:date_string?`
2.  A date string is valid if can be successfully parsed by `new Date(date_string)`.
    Note that the unix timestamp needs to be an **integer** (not a string) specifying **milliseconds**.
    In our test we will use date strings compliant with ISO-8601 (e.g. `"2016-11-20"`) because this will ensure an UTC timestamp.
3.  If the date string is **empty** it should be equivalent to trigger `new Date()`, i.e. the service uses the current timestamp.
4.  If the date string is **valid** the API returns a JSON having the structure

    `{ "unix": <date.getTime()>, "utc": <date.toUTCString()> }`

    e.g.

    `{ "unix": 1479663089000, "utc": "Sun, 20 Nov 2016 17:31:29 GMT" }`

5.  If the date string is **invalid** the API returns a JSON having the structure

    `{"error" : "Invalid Date" }`.

## Example Usage

`GET /api/timestamp/2015-12-25`

`GET /api/timestamp/1450137600`

## Example Output

`{ "unix": 1451001600000, "utc": "Fri, 25 Dec 2015 00:00:00 GMT" }`
