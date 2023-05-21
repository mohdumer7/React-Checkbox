import React from 'react'

const Sidebar = () => {
  return (
    <div className="sidebar w-1/5 bg-[#0F172A] h-full">
        <div className="upper-container flex justify-between">
          <img src="/hexawarelogo.png" alt="logo" className="w-10 m-1"/>
          <div className="flex gap-2" >
            <img src="bell_w.png" alt="bell" className="w-5 h-5 mt-3 "/>
            <img src="user_w.png" alt="bell" className="w-5 h-5 mt-3 mr-2"/>
          </div>
        </div>
        <div className="flex flex-col mt-10 gap-10">
          <p className="text-white cursor-pointer hover:text-slate-600 transition w-full ml-10 text-xl">DASHBOARD</p>
          <p className="text-white cursor-pointer hover:text-slate-600 transition w-full ml-10 text-xl">ANALYTICS</p>
          <p className="text-white cursor-pointer hover:text-slate-600 transition w-full ml-10 text-xl">MASTER</p>
        </div>
      </div>
  )
}

export default Sidebar