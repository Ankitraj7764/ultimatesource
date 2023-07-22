import React from 'react'

function HeroL() {
    return (
        <>
            <div className=' md:p-12 lg:p-12 p-10  flex flex-col bg-gray-100 rounded-lg'>

                <div className='flex'>
                    <div  > <img className='h-14 w-14 rounded-full' src={require("./user.jpg")} alt="" /></div>
                    <div className='ml-4'>
                        <h1 className="text-lg font-bold ">Hi Ankit</h1>
                        <p>Welcom back</p>
                    </div>

                </div>
                <div className="font-sans my-8 flex flex-col justify-between ">
                    <h3 className=" font-semibold">Today</h3>
                    <div className="my-1.5">
                        <h1 className="font-bold text-lg">$199,8392</h1>
                        <p className="text-slate-400">Account Balance</p>
                    </div>
                    <div className="my-1.5">
                        <h1 className="font-bold text-md">$4,000</h1>
                        <p className="text-slate-400">Account Balance</p>
                    </div>
                    <div className="my-1.5">
                        <h1 className="font-bold text-md">$1,892</h1>
                        <p className="text-slate-400">Account Balance</p>
                    </div>
                    <div className="my-1.5">
                        <button className="bg-blue-700 text-white rounded-lg p-2 px-6">I want to  </button>
                    </div>
                </div>
                <div className="mt-2">
                    <h2 className="text-sm font-bold">Recent treansactions</h2>
                    <div>
                        <p className="text-slate-400">2020-08-07</p>
                        <h2 className="font-semibold text-sm"> withdrawal Transfer to bank -XXX11</h2>
                    </div>
                    <div>
                        <p className="text-slate-400">2020-08-14</p>
                        <h2 className="font-semibold text-sm"> withdrawal Transfer to bank -XXX11</h2>
                    </div>
                    <div>
                        <p className="text-slate-400">2020-08-16</p>
                        <h2 className="font-semibold text-sm"> withdrawal Transfer to bank -XXX11</h2>
                    </div>

                </div>
            </div>

        </>
    )
}

export default HeroL