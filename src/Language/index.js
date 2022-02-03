// bahse language inja handle mishavad
// kafiye shoma az too code ke oonja bishtar tozih dadam
// faghat begid language chiye
// be ezaye har zaban bayad yek language add konid
import { en } from "./En";
import { de } from "./De";
export const HGLang = (l) => {
  switch (l) {
    case "en":
      return en;
    case "de":
      return de;
  }
};
