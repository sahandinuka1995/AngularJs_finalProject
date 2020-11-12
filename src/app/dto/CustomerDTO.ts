export default class CustomerDTO {
  private _customerId: string;
  private _customerName: string;
  private _customerAddress: string;
  private _customerSalary: number;


  constructor(customerId: string, customerName: string, customerAddress: string, customerSalary: number) {
    this._customerId = customerId;
    this._customerName = customerName;
    this._customerAddress = customerAddress;
    this._customerSalary = customerSalary;
  }


  get customerId(): string {
    return this._customerId;
  }

  set customerId(value: string) {
    this._customerId = value;
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string) {
    this._customerName = value;
  }

  get customerAddress(): string {
    return this._customerAddress;
  }

  set customerAddress(value: string) {
    this._customerAddress = value;
  }

  get customerSalary(): number {
    return this._customerSalary;
  }

  set customerSalary(value: number) {
    this._customerSalary = value;
  }
}
