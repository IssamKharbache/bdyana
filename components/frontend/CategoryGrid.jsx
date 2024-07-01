import Link from 'next/link'
import React from 'react'

export default function CategoryGrid() {
  return (
    <div className="bg-white border border-gray-300 rounded-lg  dark:bg-gray-700 dark:border-gray-700 text-slate-800 overflow-hidden">
      <div className="bg-slate-100 dark:bg-gray-800 py-3 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100 flex justify-between items-center">
        <h2>Category List</h2>
        <Link
          className="bg-lime-600 hover:bg-lime-800 duration-300 transition-all text-slate-50 rounded-md px-4 py-2"
          href={'/'}
        >
          See All
        </Link>
      </div>
      <div className="flex grid grid-cols-7 text-center items-center px-8 py-10 gap-5">
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Stationery & Craft</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
        <div>
            <img src="/Logo.png"/>
            <p className="text-sm text-slate-100 py-2">Garments & Accessories</p>
        </div>
      </div>
    </div>
  )
}