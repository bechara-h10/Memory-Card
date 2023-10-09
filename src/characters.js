import alexanderTheGreat from "./assets/images/characters/alexander-the-great.jpg";
import becharaKhoury from "./assets/images/characters/bechara-khoury.jpg";
import benjaminFranklin from "./assets/images/characters/benjamin-franklin.jpg";
import georgesWashington from "./assets/images/characters/georges-washington.jpg";
import hannibalBarca from "./assets/images/characters/hannibal-barca.jpg";
import henryVII from "./assets/images/characters/henry-viii.jpg";
import isaacNewton from "./assets/images/characters/isaac-newton.jpg";
import juliusCaesar from "./assets/images/characters/julius-caesar.jpg";
import louisXVI from "./assets/images/characters/louis-xvi.jpg";
import maximillienRobespierre from "./assets/images/characters/maximillien-robespierre.jpg";
import napoleonBonaparte from "./assets/images/characters/napoleon-bonaparte.jpg";
import philippePetain from "./assets/images/characters/philippe-petain.jpg";
import { v4 as uuidv4 } from "uuid";

const characters = [
  { id: uuidv4(), name: "Alexander the Great", image: alexanderTheGreat },
  { id: uuidv4(), name: "Bechara Khoury", image: becharaKhoury },
  { id: uuidv4(), name: "Benjamin Franklin", image: benjaminFranklin },
  { id: uuidv4(), name: "Georges Washington", image: georgesWashington },
  { id: uuidv4(), name: "Hannibal Barca", image: hannibalBarca },
  { id: uuidv4(), name: "King Henry VIII", image: henryVII },
  { id: uuidv4(), name: "Isaac Newton", image: isaacNewton },
  { id: uuidv4(), name: "Julius Caesar", image: juliusCaesar },
  { id: uuidv4(), name: "King Louis XVI", image: louisXVI },
  {
    id: uuidv4(),
    name: "Maximillien Robespierre",
    image: maximillienRobespierre,
  },
  { id: uuidv4(), name: "Napoleon Bonaparte", image: napoleonBonaparte },
  { id: uuidv4(), name: "Philippe Petain", image: philippePetain },
];

export default characters;
