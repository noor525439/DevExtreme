import React from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";


const transactionsData = [
  { day: "Mon", value: 200 },
  { day: "Tue", value: 400 },
  { day: "Wed", value: 300 },
  { day: "Thu", value: 500 },
  { day: "Fri", value: 350 },
  { day: "Sat", value: 420 },
  { day: "Sun", value: 380 },
];


const salesOrdersRevenue = [
  { name: "A", sales: 100, orders: 200, revenue: 300 },
  { name: "B", sales: 200, orders: 250, revenue: 350 },
  { name: "C", sales: 150, orders: 300, revenue: 400 },
  { name: "D", sales: 180, orders: 280, revenue: 370 },
  { name: "E", sales: 220, orders: 320, revenue: 420 },
];


const cpuData = [
  { name: "A", value: 20 },
  { name: "B", value: 40 },
  { name: "C", value: 35 },
  { name: "D", value: 50 },
  { name: "E", value: 45 },
];
const memoryData = [
  { name: "A", value: 60 },
  { name: "B", value: 80 },
  { name: "C", value: 75 },
  { name: "D", value: 90 },
  { name: "E", value: 100 },
];

const incomeData = [
  { month: "Jan", register: 100, premium: 200 },
  { month: "Feb", register: 150, premium: 300 },
  { month: "Mar", register: 120, premium: 250 },
  { month: "Apr", register: 180, premium: 320 },
  { month: "May", register: 160, premium: 270 },
  { month: "Jun", register: 200, premium: 310 },
  { month: "Jul", register: 90, premium: 220 },
];


const pieData = [
  { name: "Gross Sales", value: 492, color: "#8b5cf6" },
  { name: "Purchases", value: 87000, color: "#f97316" },
  { name: "Tax Return", value: 882, color: "#22c55e" },
];
const barData = [
  { year: "2014", sales: 52, orders: 22 },
  { year: "2015", sales: 40, orders: 35 },
  { year: "2016", sales: 30, orders: 22 },
  { year: "2017", sales: 45, orders: 50 },
  { year: "2018", sales: 28, orders: 20 },
  { year: "2019", sales: 50, orders: 42 },
];


const expensesData = Array.from({ length: 20 }, (_, i) => ({ name: i, value: Math.random() * 50 }));
const budgetData = Array.from({ length: 20 }, (_, i) => ({ name: i, value: Math.random() * 60 }));
const balanceData = Array.from({ length: 20 }, (_, i) => ({ name: i, value: Math.random() * 40 }));

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen space-y-6">
     <h1 className="text-3xl font-bold text-center">Status Statistics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:col-span-2">
  
          <div className="bg-white p-4 rounded-2xl shadow h-48">
            <h3 className="text-2xl font-bold">Transactions</h3>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">1352</p>
              <span className="text-green-500 text-xl">+1.37%</span>
            </div>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={transactionsData}>
                <Tooltip />
                <Line type="linear" dataKey="value" stroke="#f97316" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

    
          <div className="bg-white p-4 rounded-2xl shadow h-48">
            <h3 className="text-2xl font-bold">Sales Orders Revenue</h3>
            <div className="flex space-x-6 text-ls mt-1 mb-2">
              <span>Sales: <b>563</b></span>
              <span>Orders: <b>720</b></span>
              <span>Revenue: <b>5900</b></span>
            </div>
            <ResponsiveContainer width="100%" height="70%">
              <AreaChart data={salesOrdersRevenue}>
                <Tooltip />
                <Area type="monotone" dataKey="sales" stackId="1" stroke="#0ea5e9" fill="#0ea5e9" />
                <Area type="monotone" dataKey="orders" stackId="1" stroke="#2563eb" fill="#2563eb" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#1e3a8a" fill="#1e3a8a" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

        
          <div className="bg-white p-4 rounded-2xl shadow h-48">
            <h3 className="text-2xl font-bold">Sales Analytics</h3>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">27,632</p>
              <p className="text-blue-500 text-xl">78%</p>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "78%" }}></div>
            </div>
          </div>

  
          <div className="bg-white p-4 rounded-2xl shadow h-48 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-2xl font-bold">CPU</h3>
              <p className="text-xl mb-1">55%</p>
              <div className="h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cpuData}>
                    <Tooltip />
                    <Bar dataKey="value" fill="#ef4444" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold">Memory</h3>
              <p className="text-xl mb-1">123,65</p>
              <div className="h-20">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={memoryData}>
                    <Tooltip />
                    <Bar dataKey="value" fill="#06b6d4" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow lg:row-span-2 h-[400px]">
          <h2 className="text-2xl font-bold mb-2">Income Statistics</h2>
          <p className="text-xl text-gray-500 mb-2">Monthly Increase</p>
          <p className="text-2xl font-bold mb-4">67,842</p>
          <ResponsiveContainer width="100%" height="75%">
            <LineChart data={incomeData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="register" stroke="#8b5cf6" strokeWidth={2} dot={false} />
              <Line type="monotone" dataKey="premium" stroke="#14b8a6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

     <h1 className="text-3xl font-bold text-center">Sales Statistics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Overall Sales</h3>
            <span className="text-xl text-gray-500">Last 30 days</span>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={120} label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-around mt-4 text-sm">
            <div>Gross Sales <b>492</b> <span className="text-green-500">+0.5%</span></div>
            <div>Purchases <b>87k</b> <span className="text-green-500">+0.8%</span></div>
            <div>Tax Return <b>882</b> <span className="text-red-500">-0.4%</span></div>
          </div>
        </div>

        
        <div className="bg-white p-6 rounded-2xl shadow h-[400px]">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">Sales Statistics</h3>
            <span className="text-xl text-gray-500">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={barData}>
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="sales" fill="#8b5cf6" />
              <Bar dataKey="orders" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

    
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
        <div className="bg-white p-4 rounded-2xl shadow h-72">
          <h3 className="text-2xl font-bold">Total Expenses</h3>
          <p className="text-xl ">8742</p>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expensesData}>
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        
        <div className="bg-white pt-4 rounded-2xl shadow h-72">
          <h3 className="text-2xl font-bold">Total Budget</h3>
          <p className="text-xl ">47,840</p>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={budgetData}>
                <Bar dataKey="value" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      
        <div className="bg-white p-6 rounded-2xl shadow h-72">
          <h3 className="text-2xl font-bold">Total Balance</h3>
          <p className="text-xl ">$7,243</p>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={balanceData}>
                <Bar dataKey="value" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
