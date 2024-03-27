export const dataPatrimony = (search: string) => [
  {
    label: "Résidence",
    childs: [
      { label: "Résidence des Cézeaux", value: "12",metadata: { code: "63000" } },
      { label: "Résidence du Parc", value: "8", metadata: { code: "63100" } },
      { label: "Résidence Bellevue", value: "15", metadata: { code: "63200" } }
    ]
  },
  {
    label: "Adresse",
    childs: [
      { label: `${search} 12 Rue de la Liberté Cézeaux`, value: "1", metadata: { code: "69002" } },
      { label: `${search} 8 Avenue de la République Bellevue`, value: "2", metadata: { code: "13008" } },
      { label: `${search} 15 Rue Victor Hugo`, value: "3", metadata: { code: "75016" } }
    ]
  }
]

export interface ChildPatrimony {
  label: string;
  value: string;
  metadata: {
    code: string;
  };
}

export interface Patrimony {
  label: string;
  childs: ChildPatrimony[];
}
