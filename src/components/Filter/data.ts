type dataI = {
  fullTitle: string[],
  abbreviatedTitle: string[]
};


export type tabsI = {
  fullTitle: string;
  abbreviatedTitle : string;
  link: string;
};

export const tabsData = (data: dataI) => {
  return [
    {
      fullTitle: data.fullTitle[0],
      abbreviatedTitle: data.abbreviatedTitle[0],
      // link: '/soy-candles',
      link: '/candles',
    },
    {
      fullTitle: data.fullTitle[1],
      abbreviatedTitle: data.abbreviatedTitle[1],
      link: '/coconut-candles',
    },
    {
      fullTitle: data.fullTitle[2],
      abbreviatedTitle: data.abbreviatedTitle[2],
      link: '/palm-candles',
    },
  ];
}


