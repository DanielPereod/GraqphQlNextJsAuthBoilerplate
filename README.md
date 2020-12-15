

# GraqphQL NextJs Auth Boilerplate
<img src="https://raw.githubusercontent.com/DanielPereod/GraqphQlNextJsAuthBoilerplate/master/md/logo.svg" width="200">

 - [Packages and documentation](#packages-and-documentation)
	 - [Server dependencies](#server-dependencies)
	 - [Web dependencies](#web-dependencies)
 - [Setting Up](#setting-up)
	 - [Initial setup](#initial-setup)
	 - [.Env files structure](#.env-files-structure)
		 - [Server .env file](#server-.env-file)
		 -  [Web .env.local file](#web-.env.local-file)

# Packages and documentation

## Server dependencies
| Package Name | Description |
|-|-|
| [express](https://expressjs.com/es/ "express") | Required for integration with Apollo Server |
| [apollo-server-express](https://www.apollographql.com/docs/apollo-server/v1/servers/express/ "apollo-server-express") | Apollo server integration with Experess |
| [argon2](https://github.com/ranisalt/node-argon "argon2") | Password crypt library. [Why should I use argon2?](https://security.stackexchange.com/questions/193351/in-2018-what-is-the-recommended-hash-to-store-passwords-bcrypt-scrypt-argon2 "Why should I use argon2?") |
| [graphql](https://graphql.org/ "graphql")  | Required for type-graphql |
| [type-graphql](https://typegraphql.com/ "type-graphql") | GraphQL framework compatible with Typescript |
| [typeorm](https://typeorm.io/#/ "typeorm")  | [ORM](https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping "ORM") compatible with Typescript |
| [dotenv](https://github.com/motdotla/dotenv "dotenv") | Needed for loading *.env*  variables |
| [cors](https://github.com/expressjs/cors "cors") | [Cors](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS "Cors") middleware for express |
| [class-validator](https://github.com/typestack/class-validator "class-validator") | Required for type-graphql |
| [reflect-metadata](https://rbuckton.github.io/reflect-metadata/ "reflect-metadata") | Required for type-graphql |
| [cookie-parser](https://github.com/expressjs/cookie-parser "cookie-parser") | Easy cookie handling |
| [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme "jsonwebtoken") | [More info...](https://jwt.io/ "More info...")  |
| [pg](https://github.com/brianc/node-postgres "pg") | Required for typeorm |
| [uuid](https://github.com/uuidjs/uuid "uuid") | For the creation of RFC4122 UUIDs |

## Web dependencies
| Package Name | Description |
|-|-|
| [chakra-ui ](https://chakra-ui.com/docs/ "chakra-ui ")| Component library |
| [emotion/react](https://www.npmjs.com/package/@emotion/react "emotion/react") | ChakraUI dependency |
| [emotion/styled ](https://www.npmjs.com/package/@emotion/styled "emotion/styled ")| ChakraUI dependency |
| [formik](https://formik.org/ "formik")  | Form library form react |
| [framer-motion](https://www.framer.com/motion/ "framer-motion") | ChakraUI dependency |
| [graphql](https://graphql.org/ "graphql") | GraphQL dependency |
| [next](https://nextjs.org/ "next") | React Ssr framework  |
| [react ](https://es.reactjs.org/ "react ")| React dependency  |
| [react-dom](https://es.reactjs.org/ "react-dom") | React dependency |
|[ react-google-login](https://github.com/anthonyjgrove/react-google-login " react-google-login") | Google Login Button for React |
| [react-is](https://es.reactjs.org/ "react-is") | React dependency |
| [Apollo Client](https://www.apollographql.com/docs/react/ "Apollo Client") | GraphQL client |


# Setting Up
## Initial setup
Run `npm install ` or `yarn` to install all dependecies.
## .Env files structure
### Server .env file
>This .env file must be stored in the root of the server folder.

| Name | Value |
|-|-|
| DB_HOST | Database host
| DB_USERNAME | Database username |
| DB_PASSWORD | Database password |
| DB_DATABASE | Database name |
| SERVER_PORT | Server port |
| REFRESH_TOKEN_SECRET | Random String |
| ACCESS_TOKEN_SECRET | Random String |

### Web .env.local file
>This .env.local file must be stored in the root of the web folder.

| Name | Value |
|-|-|
| NEXT_PUBLIC_GOOGLE_CLIENT_ID |[ Google ID ](https://developers.google.com/identity/one-tap/web/guides/get-google-api-clientid " Google ID ")
