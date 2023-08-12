# ESS Essaly

Essaly is a NodeJS API for the interaction with the different ESS docker containers.

## Setup

Add a .env file in the root of the project with the following content:

```bash
NODE_ENV=""         # value for the environment, e.g. development, production, etc.
APP_PORT=""         # value for the port the API should listen on

ESS_TASKING_PATH="" # value for the path to the Tasking repository
```

## Start

To start the API, execute `task start &` in the root directory of the project.

## Stop

To stop the API, execute `task stop` in the root directory of the project.
