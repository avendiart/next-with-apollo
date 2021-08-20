import gql from "graphql-tag";

export const CityByNameQuery = gql`
  query CityByName($name: String!) {
    getCityByName(name: $name) {
      id
      name
    }
  }
`;
