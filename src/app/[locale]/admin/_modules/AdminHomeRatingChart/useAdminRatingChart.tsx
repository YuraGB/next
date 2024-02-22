import { useGetRates } from "@admin/_modules/AdminHomeRatingChart/api/useGetRates";
import { useMemo } from "react";
import { type ChartData } from "chart.js";

type TUseAdminRatingChart = {
  ratingsError: Error | null;
  isLoading: boolean;
  chartData: ChartData<"doughnut", number[], string>;
};

export const useAdminRatingChart = (): TUseAdminRatingChart => {
  const { data: allRatings, error: ratingsError, isLoading } = useGetRates();

  const chartData = useMemo(() => {
    if (allRatings?.length) {
      const dataRate = allRatings.map((rate) => Math.round(rate.rating / rate.count));
      return {
        labels: dataRate.map((rate) => `${rate} rate`),
        datasets: [
          {
            label: "Rate",
            data: dataRate,
            backgroundColor: [
              "rgba(255, 99, 132, 0.7)",
              "rgba(54, 162, 235, 0.7)",
              "rgba(255, 206, 86, 0.7)",
              "rgba(75, 192, 192, 0.7)",
              "rgba(153, 102, 255, 0.7)",
              "rgba(255, 159, 64, 0.7)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };
    }

    return {
      labels: ["Five rate", "Four rate", "Three rate", "Two rate", "One rate"],
      datasets: [
        {
          label: "Rate",
          data: [],
          backgroundColor: [
            "rgba(255, 99, 132, 0.7)",
            "rgba(54, 162, 235, 0.7)",
            "rgba(255, 206, 86, 0.7)",
            "rgba(75, 192, 192, 0.7)",
            "rgba(153, 102, 255, 0.7)",
            "rgba(255, 159, 64, 0.7)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };
  }, [allRatings]);

  return {
    ratingsError,
    isLoading,
    chartData,
  };
};
