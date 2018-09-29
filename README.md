# sails-auth

a [Sails v1](https://sailsjs.com) application using JWT/Passport for authentication, and Winston for logging to files.


### Getting Started

`npm install` or `yarn install`


**API Endpoints**

- `POST /user` for creating new users
- `POST /auth/user` for logging in
- `GET /user` for getting all users created

Once you have created a user and logged in, use the `token` to access other endpoints. Use an `Authorization` header: `Bearer [YOUR_TOKEN_HERE]`.
