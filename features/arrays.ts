const carMakers = ['ford', 'toyota', 'chevy'];
const dates: Date[] = [new Date(), new Date()];
const carsByMake: string[][] = [['f150'], ['corola'], ['camaro']];

// help with inference when extracting values
const carCompany = carMakers[0];
carMakers.map((car): string => {
  return car.toLocaleUpperCase();
});

// flexible annotations
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2022-10-10');
