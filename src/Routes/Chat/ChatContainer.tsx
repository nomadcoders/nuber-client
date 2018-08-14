import React from "react";
import { RouteComponentProps } from "react-router-dom";
import ChatPresenter from "./ChatPresenter";

interface IProps extends RouteComponentProps<any> {}

class ChatContainer extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    if (!props.match.params.chatId) {
      props.history.push("/");
    }
  }
  public render() {
    return <ChatPresenter />;
  }
}

export default ChatContainer;
