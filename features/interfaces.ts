interface Reportable {
  summary(): string;
}
const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `The vehicle ${this.name} of year ${this.year} is ${this.broken}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `THe drink has a color ${this.color} with carbonation ${this.carbonated} and sugar content ${this.sugar} gms`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
