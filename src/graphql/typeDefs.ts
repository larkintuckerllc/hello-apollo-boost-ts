export default `
  type Query {
    counter: Int
  }
  type Mutation {
    decrementCounter(): Int
    incrementCounter(): Int
  } 
`;
