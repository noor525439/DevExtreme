import { Calendar, ChevronDown, DollarSign, Filter, Layers, Wallet } from 'lucide-react'
import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Section = () => {
const [open, setOpen] = useState(false);
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
return  (   <div className='w-[780px] bg-white mt-1 p-3 absolute z-50'>
        <ul>
            <li className='text-gray-400 text-left text-2xl rounded'>No options available, Please write and Search
            </li>
        </ul>
    </div>)
}
  return (
    <div>
      <div className="my-4 p-4 bg-white rounded-md shadow">
      <div>
          <h1 className="flex justify-center items-center text-2xl font-bold text-gray-700">Daily Sales Dashboard</h1>
      </div>
  <div className='flex justify-between items-center '>
     <div className='relative'>
           <label className="block text-gray-800 font-semibold text-2xl" >Company</label>
           <input     
         type="text"
        
         className=" w-[775px] mx-2 border border-gray-300 p-1  rounded-md text-gray-950 mt-1  text-2xl"
         placeholder=" VKD Hospitailty LLC" />

         <ChevronDown onClick={()=>setOpen(!open)}  className="absolute right-2 top-2/3 transform -translate-y-1/2 text-gray-500 w-8 h-8 " />
            {open && dropDown()}
          
        </div>

        <div className='relative'>
          <label className="block text-gray-800 font-semibold text-2xl" >From date</label>
          
          
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="     09/09/2025"
        className="w-[775px] border border-gray-300 p-2 rounded-md text-gray-950 px-10 mt-1 text-2xl"    
      />
      
         <Calendar className="absolute left-2 top-2/3 transform -translate-y-1/2 text-gray-500 w-6 h-6 pointer-events-none" />
        </div>

        <div className='relative '>
          <label className="block text-gray-800 font-semibold text-2xl" >To date</label>
          <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="     09/09/2025"
        className="w-[775px] border border-gray-300 p-1 rounded text-gray-950 mt-1 px-10 text-2xl"
      />
          <Calendar
      className="absolute left-2 top-2/3 transform -translate-y-1/2 text-gray-500 w-6 h-6 pointer-events-none"
    /> 
        </div>

        
  </div>
    <button className='left-1 bg-indigo-500 text-white mb-8 mt-2  w-36 rounded-md text-2xl px-2 py-1'>Submit</button>
    <div className='bg-white h-12 w-full border-b border-b-gray-300 shadow-lg'
     ><div className='text-2xl mx-4 font-semibold'>Daily Sales Chart</div></div>


     <div >
        <div className='font-bold text-2xl text-gray-700 mt-4'>Daily Sales</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption}
          onChange={handleChange}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mb-5 mt-1 rounded-lg p-2 "
      >
        <option value="Day">Day</option>
        <option value="Date">Date</option>
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
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>

      <div className='w-full border-b border-b-white h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
      
        <div className='px-1'>Date</div>
        <div className='pl-2' >Date</div>
        <div className='flex justify-start px-8'><DollarSign className='m-1'/>Sales Amount</div>
        <div className='flex justify-start px-44'><Layers className='m-1'/>Covers</div>
        <div className='flex justify-start px-48'><Wallet className='m-1'/>Spent</div>
      </div>

       <div className='w-full  border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
      
        <div className='pl-[500px]'>Lunch</div>
        <div >Dinner</div>
        <div >Net</div>
        <div >Lunch</div>
        <div>Dinner</div>
        <div >Total</div>
        <div>Lunch Spent</div>
        <div className='pl-4'>Dinner Spent</div>
        <div>Net Spent</div>
      </div>

       <div className='w-full  border-b border-b-gray-5000 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md flex justify-start items-center px-20'>Total</div>

       <div className='font-bold text-2xl text-gray-700 mt-4'>Menu Category</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption1}
          onChange={handleChange1}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
        <option value="Day">Category Name</option>
        <option value="Date">Lunch</option>
        <option value="Net Sales">Dinner</option>
        <option value="Net Spent">Net Sales</option>
        <option value="Launch Sales">Class Name</option>
        <option value="Dinner Sales">Category Name</option>
        <option value="Dinner Spent">Lunch Contribution</option>
        <option value="Lunch Covers">Dinner Contribution</option>
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>
      </div>
      <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
        <div>Categ</div>
        <div>Class</div>
        <div>Lunch Sales</div>
        <div>Dinner Sales</div>
        <div>Net Sales</div>
        <div>Lunch%</div>
        <div>Dinner%</div>
      </div>
      <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center px-20'>Total</div>

        

      <div className='font-bold text-2xl text-gray-700 mt-4'>Menu Category</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption1}
          onChange={handleChange1}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
        <option value="Category Name">Category Name</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Net Sales">Net Sales</option>
        <option value="Class Name">Class Name</option>
        <option value="Category Name">Category Name</option>
        <option value="Lunch Contribution">Lunch Contribution</option>
        <option value="Dinner Contribution">Dinner Contribution</option>
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>

    
          </div>
      
      <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
        <div>Category</div>
        <div>Class</div>
        <div>Lunch Sales</div>
        <div>Dinner Sales</div>
        <div>Net Sales</div>
        <div>Lunch%</div>
        <div>Dinner%</div>
        
      </div>
      
          <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center px-20'>Total</div>
      


       <div className='font-bold text-2xl text-gray-700 mt-4'>Revenue Category</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption2}
          onChange={handleChange2}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
      
  
        <option value="Dinner">Dinner</option>
        <option value="Total Sales">Total Sales</option>
        <option value="Lunch Contribution">Lunch Contribution</option>
        <option value="Dinner Contribution">Dinner Contribution</option>
         <option value="Revenue Center Name">Revenue Center Name</option>
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
    
        <div>Revenue Center</div>
        <div>Lunch Sales</div>
        <div>Dinner Sales</div>
        <div>Total Sales</div>
        <div>Lunch%</div>
        <div>Dinner%</div>
      </div>
      <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center px-32 my-3'>Total</div>



     <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md flex justify-start items-center py-5 px-4'>Sales 
      by Average Chart</div>

       
    <div className='font-bold text-2xl text-gray-700 mt-4'>Sales by Average Chart</div>
        <div className='flex justify-between items-center'>
         <select
         value={selectedOption3}
          onChange={handleChange3}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mt-1 mb-5 rounded-lg p-2 "
      >
      
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Avg Daily">Avg Daily</option>
        <option value="Avg Lunch">Avg Lunch</option>
        <option value="Net Sales">Net Sales</option>
        <option value="No Of Ooc">No Of Ooc</option>
         <option value="Sales Day">Sales Day</option>
           <option value="Avg Dinner">Avg Dinner</option>
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
    
        <div>Day</div>
        <div>Occurences</div>
        <div>Lunch</div>
        <div>Dinner</div>
        <div>Net Sales</div>
        <div>Avg Lunch</div>
        <div>Avg Dinner</div>
        <div>Avg Daily</div>
      </div>
      <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center  px-32 my-3'>Total</div>



       <div className='flex justify-between items-center gap-3 text-gray-800'> 
       <div className='w-[1150px]   border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md
        py-4 px-4'>Contributions By Item Lunch Food Chart</div>

      <div className='w-[1150px] border  border-gray-100 shadow-lg  h-14 bg-white text-gray-800 text-2xl font-semibold  py-4 px-4'>Net Sale By Item Lunch Food Chart</div>
      </div>
       

       <div className='font-bold text-2xl text-gray-700 mt-4'>Sales By Item Lunch Food</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption4}
          onChange={handleChange4}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
      
        <option value="Sold Qty">Sold Qty</option>
        <option value="Item Name">Item Name</option>
        <option value="Net Sales">Net Sales</option>
        <option value="Contribution Percentage">Contribution Percentage</option>
      
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
    
        <div>Item Name</div>
        <div>QTY</div>
        <div>Net Sales</div>
        <div>Contribution %</div>
        
      </div>
      <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center  px-32 my-3'>Total</div>

       <div className='flex justify-between items-center gap-3 text-gray-800'> 
       <div className='w-[1150px]   border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md
        py-4 px-4'>Contributions By Item Dinner Food Chart</div>

      <div className='w-[1150px] border  border-gray-100 shadow-lg  h-14 bg-white text-gray-800 text-2xl font-semibold  py-4 px-4'>Net Sale By Item Dinner Food Chart</div>
      </div>
       

       <div className='font-bold text-2xl text-gray-700 mt-4'>Sales By Item Dinner Food</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption4}
          onChange={handleChange4}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
      
        <option value="Sold Qty">Sold Qty</option>
        <option value="Item Name">Item Name</option>
        <option value="Net Sales">Net Sales</option>
        <option value="Contribution Percentage">Contribution Percentage</option>
      
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
    
        <div>Item Name</div>
        <div>QTY</div>
        <div>Net Sales</div>
        <div>Contribution %</div>
        
      </div>
      <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center  px-32 my-3'>Total</div>

        <div className='flex justify-between items-center gap-3 text-gray-800'> 
       <div className='w-[1150px]   border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md
        py-4 px-4'>Contributions By Item Lunch Beverage Chart</div>

      <div className='w-[1150px] border  border-gray-100 shadow-lg  h-14 bg-white text-gray-800 text-2xl font-semibold  py-4 px-4'>Net Sale By Item Lunch Beverage Chart</div>
      </div>
       

       <div className='font-bold text-2xl text-gray-700 mt-4'>Sales By Item Lunch Beverage</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption4}
          onChange={handleChange4}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
      
        <option value="Sold Qty">Sold Qty</option>
        <option value="Item Name">Item Name</option>
        <option value="Net Sales">Net Sales</option>
        <option value="Contribution Percentage">Contribution Percentage</option>
      
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
    
        <div>Item Name</div>
        <div>QTY</div>
        <div>Net Sales</div>
        <div>Contribution %</div>
        
      </div>
      <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center  px-32 my-3'>Total</div>

             <div className='flex justify-between items-center gap-3 text-gray-800'> 
       <div className='w-[1150px]   border border-gray-100 shadow-lg h-14 bg-white text-gray-800 text-2xl font-semibold rounded-md
        py-4 px-4'>Contributions By Item Dinner Beverage Chart</div>

      <div className='w-[1150px] border  border-gray-100 shadow-lg  h-14 bg-white text-gray-800 text-2xl font-semibold  py-4 px-4'>Net Sale By Item Dinner Beverage Chart</div>
      </div>
       

       <div className='font-bold text-2xl text-gray-700 mt-4'>Sales By Item Dinner Beverage</div>

        <div className='flex justify-between items-center'>
         <select
         value={selectedOption4}
          onChange={handleChange4}
        className="w-[1050px] border text-gray-600 text-2xl border-gray-300 mx-1 my-5 rounded-lg p-2 "
      >
      
        <option value="Sold Qty">Sold Qty</option>
        <option value="Item Name">Item Name</option>
        <option value="Net Sales">Net Sales</option>
        <option value="Contribution Percentage">Contribution Percentage</option>
      
      
      </select>

  
           <input     
         type="text"
         className=" w-[1090px] mx-1 border border-gray-300 p-2  rounded-md text-gray-950 my-5   text-2xl"
         placeholder="Filters..." />
    
          <div className='flex justify-start font-semibold text-indigo-700 text-xl mx-1'><Filter className='mx-1'/> | records</div>
          </div>
          <div className='w-full border-b border-b-black h-12 bg-indigo-500 text-white text-2xl font-semibold rounded-md flex justify-around items-center'>
    
    
        <div>Item Name</div>
        <div>QTY</div>
        <div>Net Sales</div>
        <div>Contribution %</div>
        
      </div>
      <div className='w-full  border-b border-b-gray-300 shadow-lg h-14 bg-white text-gray-800 text-xl font-bold rounded-md flex justify-start items-center  px-32 my-3'>Total</div>    
                
      </div>

      <footer>
        <div className='text-center text-2xl text-gray-500'>
           &copy;2025, made with ❤️ by ZAM
        </div>
      </footer>
     
      
    </div>
  )
}

export default Section
