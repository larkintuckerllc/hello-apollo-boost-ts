import gql from 'graphql-tag';
import * as React from 'react';
import { adopt } from 'react-adopt'
import { Mutation, Query } from 'react-apollo';
import Counter4View from './Counter4View';

const AMOUNT = 5;
interface IData {
  counter3?: number;
}
const GET_COUNTER = gql`
  {
    counter3 @client
  }
`;

const INCREMENT_COUNTER = gql`
  mutation IncrementCounter3By($amount: Int) {
    incrementCounter3(amount: $amount) @client
  }
`;

const DECREMENT_COUNTER = gql`
  mutation DecrementCounter3By($amount: Int) {
    decrementCounter3(amount: $amount) @client
  }
`;

class Counter4Query extends Query<IData,{}> {};

const mapper = {
  counter3: ({ render }: any) => (
    <Counter4Query query={GET_COUNTER}>
      {(data) => render(data)}
    </Counter4Query>
  ),
  decrementCounter: ({ render }: any) => (
    <Mutation mutation={DECREMENT_COUNTER} variables={{amount: AMOUNT}}>
      {(mutation, result) => render({ mutation, result })}
    </Mutation>
  ),
  incrementCounter: ({ render }: any) => (
    <Mutation mutation={INCREMENT_COUNTER} variables={{amount: AMOUNT}}>
      {(mutation, result) => render({ mutation, result })}
    </Mutation>
  ),
}

const mapProps = ({ counter3, decrementCounter, incrementCounter}: any) => ({
  data: counter3.data,
  decrementCounter: decrementCounter.mutation,
  incrementCounter: incrementCounter.mutation,
})

const Counter4Container = adopt(mapper, mapProps);

const Counter4 = () => (
  <Counter4Container>
    {({ data: { counter3 = 0 } = {}, decrementCounter, incrementCounter }: any) => {
      return (
        <Counter4View
          counter={counter3}
          decrementCounter={decrementCounter}
          incrementCounter={incrementCounter}
        />
      );
    }}
  </Counter4Container>
);

export default Counter4;
