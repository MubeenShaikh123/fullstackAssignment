# Help Center API

This is a simple API for managing cards in a help center. It provides endpoints to create, retrieve, update, and delete cards.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Running the Project](#running-the-project)

## Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/) (local installation or cloud instance)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) (for managing dependencies)

## Installation

**Clone the Repository**

   ```bash
   git clone https://github.com/MubeenShaikh123/fullstackAssignment.git
   cd fullstack-assignment
   cd backend
   ```

## Configuration

Before running the project, you need to set up your environment variables. 
Create a `.env` file in the root directory of the project and add the following variables:

- **PORT:** The port on which the server will run. Default is `4000`.
- **MONGODB_URI:** The URI for your MongoDB database. 

## Running the Project

```bash
yarn start
```
OR for using nodemon
```bash
yarn dev
```

