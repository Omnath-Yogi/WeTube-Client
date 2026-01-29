import React, { useState } from 'react'
import { categories } from '../../assets/assets';


const CategoryBar = () => {
    const [active, setActive] = useState("All");
    return (
        <div className="flex   items-center gap-3 px-4 py-3 overflow-x-auto scrollbar-hide ">

            {categories.map((cat) => {
                return <button key={cat} onClick={() => setActive(cat)}
 className={` whitespace-nowrap px-4 py-1.5 cursor-pointer  rounded-full text-sm transition ${active === cat ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"}`}>
                    {cat}
                </button>

            })
            }
        </div>
    )
}

export default CategoryBar