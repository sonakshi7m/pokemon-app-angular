export enum TypesColors {
    fire = 'Maroon',
    grass = 'LimeGreen',
    ice = 'Turquoise',
    poison = 'Lavender',
    flying = 'MediumBlue',
    bug = 'Coral',
    ghost = 'Chocolate',
    dragon = 'DarkKhaki',
    fairy = 'RosyBrown',
    normal = 'Olive ',
    water = 'Aqua',
    fighting = 'LightSalmon',
    electric = 'Gold',
    ground = 'DarkOrange',
    psychic = 'PaleVioletRed',
    rock = 'Gray',
    dark = 'Silver',
    steel = 'LightSlateGray'
}

export const TypesDamage = {
    fire: ['Bug', 'Steel', 'Fire', 'Grass', 'Ice', 'Fairy', 'Ground', 'Rock', 'Water'],
    grass: ['Water', 'Grass', 'Electric', 'Flying', 'Poison', 'Bug', 'Fire', 'Ice'],
    ice: ['Ice', 'Fighting', 'Rock', 'Steel', 'Fire'],
    poison: ['Fighting', 'Poison', 'Bug', 'Grass', 'Fairy', 'Ground', 'Psychic'],
    flying: ['Ground', 'Fighting', 'Bug', 'Grass', 'Rock', 'Electric', 'Ice'],
    bug: ['Fighting', 'Ground', 'Grass', 'Flying', 'Rock', 'Fire'],
    ghost: ['Normal', 'Fighting', 'Poison', 'Bug', 'Ghost', 'Dark'],
    dragon: ['Fire', 'Water', 'Grass', 'Electric', 'Ice', 'Dragon', 'Fairy'],
    fairy: ['Fighting', 'Bug', 'Dark', 'Poison', 'Ghost', 'Dragon'],
    normal: ['Ghost', 'Fighting'],
    water: ['Steel', 'Fire', 'Water', 'Ice', 'Grass', 'Electric'],
    fighting: ['Rock', 'Bug', 'Dark', 'Flying', 'Psychic', 'Fairy'],
    electric: ['Flying', 'Steel', 'Electric', 'Ground'],
    ground: ['Poison', 'Rock', 'Water', 'Grass', 'Ice'],
    psychic: ['Fighting', 'Psychic', 'Bug', 'Ghost', 'Dark'],
    rock: ['Poison', 'Rock', 'Water', 'Grass', 'Ice'],
    dark: ['Ghost', 'Psychic', 'Dark', 'Fighting', 'Bug', 'Fairy'],
    steel: ['Normal', 'Flying', 'Poison', 'Rock', 'Bug', 'Steel', 'Grass', 'Psychic', 'Ice', 'Dragon', 'Fairy', 'Fighting', 'Fire', 'Poison']
};