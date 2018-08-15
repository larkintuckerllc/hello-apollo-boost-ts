import gql from 'graphql-tag';

const query = gql`
{
  counter @client
}
`;

export default {
  Mutation: {
    decrementCounter: (_: any, params: any, { cache }: any) => {
      const { counter }: { counter: number } = cache.readQuery({ query });
      const nextCounter = counter - 1;
      const data = {
        counter: nextCounter,
      };
      cache.writeData({ data });
      return nextCounter;
    },

    incrementCounter: (_: any, params: any, { cache }: any) => {
      const { counter }: { counter: number } = cache.readQuery({ query });
      const nextCounter = counter + 1;
      const data = {
        counter: nextCounter,
      };
      cache.writeData({ data });
      return nextCounter;
    },
  }
};
