import React from "react";
import Header from "../../Components/Header";
import Message from "../../Components/Message";
import styled from "../../typed-components";
import { getChat, userProfile } from "../../types/api";

const Container = styled.div``;

interface IProps {
  data?: getChat;
  userData?: userProfile;
  loading: boolean;
}

const ChatPresenter: React.SFC<IProps> = ({
  loading,
  data: { GetChat: { chat = null } = {} } = {},
  userData: { GetMyProfile: { user = null } = {} } = {}
}) => (
  <Container>
    <Header title={"Chat"} />
    {!loading &&
      chat &&
      user && (
        <React.Fragment>
          {chat.messages &&
            chat.messages.map(message => {
              if (message) {
                return (
                  <Message
                    key={message.id}
                    text={message.text}
                    mine={user.id === message.userId}
                  />
                );
              }
              return null;
            })}
        </React.Fragment>
      )}
  </Container>
);

export default ChatPresenter;
