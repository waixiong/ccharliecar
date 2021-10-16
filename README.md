# CCharlie Car
Demo Project

### API (Root)
build with nestjs

### Web app (./app)
build with react


### How to run
copy `./app/.env.example` to `./app/.env`

copy `.env.docker` to `.env`

run `./single_host.sh`, u might need to modify access with 'chmod'


### Docs for api
go to http://localhost:5000/docs/ or open swagger.json

#### Task
Please develop a system that fulfill the requirements as below: 

Background:
Charles has a car selling shop and he is interested in using a web application as an efficient way to operate his business. The store can add the new cars into the inventory, and he can record down the car sales. Charles wants to see a sales record which associates each transaction with a car to be sold.

The system should consists of several functions:

1. Add new car into inventory
2. Record car sales record with car identity

Car entity consists of:
- Price
- SKU 
- Car Model
- Car Name

We prefer the candidates to use javascript backend framework (e.g. ExpressJs, Nestjs) or Python/Golang and frontend framework (e.g. React, Angular) to do this interview test. If you’re not comfortable with the languages, you may use your familiar languages. Database engine can be Mysql or MongoDB. 

\* The frontend UI can be a very simple listing only.
