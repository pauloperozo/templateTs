import { BadRequest, InternalError, Unauthorized } from './errorstype';
import { Response } from 'express';

export function SendSuccess(res: Response, json: object) {
  res.status(200).json(json);
}

export function SendError(res: Response, error: unknown | Error) {
  const isError = (error: any) => ('message' in error ? error.message : '');
  const message = isError(error);
  console.error(error);

  switch (true) {
    case error instanceof BadRequest:
      res.status(400).json({ message });
      break;

    case error instanceof InternalError:
      res.status(500).json({ message });
      break;

    case error instanceof Unauthorized:
      res.status(401).json({ message });
      break;

    default:
      res.status(503).json({ message: 'Internal Error' });
      break;
  }
}
