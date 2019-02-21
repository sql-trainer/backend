export default class HelpError extends Error {
  status: number;
  error: {
    type: string;
    message: string;
  };
  constructor(
    params: { status?: number; error?: { type?: string; message?: string } } = {
      status: 500,
      error: {
        type: "UNEXPECTED",
        message: "Возникла непредвиденная ошибка"
      }
    }
  ) {
    super(params.error.message);
    this.status = params.status;
    this.error = {
      type: params.error.type,
      message: params.error.message
    };
  }
}
