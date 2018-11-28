import { RECONNECT, RECONNECT_ERROR, RECONNECTING } from "./types";
import {
  handleReconnect,
  handleReconnectError,
  handleReconnecting
} from "../socket";

const setReconnect = () => ({
  type: RECONNECT,
  payload: "connected"
});

const setReconnecting = attempt => ({
  type: RECONNECTING,
  payload: `Reconnecting`
});

const setReconnectError = () => ({
  type: RECONNECT_ERROR,
  payload: "Reconnection failed"
});

export const UserReconnect = () => dispatch => {
  handleReconnect(() => {
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
