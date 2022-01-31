# gql-test
gql test for kambi.

## To Run Project In local

Make Sure you have dev.env and test.env file in your root project structure before running the project.

- Run ```npm install```
- Run ```npm run start_local_dev``` to run project in local env.
- Once you run the above command, the Apollo GraphQL Server will start on PORT 4000. Go to ```http://localhost:4000/graphql``` to explore queries and mutations in playground.
- You can use the following query to get list of users or user
 - To Get a list of users : 
```
query getUsers {
  users(id: ["c000ef67-6f25-4b35-9f90-480deb0b9e79", "123"]) {
    ... on UserType {
      __typename
      ...userFields
    }
    ... on UserNotFoundError {
      message
      __typename
    }
  }
}

fragment userFields on UserType {
  id
  displayName
  email
  pets {
    id
    name
    type
    age
    userId
  }
  cars {
    id
    name
    description
    purchased
    userId
  }
}

```
-  To Get a user :
```
query getUser {
  user(id: "c000ef67-6f25-4b35-9f90-480deb0b9e79") {
    ... on UserType {
      __typename
      ...userFields
    }
    ... on UserNotFoundError {
      message
      __typename
    }
  }
}

fragment userFields on UserType {
  id
  displayName
  email
  pets {
    id
    name
    type
    age
    userId
  }
  cars {
    id
    name
    description
    purchased
    userId
  }
}

```

## UnderStanding Code 

- When you run any command to run the project, it runs index.js file in ```src``` folder, where we combine all the ```typeDefs``` defined in ```Schema``` folder.
- Context.js is the main File and the heart Design of code, where we inject all services and resources and much more to it. By injecting these in context, we can use context anywhere since context will be passed to every resolver function. We have passed context to ApolloServer in apollo-server.js file.
- ```Services``` Folder has all the services or the microservices and their endpoint.
- In ```lib``` we have all the resources that we need. Each resource maps one to one to Service and we can define more operations in resources, or do some calculations or anything we like. Once we do this we finally return a ```type``` which are defined in ```types``` folder. Notes all graphql fields are finally resolved in types so if client is not querying some fields and we are making a api call from types, so it will not be executed automatically. for example take  example of ```user-type``` defined in ```lib/user/type/user-type.js```, ```pets``` is calling PetsResource and it comes from pets api.

## Things we can include further

I think the time for test is very-short and we can include many things like flow types or we can use typescript, error-handling is one more thing which we can imrove by controlling error thrown from resolvers.Logging and graphQL UI can be further imroved and modified according to our use case.

## Code Scripts 

- ```npm run check``` -  Before you commit the code to github, you'll see that Husky is being used to set these pre commit hooks. This is to make sure that we dont push any mistaken or wrong code to github. ```npm run check``` is the command which checks linting, prettify and runs all test cases.
- ```npm run build``` - Used to build project , becuase we have used import and export in code which saves a lot of time in dev so we are using babel in dev to make the build for the project.


## Dependencies 

- ```apollo-server , apollo-server-core , apollo-server-express , graphql, express ```  are used to set up GraphqQL Server.
- ```axios``` is used for making https request. We could use NodeJs https but to save time , i've used axios.
- ```dotenv``` is for using env variables, although we can use config and yaml files to set up different envs.

## Error Handling

- Notice if you provide wrong user Id , we return a type of UserNotFoundError as User is a union of UserType and UserNotFoundError, so it can take any value.
- If wrong input is provided, we are throwing a validation error.


