import { gql } from "apollo-boost";

export const GET_RIDE = gql`
  query getRide($rideId: Int!) {
    GetRide(rideId: $rideId) {
      ok
      error
      ride {
        status
        pickUpAddress
        dropOffAddress
        price
        distance
        duration
        driver {
          fullName
          profilePhoto
        }
        passenger {
          fullName
          profilePhoto
        }
        chatId
      }
    }
  }
`;
