const { StatusCodes } = require('http-status-codes');

module.exports = {
  create: async (_, response) => {
    response.sendStatus(StatusCodes.UNAUTHORIZED);
  },
};
