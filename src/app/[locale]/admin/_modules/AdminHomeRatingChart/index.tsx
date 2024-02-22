"use client";
import React, { type ReactNode } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAdminRatingChart } from "@admin/_modules/AdminHomeRatingChart/useAdminRatingChart";
import { FormattedMessage } from "react-intl";

ChartJS.register(ArcElement, Tooltip, Legend);

const AdminHomeRatingChart = (): ReactNode => {
  const { ratingsError, isLoading, chartData } = useAdminRatingChart();

  if (isLoading) return null;
  if (ratingsError) return <div>Error: {ratingsError.message}</div>;

  return (
    <section className={"relative mt-4 flex  max-w-full flex-col justify-center"}>
      <h3 className={"text-center font-bold text-foreground"}>
        <FormattedMessage id={"admin.rating.chart"} defaultMessage={"Rates charts"} />{" "}
      </h3>
      <Doughnut data={chartData} />
    </section>
  );
};

export default AdminHomeRatingChart;
