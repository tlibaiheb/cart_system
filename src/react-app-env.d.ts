/// <reference types="react-scripts" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_GRAPHQL_ENDPOINT: string;
    REACT_APP_SERVER: string;
  }
}
