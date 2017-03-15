# Timestamp Microservice

This service is located at 
[https://obscure-ravine-25083.herokuapp.com](https://obscure-ravine-25083.herokuapp.com)

### User Stories
1) The user can pass a string as a parameter and the service
will check to see if the string contains either a Unix timestamp
or a natural language date (example: January 1, 2000).
2) If it does, the service returns both the Unix timestamp and
the natural language form of the date.
3) If it doesn't, the service returns null for those
properties.

### Examples
```url
https://obscure-ravine-25083.herokuapp.com/946706400
https://obscure-ravine-25083.herokuapp.com/January%201,%202000
```

### Output
```json
{"unix": 946706400, "natural": "January 1, 2000"}
```
