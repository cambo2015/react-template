export const flats = ["F", "Bb", "Eb", "Ab", "Db", "Gb"];
export const sharps = ["B", "E", "A", "D", "G"];
export const keys = ["C", ...flats, ...sharps];

export const keyParse = (index) => {
  switch (index) {
    case 0:
      return "0 sharps";
    case 1:
      return "1 flat";
    case 2:
      return "2 flats";
    case 3:
      return "3 flats";
    case 4:
      return "4 flats";
    case 5:
      return "5 flats";
    case 6:
      return "6 flats";
    case 7:
      return "5 sharps";
    case 8:
      return "4 sharps";
    case 9:
      return "3 sharps";
    case 10:
      return "2 sharps";
    case 11:
      return "1 sharp";
    default:
      return "0 sharps";
  }
};
