import { faker } from '@faker-js/faker';
import { Mappable } from './CustomMap';

export default class Company implements Mappable {
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.longitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `
    <div>
      <h3>Company: ${this.companyName}</h3>
      <h4>${this.catchPhrase}</h4>
    </div>
    `;
  }
}
