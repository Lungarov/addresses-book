export class Address {
  constructor(
    public name: string,
    public address: {
      zip: string;
      country: string;
    }
  ) {}
}
