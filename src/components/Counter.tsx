import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';

interface IData {
  counter?: number;
}

const CounterView = ({ counter }: IData) => (
  counter !== undefined ? <div>{counter}</div> : <div>ERROR</div>
);

const GET_COUNTER = gql`
  {
    counter @client
  }
`;

class CounterQuery extends Query<IData,{}> {};

const Counter = () => (
  <CounterQuery query={GET_COUNTER}>
    {({ data }) => <CounterView {...data} />}
  </CounterQuery>
);

export default Counter;
