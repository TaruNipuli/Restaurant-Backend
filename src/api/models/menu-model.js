// mock data for testing

// Menus
export const menus = [
  {
    id: 1,
    name: 'Metsämenu',
    description: 'Metsämenu tuo pöytääsi metsien parhaat herkut: puhtaat maut, luonnon aromit ja sesongin raaka-aineet.',
  },
  {
    id: 2,
    name: 'Merituuli',
    description: 'Merituuli-menu tarjoaa tuoreita meren antimia ja raikkaita makuja rannikolta.',
  },
  {
    id: 3,
    name: 'Kasvitarhan aarteet',
    description: 'Täysin kasvispohjainen menu täynnä värikkäitä ja maukkaita vihanneksia.',
  },
];

// Dishes
export const dishes = [
  {
    id: 1,
    menu_id: 1,
    dish_name: "Suppilovahverokeitto",
    type: "Alkupala",
    description: "Samettinen suppilovahverokeitto kermatilkalla.",
    price: 11
  },
  {
    id: 2,
    menu_id: 1,
    dish_name: "Poronkäristys ja muusi",
    type: "Pääruoka",
    description: "Perinteinen poronkäristys puolukoilla ja perunamuusilla.",
    price: 22
  },
  {
    id: 3,
    menu_id: 2,
    dish_name: "Paistetut kampasimpukat",
    type: "Alkupala",
    description: "Kampasimpukat sitruunaisessa voikastikkeessa.",
    price: 14
  },
  {
    id: 4,
    menu_id: 2,
    dish_name: "Grillattu lohi",
    type: "Pääruoka",
    description: "Mehevä lohifilee kauden kasviksilla.",
    price: 20
  },
  {
    id: 5,
    menu_id: 3,
    dish_name: "Paahdettu kukkakaalikeitto",
    type: "Alkupala",
    description: "Täyteläinen kukkakaalikeitto paahdetuilla manteleilla.",
    price: 10
  },
  {
    id: 6,
    menu_id: 3,
    dish_name: "Papu-kasvispata",
    type: "Pääruoka",
    description: "Lämmin ja mausteinen pata pavuista ja vihanneksista.",
    price: 17
  }
];

// Allergens
export const allergens = [
  { id: 1, name: "Gluteeni" },
  { id: 2, name: "Laktoosi" },
  { id: 3, name: "Kala" },
  { id: 4, name: "Pähkinä" }
];

// Dish_Allergen
export const dish_allergen = [
  { dish_id: 1, allergen_id: 2 },
  { dish_id: 2, allergen_id: 2 },
  { dish_id: 3, allergen_id: 2 },
  { dish_id: 4, allergen_id: 3 },
  { dish_id: 5, allergen_id: 4 },
  { dish_id: 6, allergen_id: 1 }
];
