import { Calendar, ChevronDown, DollarSign, Filter, Layers, Wallet } from 'lucide-react'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { date: "2025-06-01", value1:  30000, value2: 35000, value3: 0 },
  { date: "2025-06-02", value1:  70000, value2: 90000, value3: 0 },
  { date: "2025-06-03", value1: 60000, value2: 50000, value3: 0 },
  { date: "2025-06-04", value1: 30000, value2: 28000, value3: 0 },
  { date: "2025-06-05", value1: 70000, value2: 65000, value3: 0 },
  { date: "2025-06-06", value1: 75000, value2: 72000, value3: 2000 },
  { date: "2025-06-07", value1: 35000, value2: 28000, value3: 0 },
  { date: "2025-06-08", value1: 50000, value2: 70000, value3: 0 },
  { date: "2025-06-09", value1: 48000, value2: 74000, value3: 0 },
  { date: "2025-06-10", value1: 25000, value2: 22000, value3: 1000 },
];

const Section = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState("Day");
  const [selectedOption1, setSelectedOption1] = useState("Category Name");
  const [selectedOption2, setSelectedOption2] = useState("Revenue Center Name");
  const [selectedOption3, setSelectedOption3] = useState("Sales Day");
  const [selectedOption4, setSelectedOption4] = useState("Item Name");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleChange4 = (e) => {
    setSelectedOption4(e.target.value);
  };

  const dropDown = () => {
    return (
      <div className=' max-w-[780px]  bg-white mt-1 p-3 absolute z-50'>
        <ul>
          <li className='text-gray-400 text-left text-lg md:text-2xl rounded'>
            No options available, Please write and Search
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div>
      <div className="my-4 p-4 bg-white w-[450px] md:w-full rounded-md shadow">
        <div >
          <h1 className="flex justify-start text-xl md:justify-center md:text-2xl text-left md:items-center font-bold text-gray-700">
            Daily Sales Dashboard
          </h1>
        </div>

        <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4'>
          <div className='relative w-full md:w-auto'>
            <label className="block text-gray-800 font-semibold text-lg md:text-2xl">Company</label>
            <input
              type="text"
              className=" w-[400px] md:w-[775px] mx-2 border border-gray-300 p-1 rounded-md text-gray-950 mt-1 text-lg md:text-2xl"
              placeholder="VKD Hospitailty LLC"
            />
            <ChevronDown
              onClick={() => setOpen(!open)}
              className="absolute right-8 md:right-2 top-2/3 transform -translate-y-1/2 text-gray-500 w-8 h-8 cursor-pointer"
            />
            {open && dropDown()}
          </div>

          <div className='relative w-full md:w-auto'>
            <label className="block text-gray-800 font-semibold text-lg md:text-2xl">From date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="09/09/2025"
              className="w-[400px] md:w-[775px] border border-gray-300 p-2 rounded-md text-gray-950 px-10 mt-1 text-lg md:text-2xl"
            />
            <Calendar className="absolute left-2 top-2/3 transform -translate-y-1/2 text-gray-500 w-6 h-6 pointer-events-none" />
          </div>

          <div className='relative w-full md:w-auto'>
            <label className="block text-gray-800 font-semibold text-lg md:text-2xl">To date</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              placeholderText="09/09/2025"
              className="w-[400px] md:w-[775px] border border-gray-300 p-1 rounded text-gray-950 mt-1 px-10 text-lg md:text-2xl"
            />
            <Calendar className="absolute left-2 top-2/3 transform -translate-y-1/2 text-gray-500 w-6 h-6 pointer-events-none" />
          </div>
        </div>

        <button className='left-1 bg-indigo-500 text-white mb-8 mt-2 w-36 rounded-md text-lg md:text-2xl px-2 py-1'>
          Submit
        </button>
        
        <div className='relative text-lg md:text-2xl p-2 mx-4 border border-gray-50 shadow-lg font-semibold'>
          <div
            className="flex items-center justify-between md:p-3 p-1 "
            onClick={() => setOpen1(!open1)}
          >
            <span className="font-semibold text-gray-900 text-lg md:text-2xl">Daily Sales Chart</span>
            <ChevronDown
              className={`w-6 h-6 text-gray-900 transform transition-transform duration-300 ${
                open1 ? "rotate-180" : ""
              }`}
            />
          </div>

        
          {open1 && ( 
            <div className="mt-4 bg-gray-50 p-10 px-4 rounded-lg shadow-lg">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#555" />
                  <XAxis dataKey="date" stroke="black" />
                  <YAxis stroke="black" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="value1" stroke="#00ff00" />
                  <Line type="monotone" dataKey="value2" stroke="#ff00ff" />
                  <Line type="monotone" dataKey="value3" stroke="#3399ff" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

     <div >
        <div className='font-bold text-2xl text-gray-700 mt-4'>Daily Sales</div>

        <div className='flex flex-col md:flex-row justify-between items-start md:items-center '>
         <select
         value={selectedOption}
          onChange={handleChange}
        className="w-full md:w-[1050px] border text-gray-600 text-xl md:text-2xl border-gray-300 mb-1 md:my-5 my-1 rounded-lg p-2 "
      >
        <option value="Day">Date</option>
        <option value="Date">Day</option>
        <option value="Net Sales">Net Sales</option>
        <option value="Net Spent">Net Spent</option>
        <option value="Launch Sales">Launch Sales</option>
        <option value="Dinner Sales">Dinner Sales</option>
        <option value="Dinner Spent">Dinner Spent</option>
        <option value="Lunch Covers">Lunch Covers</option>
        <option value="Total Covers">Total Covers</option>
        <option value="Dinner Covers">Dinner Covers</option>
      </select>

  
           <input     
         type="text"
         className=" w-full md:w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-1 md:my-5 text-xl md:text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-lg md:text-xl my-3 md:my-1 mx-1'><Filter className='mx-1'/>| records</div>
          </div>

    <div className="overflow-x-auto w-full">
  <div className="min-w-[900px] border-b border-b-white h-12 bg-indigo-500 text-white text-base sm:text-lg md:text-2xl font-semibold flex items-center justify-around px-4">
    <div className="px-1">Day</div>
    <div className="pl-2">Date</div>
    <div className="flex items-center gap-2"><DollarSign className="w-5 h-5" /> Sales Amount</div>
    <div className="flex items-center gap-2"><Layers className="w-5 h-5" /> Covers</div>
    <div className="flex items-center gap-2 md:pl-4"><Wallet className="w-5 h-5" /> Spent</div>
  </div>

  <div className="min-w-[900px] border-b h-12 bg-indigo-500 text-white text-base sm:text-lg md:text-2xl font-semibold flex items-center justify-around px-4 ">
    <div className="md:pl-[400px]">Lunch</div>
    <div>Dinner</div>
    <div>Net</div>
    <div>Lunch</div>
    <div>Dinner</div>
    <div>Total</div>
    <div>Lunch Spent</div>
    <div className="md:pl-4">Dinner Spent</div>
    <div>Net Spent</div>
  </div>

  <div className="min-w-[900px] border-b border-b-gray-100 shadow-lg h-14 bg-white text-gray-800 text-base sm:text-lg md:text-2xl font-semibold flex items-center  px-4 mt-2">
    Total
  </div>
</div>


       <div className='font-bold text-2xl text-gray-700 mt-4'>Menu Category</div>

        <div className='flex flex-col md:flex-row justify-between items-center'>
         <select
         value={selectedOption1}
          onChange={handleChange1}
        className="w-full md:w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
        <option className='text-sm md:text-xl'  value="Category Name">Category Name</option>
        <option className='text-sm md:text-xl' value="Lunch">Lunch</option>
        <option className='text-sm md:text-xl' value="Dinner">Dinner</option>
        <option className='text-sm md:text-xl' value="Net Sales">Net Sales</option>
        <option className='text-sm md:text-xl' value="Class Name">Class Name</option>
        <option  className='text-sm md:text-xl' value="Lunch Contribution">Lunch Contribution</option>
        <option className='text-sm md:text-xl' value="Dinner Contribution">Dinner Contribution</option>
      
      </select>

  
           <input     
         type="text"
         className=" w-full md:w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-lg md:text-xl my-3 md:my-1 mx-1'><Filter className='mx-1'/> | records</div>
          </div>
      </div>
<div className="overflow-x-auto w-full">
  <div className="min-w-[800px] border-b h-12 bg-indigo-500 text-white 
    text-base sm:text-lg md:text-2xl font-semibold rounded-md flex items-center justify-around px-4">
    <div>Category</div>
    <div>Class</div>
    <div>Lunch Sales</div>
    <div>Dinner Sales</div>
    <div>Net Sales</div>
    <div>Lunch%</div>
    <div>Dinner%</div>
  </div>

  <div className="min-w-[800px] border-b border-gray-300 shadow-lg h-14 
    bg-white text-gray-800 text-base sm:text-lg md:text-xl font-bold 
    rounded-md flex items-center px-4 mt-2">
    Total
  </div>
</div>

      



       <div className='font-bold text-2xl text-gray-700 mt-4 '>Revenue Category</div>

        <div className='flex flex-col md:flex-row justify-between items-center'>
         <select
         value={selectedOption2}
          onChange={handleChange2}
        className="w-full md:w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
      
  
        <option className='text-sm md:text-xl' value="Dinner">Dinner</option>
        <option className='text-sm md:text-xl' value="Total Sales">Total Sales</option>
        <option  className='text-sm md:text-xl' value="Lunch Contribution">Lunch Contribution</option>
        <option className='text-sm md:text-xl' value="Dinner Contribution">Dinner Contribution</option>
         <option className='text-sm md:text-xl' value="Revenue Center Name">Revenue Center Name</option>
      
      </select>

  
           <input     
         type="text"
         className=" w-full md:w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-lg md:text-xl my-3 md:my-1 mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          {/* Header Row */}
<div className="overflow-x-auto w-full">
  {/* Header Row */}
  <div className="min-w-[900px] border-b h-12 bg-indigo-500 text-white 
    text-base sm:text-lg md:text-2xl font-semibold rounded-md flex items-center justify-around px-4">
    <div>Revenue Center</div>
    <div>Lunch Sales</div>
    <div>Dinner Sales</div>
    <div>Total Sales</div>
    <div>Lunch%</div>
    <div>Dinner%</div>
  </div>

  {/* Total Row */}
  <div className="min-w-[900px] border-b border-gray-300 shadow-lg h-14 
    bg-white text-gray-800 text-base sm:text-lg md:text-xl font-bold 
    rounded-md flex items-center px-8 sm:px-16 md:px-32 mt-2">
    Total
  </div>
</div>




     <div className=' w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md flex justify-start items-center py-5 px-4'>Sales
      by Average Chart</div>


    <div className='font-bold text-2xl text-gray-700 mt-4'>Sales by Average Chart</div>
        <div className='flex flex-col md:flex-row justify-between items-center'>
         <select
         value={selectedOption3}
          onChange={handleChange3}
        className="w-full md:w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >

        <option className='text-sm md:text-xl' value="Lunch">Lunch</option>
        <option className='text-sm md:text-xl' value="Dinner">Dinner</option>
        <option className='text-sm md:text-xl' value="Avg Daily">Avg Daily</option>
        <option className='text-sm md:text-xl' value="Avg Lunch">Avg Lunch</option>
        <option className='text-sm md:text-xl' value="Net Sales">Net Sales</option>
        <option className='text-sm md:text-xl' value="No Of Ooc">No Of Ooc</option>
         <option className='text-sm md:text-xl' value="Sales Day">Sales Day</option>
        <option className='text-sm md:text-xl' value="Avg Dinner">Avg Dinner</option>

      </select>


           <input
         type="text"
         className=" w-full md:w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />

          <div className='flex justify-start font-semibold text-indigo-700 text-xl mb-2 mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          {/* Header Row */}
<div className="overflow-x-auto w-full">
  {/* Header Row */}
  <div className="min-w-[1050px] border-b h-12 bg-indigo-500 text-white 
    text-base sm:text-lg md:text-2xl font-semibold rounded-md flex items-center justify-around px-4">
    <div>Day</div>
    <div>Occurences</div>
    <div>Lunch</div>
    <div>Dinner</div>
    <div>Net Sales</div>
    <div>Avg Lunch</div>
    <div>Avg Dinner</div>
    <div>Avg Daily</div>
  </div>

  {/* Total Row */}
  <div className="min-w-[1050px] border-b border-gray-300 shadow-lg h-14 
    bg-white text-gray-800 text-base sm:text-lg md:text-xl font-bold 
    rounded-md flex items-center px-8 sm:px-16 md:px-32 mt-2">
    Total
  </div>
</div>



      <div className='flex flex-col md:flex-row justify-between items-center gap-3 my-20 md:my-5 text-gray-800'> 
  <div className='flex-1 border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md
    py-4 px-4'>Contributions By Item Lunch Food Chart</div>

  <div className='flex-1 border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold py-4 px-4'>Net Sale By Item Lunch Food Chart</div>
</div>

<div className='font-bold text-2xl text-gray-700 my-4 md:my-1'>Sales By Item Lunch Food</div>

<div className='flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3'>
  <select
    value={selectedOption4}
    onChange={handleChange4}
    className="w-full md:w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
  >
    <option className='text-sm md:text-xl' value="Sold Qty">Sold Qty</option>
    <option className='text-sm md:text-xl' value="Item Name">Item Name</option>
    <option className='text-sm md:text-xl' value="Net Sales">Net Sales</option>
    <option className='text-sm md:text-xl' value="Contribution Percentage">Contribution Percentage</option>
  </select>

  <input     
    type="text"
    className=" w-full md:w-[1090px] border border-gray-300 p-2 rounded-lg text-gray-950 text-2xl"
    placeholder="Filters..."
  />

  <div className='flex justify-start font-semibold text-indigo-700 text-xl mb-2 mx-1'>
    <Filter className='mx-1'/> | records
  </div>
</div>

          {/* Header Row */}




       
          {/* Header Row */}
<div className="overflow-x-auto w-full">
  {/* Header Row */}
  <div className="min-w-[1050px] border-b h-12 bg-indigo-500 text-white 
    text-base sm:text-lg md:text-2xl font-semibold rounded-md flex items-center justify-around px-4">
    <div className="px-4">Item Name</div>
    <div className="px-4">QTY</div>
    <div className="px-4">Net Sales</div>
    <div className="px-4">Contribution %</div>
  </div>

  {/* Total Row */}
  <div className="min-w-[900px] border-b border-gray-300 shadow-lg h-14 
    bg-white text-gray-800 text-base sm:text-lg md:text-xl font-bold 
    rounded-md flex items-center flex-nowrap whitespace-nowrap px-4 justify-start mt-1">
    <div className="px-4">Total</div>
  </div>
</div>




      {/* Top Charts */}
<div className="flex flex-col md:flex-row justify-between items-center gap-3 my-20 md:my-5 text-gray-800">
  <div className="flex-1 border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md py-4 px-4">
    Contributions By Item Lunch Beverage Chart
  </div>

  <div className="flex-1 border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md py-4 px-4">
    Net Sale By Item Lunch Beverage Chart
  </div>
</div>

{/* Section Title */}
<div className="font-bold text-2xl text-gray-700 mt-6">
  Sales By Item Lunch Beverage
</div>

{/* Filters */}
<div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3">
  <select
    value={selectedOption4}
    onChange={handleChange4}
    className="w-full md:w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2"
  >
    <option className='text-sm md:text-xl' value="Sold Qty">Sold Qty</option>
    <option className='text-sm md:text-xl' value="Item Name">Item Name</option>
    <option className='text-sm md:text-xl' value="Net Sales">Net Sales</option>
    <option className='text-sm md:text-xl' value="Contribution Percentage">Contribution Percentage</option>
  </select>

  <input
    type="text"
    className="w-full md:w-[1090px] border border-gray-300 p-2 rounded-md text-gray-950 text-2xl"
    placeholder="Filters..."
  />

  <div className="flex justify-start font-semibold text-indigo-700 text-xl mb-2 mx-1">
    <Filter className="mr-1" /> | records
  </div>
</div>



          {/* Header Row */}
{/* Table Section */}
<div className="overflow-x-auto w-full">
  {/* Header Row */}
  <div className="min-w-[900px] flex border-b h-12 bg-indigo-500 text-white 
    text-base sm:text-lg md:text-2xl font-semibold rounded-md justify-around items-center px-4 whitespace-nowrap">
    
    <div>Item Name</div>
    <div>QTY</div>
    <div>Net Sales</div>
    <div>Contribution %</div>
  </div>

  {/* Total Row */}
  <div className="min-w-[900px] flex border-b border-gray-300 shadow-lg h-14 
    bg-white text-gray-800 text-base sm:text-lg md:text-xl font-bold rounded-md justify-between items-center px-8 sm:px-16 md:px-32 mt-2 whitespace-nowrap">
    <div>Total</div>
  </div>
</div>

{/* Charts Section */}
<div className="flex flex-col md:flex-row flex-wrap justify-between items-start md:items-center gap-4 text-gray-800 mt-6">
  <div className="flex-1 border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md py-4 px-4">
    Contributions By Item Dinner Beverage Chart
  </div>

  <div className="flex-1 border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md py-4 px-4">
    Net Sale By Item Dinner Beverage Chart
  </div>
</div>



<div className="font-bold text-2xl text-gray-700 mt-6">Sales By Item Dinner Beverage</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-3">
  <select
    value={selectedOption4}
    onChange={handleChange4}
    className="w-full md:w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2"
  >
    <option className='text-sm md:text-xl' value="Sold Qty">Sold Qty</option>
    <option className='text-sm md:text-xl' value="Item Name">Item Name</option>
    <option className='text-sm md:text-xl' value="Net Sales">Net Sales</option>
    <option className='text-sm md:text-xl' value="Contribution Percentage">Contribution Percentage</option>
  </select>

  <input
    type="text"
    className="w-full md:w-[1090px] border border-gray-300 p-2 rounded-md text-gray-950 text-2xl"
    placeholder="Filters..."
  />

  <div className="flex justify-start font-semibold text-indigo-700 text-xl mb-2 mx-1">
    <Filter className="mx-1" /> | records
  </div>
</div>



          {/* Header Row */}
<div className="overflow-x-auto">
  {/* Header Row */}
  <div className="min-w-[900px] flex border-b h-12 bg-indigo-500 text-white 
    text-base sm:text-lg md:text-2xl font-semibold rounded-md justify-around items-center px-4 whitespace-nowrap">
    
    <div>Item Name</div>
    <div>QTY</div>
    <div>Net Sales</div>
    <div>Contribution %</div>
  </div>


{/* Total Row */}

  <div className="min-w-[900px] flex border-b border-gray-300 shadow-lg h-14 
    bg-white text-gray-800 text-base sm:text-lg md:text-xl font-bold rounded-md justify-between items-center px-8 sm:px-16 md:px-32 mt-2 whitespace-nowrap">
    Total
  </div>
</div>

      </div>

      <footer>
        <div className='text-center text-2xl text-gray-500'>
          &copy;2025, made with ❤️ by ZAM
        </div>
      </footer>
    </div>
  );
};

export default Section;