const allergens = [
  'eggs', 'peanuts', 'shellfish', 'strawberries',
  'tomatoes', 'chocolate', 'pollen', 'cats',
];

class Allergies {
  constructor(code) {
    this.code = code;
    this.allergicTo = allergen => (
      this.code & (1 << allergens.indexOf(allergen))
    ) > 0;
    this.list = () => allergens.filter(this.allergicTo);
  }
}


export default Allergies;
