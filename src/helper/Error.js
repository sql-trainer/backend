export default class HelpError extends Error {
  constructor(params) {
    super(params.error.message);
    this.status = params.status;
    this.error = {
      type: params.error.type,
      message: params.error.message
    };
  }
}
