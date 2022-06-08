const drink = {
  color: 'brown',
  carbonated: true,
  sugarContent: 40,
};

// represent drink in tuple format
const pepsi: [string, boolean, number] = ['brown', true, 40];
// alternate way using type aliasing

type Drink = [string, boolean, number];
const coke: Drink = ['black', true, 60];
const tea: Drink = ['brown', false, 5];
