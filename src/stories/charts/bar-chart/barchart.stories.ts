import type { Meta, StoryObj } from "@storybook/react";
import { Data } from "../../../utils/data";
import { BarChart } from "./BarChart";

const meta = {
  title: "Example/Bar Chart",
  component: BarChart,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
  },
  args: {},
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    chartData: {
      labels: Data.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained ",
          data: Data.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "&quot;#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    },
    handleFullScreenChart: (action: any) => {
      console.log("action");
    },
  },
};
