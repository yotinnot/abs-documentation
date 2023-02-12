const storesSidebar = [
  { text: "Introduction", link: "/stores/" },
  { text: "Spares", link: "/stores/spares" },
  { text: "Tires", link: "/stores/tires" },
  { text: "Tools", link: "/stores/tools" },
  { text: "Consumables", link: "/stores/consumables" },
  { text: "Scraps", link: "/stores/scraps" },
];

export default {
  lang: "en-US",
  title: "ABS-Intranet",
  themeConfig: {
    nav: [
      {
        text: "Modules",
        link: "/modules/",
      },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [
          { text: "Disclaimer", link: "/disclaimer/" },
          {
            text: "Concepts",
            items: [
              {
                text: "Searching and Filtering",
                link: "/concepts/search-filter/",
              },
              {
                text: "Advanced Search Options",
                link: "/concepts/advanced-search-options/",
              },
              {
                text: "Identification Numbers",
                link: "/concepts/ids/",
              },
            ],
          },
        ],
      },
      {
        text: "Modules",
        items: [
          { text: "Introduction", link: "/modules/" },
          { text: "Maintenance", link: "/mmc/" },
          { text: "Quality", link: "/quality/" },
          { text: "Marketing", link: "/marketing/" },
          { text: "Logistics", link: "/logistics/" },
          {
            text: "Stores",
            items: [
              { text: "Introduction", link: "/stores/" },
              { text: "Spares", link: "/stores/modules/spares" },
              { text: "Consumables", link: "/stores/modules/consumables" },
              { text: "Tools", link: "/stores/modules/tools" },
            ],
          },
        ],
      },
      {
        text: "Changelog",
        link: "https://github.com/yotinnot/abs-documentation/commits/main",
      },
    ],
    editLink: {
      pattern:
        "https://github.com/yotinnot/abs-documentation/edit/main/docs/:path",
    },
    socialLinks: [
      // {
      //   icon: "github",
      //   link: "https://github.com/yotinnot/abs-documentation",
      // },
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/company/airborne-support",
      },
    ],
    outline: "deep",
  },
  cleanUrls: true,
  lastUpdated: true,
};
