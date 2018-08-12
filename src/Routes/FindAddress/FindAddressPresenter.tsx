import React from "react";
import Helmet from "react-helmet";
import AddressBar from "../../Components/AddressBar";
import Button from "../../Components/Button";
import styled from "../../typed-components";

const Map = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Center = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  z-index: 2;
  font-size: 30px;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ExtendedButton = styled(Button)`
  position: absolute;
  bottom: 50px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 10;
  height: auto;
  width: 80%;
`;

interface IProps {
  mapRef: any;
  address: string;
  onInputBlur: () => void;
  onPickPlace: () => void;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

class FindAddressPresenter extends React.Component<IProps> {
  public render() {
    const {
      mapRef,
      address,
      onInputChange,
      onInputBlur,
      onPickPlace
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>Find Address | Nuber</title>
        </Helmet>
        <AddressBar
          onBlur={onInputBlur}
          onChange={onInputChange}
          name={"address"}
          value={address}
        />
        <ExtendedButton value={"Pick this place"} onClick={onPickPlace} />
        <Center>📍</Center>
        <Map innerRef={mapRef} />
      </div>
    );
  }
}

export default FindAddressPresenter;
