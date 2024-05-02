export class BadRequest extends Error {
    private type = 'BadRequest';
    private statusCode = 400;

    constructor(message: string) {
        super(message);
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

export class NotFound extends Error {
    private type = 'NotFound';
    private statusCode = 404;

    constructor(message: string) {
        super(message);
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

export class InternalError extends Error {
    private type = 'InternalError';
    private statusCode = 500;

    constructor(message: string) {
        super(message);
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

export class Unauthorized extends Error {
    private type = 'Unauthorized';
    private statusCode = 401;

    constructor(message: string) {
        super(message);
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

export default { BadRequest, NotFound, InternalError, Unauthorized };
