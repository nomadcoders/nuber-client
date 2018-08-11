import React from "react";
import { RouteComponentProps } from "react-router-dom";
import AddPlacePresenter from "./AddPlacePresenter";

interface IState {
  address: string;
  name: string;
}

interface IProps extends RouteComponentProps<any> {}

class AddPlaceContainer extends React.Component<IProps, IState> {
  public state = {
    address: "",
    name: ""
  };
  public render() {
    const { address, name } = this.state;
    return (
      <AddPlacePresenter
        onInputChange={this.onInputChange}
        address={address}
        name={name}
      />
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement
  > = async event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}

export default AddPlaceContainer;
