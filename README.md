# ADMS-MicroServices

This repository contains the implementation of a microservices architecture for the IN3400-Advanced Database Management System course assignment. The goal of this assignment is to design and develop three microservices that collectively demonstrate advanced database management concepts through a distributed application.

## About The Project
This project was implemented to gain an understanding of Microservices. ADMS-Microservices includes three microservices: user management, order placement, and inventory management. The ultimate goal is to place an order for a particular user based on the items available in the inventory. Each microservice provides basic CRUD (CREATE, UPDATE, VIEW, and DELETE) operations.

### Build With
The project is implemented using the following frameworks and databases:
- Node.js
- MySQL
- PostgreSQL
- MongoDB

All three databases are hosted on Microsoft Azure. PostgreSQL (OrderDB) is hosted in "Azure Database for PostgreSQL flexible server," MySQL (UserDB) in "Azure Database for MySQL flexible server," and MongoDB (InventoryDB) in "Azure Cosmos DB for MongoDB account.” All three databases are included in the resource group named ‘Goal drivers’ (group name).

## Getting Started

### Prerequisites
- Suitable IDE
- MySQL Workbench for MySQL, pgAdmin for PostgreSQL, and MongoDB Compass for MongoDB or any other relevant app to view databases

### Installation
Follow these steps to implement and set up the project:

1. Clone the repo
   ```sh
   git clone https://github.com/chilan123/Merge_Database_Assignment.git
