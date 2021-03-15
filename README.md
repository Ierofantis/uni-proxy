# University Api

University Api

# Installation

1) Open your terminal and type :

`git clone https://github.com/Ierofantis/uni-proxy`

2) When the process is completed then navigate to the project:

`cd uni-proxy`

3) Please type:

`docker-compose build`
 
 and after that type:

 `docker-compose build up`

 4) Now you are ready to use the uni-api proxy

# Instructions

# URLS

I will provide the list of the urls that you can enter:

1) http://localhost:9000/getAllUniversities
2) http://localhost:9000/getAllUniversities?country=united%20states&page=1&limit=2
3) http://localhost:9000/getAllUniversities?name=Marywood&page=1&limit=2
4) http://localhost:9000/getAllUniversities?page=1&limit=5
5) http://localhost:9000/getUniversityStatistics

# Implementation

1) The main file is app.js that imports some libraries, starts the server and injects routes to the application
2) src/routes.js declares routes. In every route I am using a very basic, cache and throttling mehanism. Also every route corresponds to one controller. For  example in /getAllUniversities we need the universities.getAllUniversities controler
3) In src/controllers dir we have the universities and statistics controller. Universities controller is called in /getAllUniversities
route and statistics controller is called in /getUniversityStatistics
4) In src/test we have statistics and universities files where I have implemented the integration tests.
4) In docker/api dir there is the Dockerfile.
5) The external files are: gitignore(git ignores the dependencies in the file), docker-compose.yml(docker-compose), package.json(dependencies) and .babelrc(necessary if you want to use ES6 modules/features e.g import)

# Test
1) I am using Mocha and I am doing integration tests in a very basic level. If you want to run these tests please type:

`npm run test`

# Thoughts

1) For cache in an ideal senario I would use a distributed solution like reddis, but now I have used a npm module that caches the
content in memory. That has some good and bad implications:

   Good
   It is the fastest option available

   Bad
   If the server goes down the data is lost

   Also this is a very basic example and there is no strategy behind It. For example:
   What happens when data from the external api is updated?

2) Node Js and expressjs are not mulit-threaded which means that it can only process one response at a time. By using asynchronous
mechanisms on your server appear multi-threaded but they are not.
