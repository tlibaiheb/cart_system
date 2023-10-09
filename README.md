# Balloons Store
Live [demo](https://balloonstore.netlify.app/).

# Demo Video
[![IMAGE ALT TEXT HERE](https://i.ibb.co/ZgTjWYq/store.png)](https://www.youtube.com/watch?v=s-53nM39V6o)

# 1. Getting Started

Install node modules: `npm install`

## 1.1. Include a .env file
Please follow the .env.example file.

## 1.2. Scripts
### Run the development server
`npm run start`
### Build the application
`npm run build`
### Linting the code
`npm run lint:fix`

# 2. Requirements

### 2.1 A way to see all the balloons :
* This list or table should be paginated and filterable in some way

### 2.2 A way to see details of a balloon:
* This should show all available details
* This should also allow a user to add a quantity of this balloon to their "shopping cart"

### 2.3 A Shopping cart to review selected balloons for purchase:

### 2.4 Responsiveness:
* The page must be responsive across small, medium and large screens.

# 3. Implementation

## 3.1 Dependencies
This project was build based on [CRA](https://github.com/facebook/create-react-app) TS template with the following dependencies:

- [urql](https://www.npmjs.com/package/urql)
  A highly customizable and versatile GraphQL client for React.
- [lodash](https://www.npmjs.com/package/lodash)
  A javaScript utility library delivering modularity, performance & extras.
- [styled-components](https://www.npmjs.com/package/styled-components)
  CSS-in-JS library and theme provider
- [@styled-system/theme-get](https://www.npmjs.com/package/@styled-system/theme-get)
  Can be used in any style declaration to get a value from our theme
- [react-app-rewired]()
  Provides better CRA flexibility without ejecting
- [eslint](https://www.npmjs.com/package/eslint)
  A tool for identifying, reporting and fixing patterns found in javascript.

## 3.2 Project architecture
```
| src/
    |- components/
        |- atoms/
        |- molecules/
        |- icons/
    |- routes/   
    |- pages/
    |- graphql/
        |- fragments/
        |- queries/
        |- client.ts
    |- shared/
    |- theme/
        |- cart/
        |- hooks/
        |- Layout/
    |- utils/
    |- index.ts
    |- ErrorBoundary.ts
```
* **index.ts** : is the main file of the front end application.
* **ErrorBoundary.ts** : useful for handling React errors.
* **components/**: is a folder containing the app's custom reusable components.
    - **Atoms** are small components like Inputs, Headings, Image .etc.
    - **Molecules** are custom components making some custom composed components like Drawers, Dropdowns .etc.
    - **Icons** is where our svgs are defined as react components.

* **routes/**: This folder contains our react app routes that are grouped to ensure data encapsulation,
  i.e:
    - **Routes.tsx** will contain our app public routes like the login & register pages, as well as the main route to the dashboard
    - **AppRoutes.tsx** will contain our main app dashboard pages.

* **pages/**: Pages are our app screens, each page will contain its own components. Every component is composed of 3 or more files:
    - **component.tsx** will contain basic tsx declarations and logic
    - **withStyle.ts** contains the css styling of the component. This way each component will have its own css.
    - **components/** If the page/component contains many sub-components, they will be defined in this folder.
    - **index.ts** will help import the main react tsx component
    - A component can contain other files like custom hooks for retrieving, or doing any other logic.

* **graphql/**: Contains the graphql definitions for the app. I've chosen to divide it this way:
    - **Fragments** will contain the basic reusable fragments of our queries / mutations
    -  **Queries/** this folder will contain all application queries. It can be refactored later into some sub-folders depending on the context.
    - The **client** will contain the GraphQl client, we will handle the relayPagination as well as the cache setting and the retry policy in here.

* **shared/**: This folder will have shared app layout (i.e. a navbar, footer ...), hooks, or other components to be used everywhere.

* **theme/**: In here we will define the theme for our application. I've chosen to work with styled components for its simplicity in creating a theme and
  defining variables like colors, screen sizes, font sizes, etc ...

* **utils/**: Contains of subset of helper functions & constants, ... to be used everywhere in our app.

## 3.3 Explanation

### - Building our main components:
I've chosen to build our atoms and molecules components from scratch instead of importing ready-to-use components.
This will make our app scale later and will make us independent of other unnecessary npm packages.

For example the dropdown menu. Despite its simple implementation,
it can be customized later to have for example icons in the dropdown content menu.

### - Creating custom hooks:
This will ensure separating the UI from the application logic, like retrieving the data or searching it.

### - Using context APIS:
This will make the application simple and avoid passing down props from components.

### - Persisting the data:
- All graphql queries will be persisted to the urql client. Cart data will be persisted in the localStorage.

### - Styling:
- **Style wrapping:** In the entire app, I've chosen to style my components using a HOC pattern using the StyledComponent library.
  This way we will avoid writing our CSS styled-components into our TSX file.
- **Responsiveness:** Our app is responsive and respond to the requirements.

### - Rewiring the application:
- This seems like the only solution to add absolute paths to CRA apps without ejecting.

# 4. Improvements
if I were to spend additional time on the project, I would work on adding tests,
improving the typescript types as I'm new to the typescript world.



