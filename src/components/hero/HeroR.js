import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';

import ProgressBar from "@ramonak/react-progress-bar";

function HeroR() {
  return (
    <div className="flex flex-col my-8 bg-gray-100   shadow-lg p-4 h-max py-6 rounded-lg">
        <div className="flex flex-col my-4 ">
          <h1 className="text-lg font-bold my-3">Retirement Strategy</h1>
           <p className="text-md font-semibold my-3">Employee Contribution</p>
           <ProgressBar className='progress'  bgColor="#0000FF" completed={72} />


        </div>
        <div className='flex flex-col my-3 '>
        <p className="text-md font-semibold my-4">Retirement Age</p>
           <ProgressBar className='progress'  bgColor="#0000FF" completed={60} />
        </div>
        <div className='my-4'>
           <p className="text-md font-semibold my-3">Employee Contribution : 8.4%</p>
           <p className="text-md font-semibold my-3">Interest rate : 5%</p>
        </div>
        <button className="bg-[#0000FF] text-white rounded-lg p-2 px-6">
          Update
        </button>

        <p className="text-[#0000FF]">View Help Docs</p>
           


    </div>
    
  )
}

export default HeroR