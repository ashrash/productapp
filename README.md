# Product app
# Gallery app using flicker API
## Tech stack

MongoDB
Expressjs
Reactjs
NodeJs

## Folder structure 
```
├── .github/workflows
├─ config
├── server
│   ├── config
│   ├── controllers
│   ├── dtos
│   ├── interfaces
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── tests
│   ├── utils
│   ├── app.ts
│   └── index.ts
├─ src
│  ├─ assets
│  ├─ components
│  ├─ constants
│  ├─ containers
│  ├─ state
│  │  ├─ ducks
│  │  │  └─ ImageGallery
│  │  │  └─ Product
│  │  │     ├─ actions.js
│  │  │     ├─ index.js
│  │  │     ├─ reducers.js
│  │  │     ├─ sagas.js
│  │  │     ├─ selectors.js
│  │  │     └─ types.js
│  └─ index.jsx
└─ Dockerfile
```


## Running Front-end App in DEV mode
``` 
#Install dependencies
npm i 

#Start app in dev mode. Default port: 3000
npm run dev 
```

## Running backend App in DEV mode
``` 
#Install dependencies
npm i 

#Start app in dev mode. Default port: 3000
npm run server 
```

## Running Tests
Make sure the app is running using the above command for the backend app.

**Backend unit tests:**
```npm run test:server```

**FrontEnd unit tests:**
```npm run test```

## Swagger endpoint

``` http://localhost:3000/api-docs ```
