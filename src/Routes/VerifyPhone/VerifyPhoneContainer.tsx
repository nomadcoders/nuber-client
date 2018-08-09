import React from "react";
import { RouteComponentProps } from "react-router-dom";
import VerifyPhonePresenter from "./VerifyPhonePresenter";

interface IProps extends RouteComponentProps<any> {}

class VerifyPhoneContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    if (!props.location.state) {
      props.history.push("/");
    }
  }
  public render() {
    return <VerifyPhonePresenter />;
  }
}

export default VerifyPhoneContainer;
