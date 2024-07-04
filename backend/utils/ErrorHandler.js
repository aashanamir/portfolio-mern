export class ErrorHandler extends Error {
  constructor(msg , code){
    super(msg);

    this.statusCode = code;
  }
}