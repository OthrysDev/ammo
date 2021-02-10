# Ammo &middot; [![Under Development](https://img.shields.io/badge/under-development-orange.svg)](https://github.com/OthrysDev/ammo) ![GitHub](https://img.shields.io/github/license/OthrysDev/ammo) ![GitHub package.json version](https://img.shields.io/github/package-json/v/OthrysDev/ammo) ![GitHub last commit](https://img.shields.io/github/last-commit/OthrysDev/ammo)

<p align="center">
<img src="https://i.imgur.com/uxnsy2K.png" align="center" width="300px" height="300px" alt="Ammo's logo" />
</p>

Ammo is an open-source tool that converts HTTP calls into ready-to-use stress engines' scripts (like [Gatling](https://gatling.io/)). It handles the conversion from HTTP request / response to Scala / Gatling script. The goal is to make stress testing easier and faster for everyone.

Ammo is built on top of Javascript / Typescript, Node, Express, Socket.io, React, Material-UI and uses Cypress, Jest & Storybook for its tests.

## Introduction

While there are excellent stress test engines out there ([Gatling](https://gatling.io/) or [Neoload](https://www.neotys.com/fr/neoload/overview) for instance), their usage is oftentimes cumbersome, making them completely out-of-reach for small businesses and painful to use for the bigger ones.

Ammo aims at providing a very simple tool that will capture a test session and automatically convert it to Gatling scripts, removing the need for manual scripting. And even though stress test engines already provide _recorders_, Ammo offers a better interface, better automation and engine-agnostic tooling to achieve the same goal more easily.

## Architecture

Ammo itself consists of 2 things :

- An **API** that receives HTTP requests & responses (which we call _connector requests_) in the `/backend` folder
- A **web application** that receives the connector requests (forwarded by the API) and converts them into scripts in the (in the `/frontend` folder).

For Ammo to be useful, first you need to send the connector requests to its API, that is, you need to plug a listener to your piece of software to track every HTTP call (ie, you need to write what we call a _connector_). Once you've intercepted a call, you can send it to Ammo's API.

<p align="center">
<img src="https://i.imgur.com/bnoKgvA.png" align="center" alt="Ammo's architecture"/>
</p>

This leaves you with the opportunity to intercept calls in any application (whether it is a website or a software etc.). We provide a web connector that covers most needs regarding websites & web applications, but you could write your own connector. Ammo's API is an agnostic entry point.

You can find the official Ammo web connector [here](https://github.com/OthrysDev/ammo-web-connector). Please refer to its README as to how to use it.

## Scope

For the time being Ammo only generates Gatling scripts. Also, we chose the [Cypress realworld app](https://github.com/OthrysDev/cypress-realworld-app) (that we forked [here](https://github.com/OthrysDev/cypress-realworld-app)) for the scope of Ammo's capabilites. That is, our goal is to be able to run a complete recording of this application (we basically run all the Cypress tests and make sure they are correctly scripted on Ammo's end).

If you want to add a new engine export to Ammo, or want to add use-cases that are not featured in the Cypress real world app, feel free to contribute. We chose this app as a starting point but obviously it does not contain every possible HTTP interaction there is.

## Installing

Ammo can be cloned and installed just by running:

```shell
npm install
```

And then started with:

```shell
npm start
```

Ammo should open at [http://localhost:3000](http://localhost:3000).

Remember, as stated above, you might also need to use the [web connector](https://github.com/OthrysDev/ammo-web-connector) to be started. If you don't, you can still test Ammo by using Postman. There is a collection of Postman calls in the `backend/postman` folder.

## Useful Resources

> Gatling

- [Home](https://gatling.io/)
- [Documentation](https://gatling.io/docs/current/)

> Neoload

- [Home](https://www.neotys.com)

> Cypress realworld app

- [Github](https://github.com/OthrysDev/cypress-realworld-app)

## Contributors

| [![Axel Chandelier](https://avatars.githubusercontent.com/u/44843525?s=100)<br /><sub>Axel Chandelier</sub>](https://www.linkedin.com/in/axel-chandelier-6a6079181/)<br /> | [![Gaël Ferrand](https://avatars.githubusercontent.com/u/45355989?s=100)<br /><sub>Gaël Ferrand</sub>](https://www.linkedin.com/in/gaelferrand/)<br /> |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------ |


## License

[MIT](https://github.com/OthrysDev/ammo/LICENSE.md) &middot; Developped by [Othrys](https://othrys.dev/)
