import React from "react";
import styled from "../../typed-components";
import { getRide } from "../../types/api";

const Container = styled.div``;

interface IProps {
  data?: getRide;
}

const RidePresenter: React.SFC<IProps> = () => <Container>Ride</Container>;

export default RidePresenter;
