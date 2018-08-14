import React from "react";
import { MutationFn } from "react-apollo";
import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import styled from "../../typed-components";
import { getRide, userProfile } from "../../types/api";

const Container = styled.div`
  padding: 40px;
`;

const Title = styled.h4`
  font-weight: 800;
  margin-top: 30px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 0;
  }
`;

const Data = styled.span`
  color: ${props => props.theme.blueColor};
`;

const Img = styled.img`
  border-radius: 50%;
  margin-right: 20px;
  max-width: 50px;
  height: 50px;
`;

const Passenger = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Buttons = styled.div`
  margin: 30px 0px;
`;

const ExtendedButton = styled(Button)`
  margin-bottom: 30px;
`;

interface IProps {
  data?: getRide;
  userData?: userProfile;
  loading: boolean;
  updateRideFn: MutationFn;
}

const RidePresenter: React.SFC<IProps> = ({
  data: { GetRide: { ride = null } = {} } = {},
  userData: { GetMyProfile: { user = null } = {} } = {},
  updateRideFn
}) => (
  <Container>
    {ride &&
      user && (
        <React.Fragment>
          <Title>Passenger</Title>
          <Passenger>
            <Img src={ride.passenger.profilePhoto!} />
            <Data>{ride.passenger.fullName!}</Data>
          </Passenger>
          {ride.driver && (
            <React.Fragment>
              <Title>Driver</Title>
              <Passenger>
                <Img src={ride.driver.profilePhoto!} />
                <Data>{ride.driver.fullName!}</Data>
              </Passenger>
            </React.Fragment>
          )}
          <Title>From</Title>
          <Data>{ride.pickUpAddress}</Data>
          <Title>To</Title>
          <Data>{ride.dropOffAddress}</Data>
          <Title>Price</Title>
          <Data>{ride.price}</Data>
          <Title>Distance</Title>
          <Data>{ride.distance}</Data>
          <Title>Duration</Title>
          <Data>{ride.duration}</Data>
          <Title>Status</Title>
          <Data>{ride.status}</Data>
          <Buttons>
            {ride.driver &&
              ride.driver.id === user.id &&
              ride.status === "ACCEPTED" && (
                <ExtendedButton
                  value={"Picked Up"}
                  onClick={() =>
                    updateRideFn({
                      variables: {
                        rideId: ride.id,
                        status: "ONROUTE"
                      }
                    })
                  }
                />
              )}
            {ride.driver &&
              ride.driver.id === user.id &&
              ride.status === "ONROUTE" && (
                <ExtendedButton
                  value={"Finished"}
                  onClick={() =>
                    updateRideFn({
                      variables: {
                        rideId: ride.id,
                        status: "FINISHED"
                      }
                    })
                  }
                />
              )}

            {ride.status !== "REQUESTING" && (
              <Link to={`/chat/${ride.chatId}`}>
                <ExtendedButton value={"Chat"} onClick={null} />
              </Link>
            )}
          </Buttons>
        </React.Fragment>
      )}
  </Container>
);

export default RidePresenter;
