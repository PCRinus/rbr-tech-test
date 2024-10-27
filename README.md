# Red Bull Racing Tech assessment

This is the repo that hosts the solutions to the RBR tech assessment.

## Prerequisites and installation

You will need [node v20](https://nodejs.org/en/download/package-manager) and [pnpm](https://pnpm.io/installation) to install the dependencies. If you already have [nvm](https://github.com/nvm-sh/nvm?tab=readme-ov-file#installing-and-updating) installed, you can run `nvm use` to switch to the correct node version, otherwise you can run `nvm install` to install the correct version.

To install the dependencies, run:

```bash
pnpm install
```

## Setting up the environment

In the `env.example` file, you will find the environment variables that you need to set up. You can copy the file and rename it to `.env` and fill in the values. You will mainly need the provided API key.

## Running the development server

To run the development server, you can run:

```bash
pnpm dev
```

This will start the server on `http://localhost:5173`.

## Routes

The project has the following routes:

- `/` - The home route, which will display 2 options for the 2 tests.
- `/tech-test-01` - The route for the first test. It will display the driver standings for the 2023 season.
- `/tech-test-02` - The route for the second test. It will display 2 options, one for the card rail, and one for the hero element.
- `/card-rail` - The route for the card rail. It will display the card rail page design
- `/hero-element` - The route for the hero element. It will display the hero element page design

## Improvement directions

- The project could be improved by adding more tests, especially for the components.
- I tried to not go overboard with the RBR design and colors, especially for the common pages, but maybe more design work could have been done.