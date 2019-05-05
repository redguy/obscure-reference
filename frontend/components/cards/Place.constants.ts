import { IPosition } from "../map/usePosition.hook";
import { Experience } from "./Experience.constants";

export interface IPlace {
  duration: number;
  experience: Experience;
  length: number;
  position: IPosition;
  title: string;
  walkDuration: number;
}

export const places: IPlace[] = [{
  title: "Umrlčina, Hanspaulka, Dejvice",
  experience: Experience.JOYFUL,
  position: {
    latitude: 50.11775146484375,
    longitude: 14.3776611328125,
  },
  walkDuration: 35,
  length: 0,
  duration: 25,
}, {
  title: "Papouščí stezka, Troja",
  experience: Experience.GREEN,
  position: {
    latitude: 50.116630859375,
    longitude: 14.40970458984375,
  },
  walkDuration: 15,
  length: 2,
  duration: 27,
}, {
  title: "Bubenečský tunel, Bubeneč",
  experience: Experience.CALM,
  position: {
    latitude: 50.105424804687495,
    longitude: 14.4176513671875,
  },
  walkDuration: 22,
  length: 2,
  duration: 16,
}, {
  title: "Úvoz, Hradčany",
  experience: Experience.GREEN,
  position: {
    latitude: 50.08724609375,
    longitude: 14.39176025390625,
  },
  walkDuration: 20,
  length: 4,
  duration: 5,
}, {
  title: "Markétská, Břevnov",
  experience: Experience.CALM,
  position: {
    latitude: 50.086000976562495,
    longitude: 14.3561279296875,
  },
  walkDuration: 14,
  length: 2,
  duration: 26,
}, {
  title: "ostrov Štvancie, Holešovice",
  experience: Experience.JOYFUL,
  position: {
    latitude: 50.0954638671875,
    longitude: 14.43662109375,
  },
  walkDuration: 16,
  length: 2,
  duration: 48,
}, {
  title: "U Památníku, Žižkov",
  experience: Experience.CALM,
  position: {
    latitude: 50.08861572265625,
    longitude: 14.4509765625,
  },
  walkDuration: 44,
  length: 0,
  duration: 34,
}, {
  title: "Mirovická, Kobylisy",
  experience: Experience.GREEN,
  position: {
    latitude: 50.12908203125,
    longitude: 14.44559326171875,
  },
  walkDuration: 43,
  length: 0,
  duration: 26,
}, {
  title: "Vlašská, Hradčany",
  experience: Experience.CALM,
  position: {
    latitude: 50.085751953125,
    longitude: 14.39329833984375,
  },
  walkDuration: 21,
  length: 0,
  duration: 1,
}, {
  title: "U Havlíčkových sadů, Vinohrady",
  experience: Experience.JOYFUL,
  position: {
    latitude: 50.069814453125,
    longitude: 14.4432861328125,
  },
  walkDuration: 0,
  ength: 0,
  duration: 30,
}, {
  title: "Strašnice",
  experience: Experience.CALM,
  position: {
    latitude: 50.07716064453125,
    longitude: 14.48968505859375,
  },
  walkDuration: 26,
  length: 1,
  duration: 9,
}, {
  title: "K Rotundě, Vyšehrad",
  experience: Experience.GREEN,
  position: {
    latitude: 50.064211425781245,
    longitude: 14.42047119140625,
  },
  walkDuration: 33,
  length: 4,
  duration: 6,
}, {
  title: "Malinová, Spořilov, Záběhlice",
  experience: Experience.JOYFUL,
  position: {
    latitude: 50.0571142578125,
    longitude: 14.501477050781249,
  },
  walkDuration: 49,
  length: 0,
  duration: 45,
}, {
  title: "17, Pod Táborem, Malešice",
  experience: Experience.GREEN,
  position: {
    latitude: 50.089113769531245,
    longitude: 14.5140380859375,
  },
  walkDuration: 31,
  length: 1,
  duration: 2,
}, {
  title: "726, Litoměřická, Prosek",
  experience: Experience.JOYFUL,
  position: {
    latitude: 50.1193701171875,
    longitude: 14.48763427734375,
  },
  walkDuration: 38,
  length: 0,
  duration: 13,
}, {
  title: "U Lesíka, Košíře",
  experience: Experience.GREEN,
  position: {
    latitude: 50.062717285156246,
    longitude: 14.35792236328125,
  },
  walkDuration: 33,
  length: 1,
  duration: 31,
}, {
  title: "Kovanecká, Palmovka, Libeň",
  experience: Experience.JOYFUL,
  position: {
    latitude: 50.1099072265625,
    longitude: 14.49327392578125,
  },
  walkDuration: 4,
  ength: 1,
  duration: 34,
}, {
  title: "Národních hrdinů, Dolní Počernice",
  experience: Experience.GREEN,
  position: {
    latitude: 50.08811767578125,
    longitude: 14.57786865234375,
  },
  walkDuration: 11,
  length: 3,
  duration: 8,
}, {
  title: "Železnobrodská, Kbely",
  experience: Experience.GREEN,
  position: {
    latitude: 50.13319091796875,
    longitude: 14.550183105468749,
  },
  walkDuration: 34,
  length: 2,
  duration: 20,
}, {
  title: "Vysočany",
  experience: Experience.GREEN,
  position: {
    latitude: 50.10716796875,
    longitude: 14.52044677734375,
  },
  walkDuration: 40,
  length: 1,
  duration: 21,
}, {
  title: "Roentgenova, Motol",
  experience: Experience.CALM,
  position: {
    latitude: 50.07442138671875,
    longitude: 14.355615234375,
  },
  walkDuration: 14,
  length: 4,
  duration: 15,
}, {
  title: "Brandejsova, Nebušice",
  experience: Experience.CALM,
  position: {
    latitude: 50.1099072265625,
    longitude: 14.3279296875,
  },
  walkDuration: 41,
  length: 4,
  duration: 44,
}, {
  title: "U Kapličky, Suchdol",
  experience: Experience.GREEN,
  position: {
    latitude: 50.146513671875,
    longitude: 14.37227783203125,
  },
  walkDuration: 16,
  length: 1,
  duration: 46,
}, {
  title: "Chotkova, Malá Strana",
  experience: Experience.GREEN,
  position: {
    latitude: 50.093845214843746,
    longitude: 14.40816650390625,
  },
  walkDuration: 26,
  length: 2,
  duration: 1,
}];
