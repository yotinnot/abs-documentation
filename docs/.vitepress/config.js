const storesSidebar = [
  { text: "Introduction", link: "/stores/" },
  { text: "Spares", link: "/stores/spares" },
  { text: "Tires", link: "/stores/tires" },
  { text: "Tools", link: "/stores/tools" },
  { text: "Consumables", link: "/stores/consumables" },
  { text: "Scraps", link: "/stores/scraps" },
];

module.exports = {
  title: "ABS-Intranet",
  themeConfig: {
    nav: [
      { text: "ABS-Intranet", link: "/" },
      {
        text: "Documentation",
        items: [
          { text: "Maintenance", link: "/mmc/" },
          { text: "Quality", link: "/quality/" },
          { text: "Marketing", link: "/marketing/" },
          { text: "Logistics", link: "/logistics/" },
          { text: "Stores", link: "/stores/" },
        ],
      },

      { text: "Contact", link: "/contact/" },
    ],
    sidebar: {
      "/stores/": storesSidebar,
      "/marketing/": [
        { text: "Introduction", link: "/marketing/" },
        { text: "Customers", link: "/marketing/customers" },
        { text: "Quotations", link: "/marketing/quotations" },
      ],
    },
    lastUpdated: "Last Updated",
    repo: "https://github.com/yotinnot/abs-documentation",
    editLinks: true,
    docsDir: "docs",
    docsBranch: "main",

    // sidebar: [
    //   { text: "Introduction", link: "/" },
    //   // { text: "Maintenance", link: "/mmc" },
    //   // { text: "Quality", link: "/quality" },
    //   { text: "Marketing", link: "/marketing/" },
    //   // { text: "Logistics", link: "/logistics" },
    //   { text: "Stores", link: "/stores/" },
    //   // { text: "Finance", link: "/finance" },
    //   // { text: "Human Resource", link: "/hr" },
    // ],
  },
};
