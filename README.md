# Getting Started

## Project Structure
```sh
.
├── .storybook             # Storybook settings
├── docs                   # Documentation files (markdown format, github flavour)
├── src                    # Source files
│    ├── components       # Components that are shared between pages/views
│    │    ├── Button      # Sample component, to be deleted
│    │    └── Canvas      # Canvas component to be developed here
│    └ index.ts             # import/export should be changed to Canvas component
└── README.md               # This file
```

## Main Libraries/Components Used
[FabricJS](http://fabricjs.com/)\
[Styled Components](https://styled-components.com/)\
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)\
[Storybook](https://storybook.js.org/)

## Commit Messages
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) should be used in this project.\
If commit is related to a ticket in Jira, ticket number should be included in the commit message

## Available Scripts

In the project directory, you can run:

### `npm run storybook`

Runs the the component in the storybook environment.

### `npm test`

Should launch the test runner in the interactive watch mode.\
It doesn't do anything at the moment. The script should be updated to run the tests.

### `npm run build`

Builds the component for production.
