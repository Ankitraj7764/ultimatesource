import React from 'react'
import BarChart from './BarChart'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function HeroM() {
    const value = 0.66;
    return (
        <>
            <div className="md:p-12">
                <div>
                    <h5 className="font-semibold text-md">Retirement Income</h5>
                    <h2 className="font-bold text-lg">Starting Year 2056</h2>
                </div>
                <div className="flex m-8">
                    <div className="mx-4">
                        <h1 className='text-lg font-bold '>$300,000</h1>
                        <p className="text-slate-400">myGoal</p>

                    </div>
                    <div className="mx-4">
                        <h1 className='text-lg font-bold '>59%</h1>
                        <p className="text-slate-400">Goal Achieved</p>
                    </div>
                    <div className="mx-4">
                        <h1 className='text-lg font-bold '>$300</h1>
                        <p className="text-slate-400">Est. Monthly Income</p>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-md ">Contributions Overtime</h2>
                   <div className='w-24'>
                   <BarChart  className="w-32"/>
                   </div>
                </div>
                <div>
                    <div>
                        <h2 className="text-lg font-bold">How do I compare to my peers?</h2>
                        <p className="text-slate-400">These  Represent current goal ach.</p>
                    </div>
                    <div className="grid grid-cols-4 py-4 pr-12">
                        <div className="mx-4">
                            <div className="flex my-4  ">
                                <h4 className="text-sm font-semibold mr-2 ">Age:</h4>
                                <p className='text-sm'>Under 30</p>
                            </div>
                            <div className="flex my-4">
                                <h4 className="text-sm font-semibold ">Salary : </h4>
                                <p className='text-sm'>k 20-K 30</p>
                            </div>
                            <div className="flex my-4">
                                <h4 className="text-sm font-semibold mr-2 ">Gender</h4>
                                <p className='text-sm'>Male</p>
                            </div>
                        </div>

                         <div className="mx-4 mt-4">
                                <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} className='h-20' />
                            </div>
                            <div className="mx-4 mt-4">
                                <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} className='h-20' />

                            </div>
                            <div className="mx-4 mt-4">
                                <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} className='h-20' />
                            </div>
                       
                    </div>

                </div>
            </div>


        </>
    )
}

export default HeroM