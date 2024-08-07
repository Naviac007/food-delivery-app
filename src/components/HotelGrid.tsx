import { hotelDataType } from '../comman/types'
import HotelCard from './HotelCard'

interface HotelGridProps {
    hotelData: hotelDataType[]
    handleCLick: (id: number) => void
}

function HotelGrid(props: HotelGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 m-5">
        
        {props.hotelData.map((hotel: hotelDataType)=>(
            <HotelCard key={hotel.id} {...hotel} handleCLick = {props.handleCLick}/>
        ))}
    </div>
  )
}

export default HotelGrid