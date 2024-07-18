import { ChevronRight, Factory, Building2, Laptop, Cpu, BookHeart, Luggage, Microwave, Trophy, Baby, AlignJustify, Cable, PawPrint, } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function SidebarCategories() {
    return (
        <div className="sm:col-span-3 sm:block bg-white border border-gray-300 rounded-sm  dark:bg-gray-700 dark:border-gray-700 text-slate-800 hidden">
      <h2 className="bg-slate-100 dark:bg-gray-800 py-2 px-6 font-semibold border-b border-gray-300 dark:border-gray-600 text-slate-800 dark:text-slate-100">
        Shop By Category
      </h2>
      
      <div className="py-2 pl-3 pr-0 h-[340px] flex flex-col gap-2 text-sm relative">
        <ul className="">
        <li className="py-1 group">
          <Link href="https://www.bdyana.com/category/industrial-machineries"
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Factory className="text-slate-500" size={16} />
            <span className="text-sm">Industrial Machineries</span>
            <ChevronRight className="shrink-0 w-3 h-3 dark:text-lime-500 text-slate-600 right" />
          </Link>
          {/* <ul className="absolute left-[275px] top-0 z-10 w-full px-3 py-1 bg-white h-[340px] hidden group-hover:block">
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
            <li className="py-1 hover:text-blue-700">
              <Link className="hover:text-blue-700" href="">Home Appliancce</Link>
            </li>
          </ul> */}
        </li>
        <li className="py-1 ">
          <Link href="https://www.bdyana.com/category/gadget-accessories"
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Building2 className="text-slate-500" size={16} />
            <span className="text-sm">Garments & Accessories</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href="https://www.bdyana.com/category/computer-hardware"
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Laptop className="text-slate-500" size={16} />
            <span className="text-sm">Computer & Hardware</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Cpu className="text-slate-500" size={16} />
            <span className="text-sm">Gadget & Accessories</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Luggage className="text-slate-500" size={16} />
            <span className="text-sm">Men's Fashion</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
           <BookHeart className="text-slate-500" size={16} />
            <span className="text-sm">Women's & Girls' Fashion</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
           <PawPrint className="text-slate-500" size={16} />
            <span className="text-sm">Beauty & Bodycare</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Baby className="text-slate-500" size={16} />
            <span className="text-sm">Mothers & Kids</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Microwave className="text-slate-500" size={16} />
            <span className="text-sm">Home Appliancce</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Cable className="text-slate-500" size={16} />
            <span className="text-sm">Electronics Device</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <Trophy className="text-slate-500" size={16} />
            <span className="text-sm">Sports & Entertainment</span>
          </Link>
        </li>
        <li className="py-1 ">
          <Link href=""
            className="flex items-center gap-3 hover:bg-slate-50 duration-300 transition-all dark:text-slate-300 dark:hover:bg-slate-600 rounded-md"
          >
            <AlignJustify className="text-slate-500" size={16} />
            <span className="text-sm">All CAtegories</span>
          </Link>
        </li>
        </ul>
      </div>
      </div>
    )
}