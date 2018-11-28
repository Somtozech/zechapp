import uuidV4 from "uuid/v4";

export const createLogMessage = message => ({
  id: uuidV4(),
  message
});
