import { MdYoutubeSearchedFor } from "react-icons/md";


export default function Search({item,searchItems}) {
  return (
<div className="flex items-center border-4 border-slate-700 rounded-full p-2 w-3/5 m-auto ">
    <MdYoutubeSearchedFor className="text-2xl text-slate-700" />
    <input type="text" name="search" id="search" defaultValue={item} 
    className="border-none  bg-transparent outline-none w-full px-4" placeholder="search for item, region or category"
    onChange={searchItems}/>
</div>
  )
}
