export const WINE_API_ENDPOINT = "https://api.sampleapis.com/wines/"
export const BEER_API_ENDPOINT = "https://api.sampleapis.com/beers/"

export const MEDIA_QUERY_END_POINT = {
  MOBILE: "640px",
  TABLET: "1280px",
  DESKTOP: "1920px",
  LARGE: "2560px",
}

export const ROUTES = [
  {
    ID: 0,
    PATH: "/beers",
    LABEL: "맥주🍺",
    ENGLISH: "Beer",
    ORDER: 0,
    SUBS: [
      {
        ID: 0,
        PATH: "/ale",
        LABEL: "에일",
        ORDER: 0,
      },
      {
        ID: 1,
        PATH: "/stouts",
        LABEL: "스터트",
        ORDER: 1,
      },
      {
        ID: 2,
        PATH: "/red-ale",
        LABEL: "레드에일",
        ORDER: 2,
      },
    ],
  },
  {
    ID: 0,
    PATH: "/wines",
    LABEL: "와인🍷",
    ENGLISH: "Wine",
    ORDER: 0,
    SUBS: [
      {
        ID: 0,
        PATH: "/dessert",
        LABEL: "디저트",
        ORDER: 0,
      },
      {
        ID: 1,
        PATH: "/port",
        LABEL: "포드",
        ORDER: 1,
      },
      {
        ID: 2,
        PATH: "/reds",
        LABEL: "레드",
        ORDER: 2,
      },
      {
        ID: 3,
        PATH: "/rose",
        LABEL: "로제",
        ORDER: 3,
      },
      {
        ID: 4,
        PATH: "/sparkling",
        LABEL: "스파클링",
        ORDER: 4,
      },
      {
        ID: 5,
        PATH: "/whites",
        LABEL: "화이트",
        ORDER: 5,
      },
    ],
  },
]

// export const ROUTES = {
//   BEERS : {
//     MAIN : {
//       ID : 0,
//       PATH : '/beers',
//       LABEL: '맥주',
//       ORDER : 0},
//     SUBS : [
//       {
//         ID : 0,
//         PATH : '/ale',
//         LABEL : '에일',
//         ORDER : 0,
//       }
//     ]
//   },
//   WINES : {

//   }

// }
