# Employee Management System

This project is a simple Employee Management System implemented in Node.js using the Express framework. It provides endpoints to retrieve employee data and update their minimum and maximum working hours.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your_username/employee-management-system.git
    ```

2. Install dependencies:

    ```bash
    cd employee-management-system
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

## Usage

- **Retrieve Employee Data**: Send a GET request to `/api/employees` to retrieve all employee data.
- **Update MinTimeInHours**: Send a PUT request to `/api/employees/min-time` with the employee's email and the new minimum time in hours.
- **Update MaxTimeInHours**: Send a PUT request to `/api/employees/max-time` with the employee's email and the new maximum time in hours.

## Configuration

- The server listens on port 3000 by default. You can change the port by setting the `PORT` environment variable.
- Employee data is stored in a YAML file named `data.yaml`.

## Dependencies

- Express.js: Web framework for Node.js
- js-yaml: YAML parser and serializer for JavaScript

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
