import {gql} from '@apollo/client';

export const PASTEBIN_QUERY = gql`
  query PastebinQuery {
    continents {
      title
      description
    }
  }
`;
