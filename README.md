# Solitaire Front End Candidate Assignment

This project is intended for the requirement of recruitment process at Solitaire (PT Bangun Digital Nusantara)

## Authors

- [@Farrely-F](https://www.github.com/octokatherine)

## Tech Stack

**Client:** React, Next 13, Axios, TailwindCSS, react-fast-marquee, Riple UI

**Deployment:** Vercel

## Optimizations

What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility

## Lessons Learned

- Responsive Design Way of Thinking
- NextJs Routing, Feature, and it's Advantage
- Secure code

## Features

- Modern UI
- Skeleton Load
- Responsive Design
- Auth Simulation

## Run Locally

Clone the project

```bash
  git clone https://github.com/Farrely-F/solitaire-frontend-assignment.git
```

Go to the project directory

```bash
  cd solitaire-frontend-assignment
```

Install dependencies

```bash
  npm install
```

Configure local .env

- create a copy of .env.example and remove .example. Adjust with the base API URL you have

Start the development server

```bash
  npm run dev
```

## FAQ

#### How to simulate register?

- go to https://reqres.in and then look up for the POST register successfull endpoint. Copy the payload:

```bash
{
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}
```

- on the site page https://solitaire-frontend-assignment.vercel.app/register input corresponding email and password. If success you will be redirected back to home and your token is saved on local storage

#### How to simulate login?

- similar like register go to https://reqres.in and lookup for the login endpoint:

```bash
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
```

- Copy the email and password, input that value to https://solitaire-frontend-assignment.vercel.app/login
