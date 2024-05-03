interface IErrorCuston {
    getType(): string;
    getStatusCode(): number;
    getContent(): any;
}

export class BadRequest extends Error implements IErrorCuston {
    private type = 'BadRequest';
    private statusCode = 400;
    private content;
    constructor(message: string, content: any = undefined) {
        super(message);
        this.content = content;
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }

    getContent() {
        return this.content;
    }
}

export class NotFound extends Error implements IErrorCuston {
    private type = 'NotFound';
    private statusCode = 404;
    private content;

    constructor(message: string, content: any = undefined) {
        super(message);
        this.content = content;
    }
    getContent() {
        return this.content;
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

export class InternalError extends Error implements IErrorCuston {
    private type = 'InternalError';
    private statusCode = 500;
    private content;

    constructor(message: string, content: any = undefined) {
        super(message);
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

export class Unauthorized extends Error implements IErrorCuston {
    private type = 'Unauthorized';
    private statusCode = 401;
    private content;

    constructor(message: string, content: any = undefined) {
        super(message);
        this.content = content;
    }
    getContent() {
        return this.content;
    }

    getType() {
        return this.type;
    }

    getStatusCode() {
        return this.statusCode;
    }
}

export default { BadRequest, NotFound, InternalError, Unauthorized };
