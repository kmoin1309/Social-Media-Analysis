'use client';
import React from "react";
import { Card } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { ArrowRight } from "lucide-react";

const MetricsDashboard = () => {
  // Sample data for the charts
  const generateChartData = (baseValue = 50) => {
    return Array.from({ length: 30 }, (_, i) => ({
      date: i,
      value: baseValue + Math.sin(i / 5) * 10 + i / 2,
    }));
  };

  const metrics = [
    {
      title: "Engagement Rate",
      data: generateChartData(40),
      increase: "+24%",
      period: "Last 30 days",
      stat: "4.8% avg",
      color: "#8B5CF6",
    },
    {
      title: "Follower Growth",
      data: generateChartData(45),
      increase: "+12%",
      period: "Last 30 days",
      stat: "+2.4k new",
      color: "#8B5CF6",
    },
    {
      title: "Reach",
      data: generateChartData(55),
      increase: "+18%",
      period: "Last 30 days",
      stat: "85.2k reach",
      color: "#8B5CF6",
    },
    {
      title: "Post Performance",
      data: generateChartData(50),
      increase: "+15%",
      period: "Last 30 days",
      stat: "92% improved",
      color: "#8B5CF6",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Metrics That Matter</h2>
          <p className="text-gray-600">
            Track the most important Instagram metrics to grow your audience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="p-6 bg-white"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-semibold text-lg">{metric.title}</h3>
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-sm">
                  {metric.increase}
                </span>
              </div>

              <div className="h-32 w-full">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <AreaChart data={metric.data}>
                    <defs>
                      <linearGradient
                        id={`gradient-${index}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={metric.color}
                          stopOpacity={0.2}
                        />
                        <stop
                          offset="100%"
                          stopColor={metric.color}
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={metric.color}
                      fill={`url(#gradient-${index})`}
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-500 text-sm">{metric.period}</span>
                <span className="text-violet-600 font-medium">
                  {metric.stat}
                </span>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center text-violet-600 hover:text-violet-700 font-medium">
            View Detailed Analytics
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default MetricsDashboard;
