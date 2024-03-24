export class BadRequest extends Error {
  private statusCode = 400;
  constructor(message: string) {
    super(message);
  }
}

export class InternalError extends Error {
  private statusCode = 500;
  constructor(message: string) {
    super(message);
  }
}

export class Unauthorized extends Error {
  private statusCode = 401;
  constructor(message: string) {
    super(message);
  }
}
