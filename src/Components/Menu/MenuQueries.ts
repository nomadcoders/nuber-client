import { gql } from "apollo-boost";

export const TOGGLE_DRIVING = gql`
  mutation toggleDriving {
    ToggleDrivingMode {
      ok
      error
    }
  }
`;
