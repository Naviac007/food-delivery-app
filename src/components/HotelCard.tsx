import { useState } from "react";
import PlaceholderImage from "../assets/DefaultPlaceholderImage.jpg"

interface HotelCardProps {
    id: number,
    name: string;
    description: string;
    isPureVeg?: boolean;
    location: string;
    city?:string;
    handleCLick: (id: number) => void
}

function HotelCard(props: HotelCardProps) {
    const [isSelected,setSelected] = useState(false);

    const handleClick = () =>{
        setSelected(!isSelected);
        props.handleCLick(props.id);
    }

  return (
    <div onClick={handleClick} className={` w-full lg:flex h-full ${isSelected && "border-2 border-red-500"}`}>
        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('${PlaceholderImage}')`}} title="Woman holding a mug" />
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between">
            <div className="mb-6">
                <div className="text-gray-900 font-bold text-l mb-2 flex flex-wrap">
                    {props.name}
                    <span>
                        <p className="text-xs text-green-600 ml-1">
                            {props.isPureVeg&& "pure veg"}
                        </p>
                    </span>
                </div>
            <p className="text-gray-700 text-sm">{props.description}</p>
            </div>
            <div className="flex items-center">
            <div className="text-sm">
                <p className="text-gray-900 leading-none">{props.location}</p>
                <p className="text-gray-600">{props.city}</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HotelCard