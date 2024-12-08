import Link from "next/link";
export default function Header(){
    return(
        <div className="w-[1320px] h-[87px] bg-black  relative  " >
            <h1 className="text-[#FF9F0D] text-2xl text-center"> Food <span className="text-white">luck</span></h1>
        <ul className="text-base text-white flex gap-6 absolute bottom-0 " >
        <li ><Link  href="/" >Home</Link></li>
        <li ><Link href="/pages/portfolio" >Menu</Link></li>
        <li ><Link href="/pages/about">Blog</Link></li>
        <li><Link href="/pages/contact">Pages</Link></li>
        <li ><Link  href="/" >About</Link></li>
        <li ><Link  href="/" >Shop</Link></li>
        <li><Link  href="/" >Contact</Link></li>
        </ul>
        
        <div className="  flex justify-between float-right h-[54px] w-[310px] border-[#FF9F0D] border-[1px] rounded-[27px] mr-5 text-left "><h2 className= "ml-4 text-white text-base mt-5 ">search...</h2>
        <img src="/searchIcon.png" alt=""  className="h-6 w-6 mt-4 mr-4  "/></div>
        
        </div>
    )
}