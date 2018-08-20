import { ApolloError } from 'apollo-client';
import gql from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import Todo2 from './Todo2';

interface ITodo {
  id: string;
  title: string;
}

interface IData {
  allTodos?: ITodo[];
}

interface ITodos2ViewProps {
  allTodos?: ITodo[];
  error?: ApolloError;
  loading: boolean;
}

const Todos2View = ({ allTodos = [], error, loading }: ITodos2ViewProps) => {
  if (loading) {
    return <div>LOADING</div>
  };
  if (error !== undefined) {
    return <div>ERROR</div>
  };
  return (
    <div>
      {allTodos.map((todo: ITodo) => (
        <Todo2
          key={todo.id}
          title={todo.title}
        />
      ))}
    </div>
  );
};

const GET_TODOS = gql`
  query {
    allTodos {
      id
      title
    }
  }
`;

class Todos2Query extends Query<IData, {}> {}

const Todos2 =  () => (
  <Todos2Query query={GET_TODOS}>
    {({ data = { allTodos: [] }, error, loading }) => (
      <Todos2View
        allTodos={data.allTodos}
        error={error}
        loading={loading}
      />
   )}
  </Todos2Query>
);

export default Todos2;