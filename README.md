# sails-auth

a [Sails v1](https://sailsjs.com) application using JWT/Passport for authentication, and Winston for logging to files.


### Getting Started

`npm install` or `yarn`

### Database

The app uses `sails-disk` for data storage (for quickly getting started), but you can easily configure a database connection in `datastores.js`.

### Environment Variables

[dotenv](https://github.com/motdotla/dotenv) is utilized for environment variables. If you'd like to use them within the app, create a `.env` file in the root of the app directory and set variables in that file:

```
MYSQL_URL=mysql://user:password@hostname:port/database
NODE_ENV=production
```

### API Endpoints

- `POST /user` for creating new users
- `POST /auth/user` for logging in
- `GET /user` for getting all users created

Once you have created a user and logged in, use the `token` to access other endpoints. Use an `Authorization` header with a `Bearer` token value: `Bearer [YOUR_TOKEN_HERE]`.
