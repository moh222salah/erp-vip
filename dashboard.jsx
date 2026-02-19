import React from 'react';
import { FiActivity, FiCheckCircle, FiClock, FiFileText } from 'react-icons/fi';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// بيانات تجريبية تحاكي ما يتم استقباله من ERPNext Webhook
const data = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
];

const NordicClientDashboard = ({ projectStatus, invoiceData }) => {
  return (
    <div className="p-6 bg-[#F9FAFB] min-h-screen font-sans">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-900">Welcome back, Nordic Partner</h1>
        <span className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium shadow-sm flex items-center gap-2">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Live Sync Active
        </span>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Active Projects" value="12" icon={<FiActivity className="text-blue-600" />} />
        <StatCard title="Pending Invoices" value="3,400$" icon={<FiClock className="text-amber-500" />} />
        <StatCard title="Completed Milestones" value="85%" icon={<FiCheckCircle className="text-emerald-500" />} />
      </div>

      {/* Main Content: Chart & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Analytics Chart */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-4">Engagement Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#0F172A" strokeWidth={3} dot={{ r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Webhook Events (Timeline) */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-lg font-semibold mb-4 text-slate-900">Recent ERP Updates</h3>
          <div className="space-y-6">
            <ActivityItem title="Invoice #INV-2026-001" desc="Status updated to 'Paid'" time="2 mins ago" />
            <ActivityItem title="Marketing Project" desc="Milestone 'Market Analysis' reached" time="1 hour ago" />
            <ActivityItem title="Subscription" desc="Renewed for Nordic Enterprise" time="5 hours ago" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between transition-transform hover:scale-[1.02] cursor-default">
    <div>
      <p className="text-sm text-slate-500 font-medium">{title}</p>
      <h2 className="text-3xl font-bold text-slate-900 mt-1">{value}</h2>
    </div>
    <div className="p-3 bg-slate-50 rounded-xl">{icon}</div>
  </div>
);

const ActivityItem = ({ title, desc, time }) => (
  <div className="flex gap-4">
    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center flex-shrink-0">
      <FiFileText className="text-slate-600" />
    </div>
    <div>
      <h4 className="text-sm font-semibold text-slate-900">{title}</h4>
      <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
      <span className="text-[10px] text-slate-400 mt-1 block uppercase tracking-wider">{time}</span>
    </div>
  </div>
);

export default NordicClientDashboard;

