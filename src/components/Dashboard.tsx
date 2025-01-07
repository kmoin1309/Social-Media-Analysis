'use client';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Bar } from 'recharts';

const MetricCard = ({ title, value, change, changeType = 'positive', color = 'text-blue-500' }) => (
  <Card className="bg-zinc-900">
    <CardContent className="pt-6">
      <div className="flex flex-col gap-1">
        <p className="text-sm text-zinc-400">{title}</p>
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-semibold text-white">{value}</h3>
          <span className={`text-sm ${changeType === 'positive' ? 'text-green-500' : 'text-red-500'}`}>
            {changeType === 'positive' ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        </div>
      </div>
    </CardContent>
  </Card>
);

const EngagementBreakdown = ({ data }) => (
  <Card className="bg-zinc-900">
    <CardHeader>
      <CardTitle className="text-lg text-white">Engagement Breakdown</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">{key}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-white">{value}</span>
              <div className="w-32 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${
                    key === 'Likes' ? 'bg-pink-500' :
                    key === 'Comments' ? 'bg-blue-500' :
                    key === 'Saves' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}
                  style={{ width: `${(value / Math.max(...Object.values(data))) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

const AudienceDemographics = () => {
  const genderData = [
    { name: 'Male', value: 47 },
    { name: 'Female', value: 54 }
  ];

  const ageData = [
    { group: '18-24', value: 26 },
    { group: '25-34', value: 26 },
    { group: '35-44', value: 22 }
  ];

  return (
    <Card className="bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-lg text-white">Audience Demographics</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h4 className="text-sm text-zinc-400 mb-2">Gender Distribution</h4>
            <BarChart width={300} height={60} data={genderData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" domain={[0, 100]} hide />
              <YAxis type="category" dataKey="name" tick={{ fill: '#9CA3AF' }} />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
          <div>
            <h4 className="text-sm text-zinc-400 mb-2">Age Groups</h4>
            <BarChart width={300} height={100} data={ageData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="group" tick={{ fill: '#9CA3AF' }} />
              <YAxis domain={[0, 100]} tick={{ fill: '#9CA3AF' }} />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EngagementOverTime = () => {
  const data = [
    { date: '1', value: 4.2 },
    { date: '2', value: 3.1 },
    { date: '3', value: 4.5 },
    { date: '4', value: 6.2 },
    { date: '5', value: 3.8 },
    { date: '6', value: 5.1 },
    { date: '7', value: 4.3 }
  ];

  return (
    <Card className="bg-zinc-900">
      <CardHeader>
        <CardTitle className="text-lg text-white">Engagement Rate Over Time</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <LineChart width={600} height={200} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: '#9CA3AF' }} />
            <YAxis tick={{ fill: '#9CA3AF' }} />
            <Line type="monotone" dataKey="value" stroke="#8884d8" />
          </LineChart>
        </div>
      </CardContent>
    </Card>
  );
};

const AnalyticsDashboard = () => {
  const metrics = {
    totalReach: { value: '2,300', change: 12 },
    impressions: { value: '2,488', change: 8 },
    engagementRate: { value: '5.43%', change: 2.1 },
    clickThroughRate: { value: '3.46%', change: -1.2 }
  };

  const engagementData = {
    Likes: 69,
    Comments: 10,
    Saves: 29,
    Shares: 17
  };

  return (
    <div className="min-h-screen bg-black p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Analytics Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <MetricCard title="Total Reach" value={metrics.totalReach.value} change={metrics.totalReach.change} />
        <MetricCard title="Impressions" value={metrics.impressions.value} change={metrics.impressions.change} />
        <MetricCard title="Engagement Rate" value={metrics.engagementRate.value} change={metrics.engagementRate.change} />
        <MetricCard title="Click Through Rate" value={metrics.clickThroughRate.value} change={metrics.clickThroughRate.change} changeType="negative" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <EngagementBreakdown data={engagementData} />
        <AudienceDemographics />
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        <EngagementOverTime />
      </div>
    </div>
  );
};

export default AnalyticsDashboard;