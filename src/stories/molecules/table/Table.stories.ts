import type { Meta, StoryObj } from "@storybook/react";
import DataTable from "./Table";

const meta = {
  title: "Example/Table",
  component: DataTable,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {
  },
} satisfies Meta<typeof DataTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    data: [
      {
        id: 1,
        availabilityStatus: "Snow",
        discountPercentage: "Jon",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
        age: 35,
      },
      {
        id: 2,
        availabilityStatus: "Lannister",
        discountPercentage: "Cersei",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
        age: 42,
      },
      {
        id: 3,
        availabilityStatus: "Lannister",
        discountPercentage: "Jaime",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
        age: 45,
      },
      {
        id: 4,
        availabilityStatus: "Stark",
        discountPercentage: "Arya",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
        age: 16,
      },
      {
        id: 5,
        availabilityStatus: "Targaryen",
        discountPercentage: "Daenerys",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
        age: null,
      },
      {
        id: 6,
        availabilityStatus: "Melisandre",
        discountPercentage: null,
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
      },
      {
        id: 7,
        availabilityStatus: "Clifford",
        discountPercentage: "Ferrara",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
      },
      {
        id: 8,
        availabilityStatus: "Frances",
        discountPercentage: "Rossini",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
      },
      {
        id: 9,
        availabilityStatus: "Roxie",
        discountPercentage: "Harvey",
        brand: "Adidas",
        category: "Alpha",
        createdAt: "2/2/22",
      },
    ],
    paginationData: {
      page: 1,
      size: 5,
      pageOptions: [5, 10, 20, 50, 100],
      totalCount: 5,
      onChangeRowsPerPage: () => {},
    },
  },
};
