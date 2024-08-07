import HotelGrid from '../components/HotelGrid';
import {hotelData} from '../comman/hotelData'
import ActionBar from '../components/ActionBar';
import { useState } from 'react';
import Modal from 'react-modal';
import AddForm from '../components/AddForm';
import { hotelDataType } from '../comman/types';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

function Home() {
    const [queryString, setQueryString] = useState('');
    const [openModal,setOpenModal] = useState(false);
    const [selected,setSelected] = useState<number[]>([]);
    const [hotelsData,setHotelsData] = useState(hotelData);
    const [searchParam] = useState(['name','city'])

    const searchedData = (hotelsData: hotelDataType[])=>{
        if (queryString === "") { return hotelsData; }

           return hotelsData.filter((hotel)=>{
               return searchParam.some((parameter)=>{
                   return hotel[parameter]!.toString().toLowerCase().includes(queryString)
                })
            })
        }

    const updateSearchParam = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryString(e.target.value);
        console.log(e.target.value)
    }

    const handleModalOpen = () =>{
        setOpenModal(true);
    }

    const handleClick = (id: number) => {
        console.log(id)
        if(selected.includes(id)){
            setSelected(selected.filter((item) => item !== id))
            return;
        }
        setSelected([...selected,id])
        console.log(selected)
    }

    const handleAdd = (newHotel: hotelDataType)=> {
        setHotelsData([...hotelsData,newHotel]);
    }

    const handleDelete = () => {
        setHotelsData(hotelsData.filter((hotel)=>!selected.includes(hotel.id)));
        setSelected([]);
    }
    // Modal.defaultStyles.overlay!.overflow = 'hidden'

  return (
    <>
        <ActionBar serchParam={queryString} updateSearchParam={updateSearchParam} openAddModal={handleModalOpen} handleDelete={handleDelete}/>
        <SimpleBar style={{ maxHeight: 500 }}>
            <HotelGrid hotelData={searchedData(hotelsData)} handleCLick={handleClick}/>
        </SimpleBar>
        <Modal 
            isOpen={openModal} 
            onRequestClose= {() => setOpenModal(false)}
            appElement={document.getElementById('root')!}
            style={
                {
                    content:{top:'50%',left:'50%',transform:'translate(-50%, -50%)',height:'fit-content',width:'80%',padding:0},
                    overlay:{backgroundColor: 'rgba(0, 0, 0, 0.50)'}
                }
            }
        >
           <AddForm handleAdd = {handleAdd} handleClose={() => setOpenModal(false)} />
        </Modal>
    </>
  )
}

export default Home