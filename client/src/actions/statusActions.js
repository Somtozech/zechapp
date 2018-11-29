import { RECONNECT, RECONNECT_ERROR, RECONNECTING, DISCONNECT } from "./types";
import {
  handleReconnect,
  handleReconnectError,
  handleReconnecting,
  handleSetUser,
  handleUserDisconnect
} from "../socket";

const setReconnect = () => ({
  type: RECONNECT,
  payload: "connected"
});

const setReconnecting = attempt => ({
  type: RECONNECTING,
  payload: "Reconnecting"
});

const setReconnectError = () => ({
  type: RECONNECT_ERROR,
  payload: "Reconnection failed"
});

const setDisconnect = () => ({
  type: DISCONNECT,
  payload: "Disconnected"
});

export const UserReconnect = () => (dispatch, getState) => {
  handleReconnect(() => {
    const { user } = getState();
    /**
     * After the socket disconnect and successfully reconnects the
     *  socket.user becomes undefined.
     * @func handleSetUser sends the user to the server to set the
     * socket.user.
     */
    handleSetUser(user);
    dispatch(setReconnect());
  });
};

export const UserReconnecting = () => dispatch => {
  handleReconnecting(() => {
    dispatch(setReconnecting());
  });
};

export const UserReconnectError = () => dispatch => {
  handleReconnectError(() => {
    dispatch(setReconnectError());
  });
};

export const UserDisconnect = () => dispatch => {
  handleUserDisconnect(() => {
    dispatch(setDisconnect());
  });
};
