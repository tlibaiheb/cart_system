import { createClient, dedupExchange, fetchExchange } from 'urql';
import { retryExchange } from '@urql/exchange-retry';
import { cacheExchange } from '@urql/exchange-graphcache';
import getEnv from '@utils/getEnv';
import { relayPagination } from '@urql/exchange-graphcache/extras';

const cache = cacheExchange({
  resolvers: {
    Query: {
      balloons: relayPagination(),
    },
  },
});

const options = {
  initialDelayMs: 1000,
  maxDelayMs: 15000,
  randomDelay: true,
  maxNumberAttempts: 2,
  retryIf: (err: any) => err && err.message,
};

const url = getEnv('REACT_APP_GRAPHQL_ENDPOINT', 'https://balloons.thetc.se/graphql');

const client = createClient({
  url,
  exchanges: [dedupExchange, retryExchange(options), cache, fetchExchange],
});

export default client;
