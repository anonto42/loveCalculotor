import { useState } from 'react';
import LovePage from '../Out/LovePage';

function Home() {
  const[boyName,setBoyName] = useState();
    const[girlName,setGirlName] = useState();
    const[TRF,setTRF]= useState();
    const[PT,setPT] = useState();
    const[wrn,setWrn]=useState();

    const calculate =()=>{

        if(boyName == "onim" && girlName == "mily" || boyName == "Onim" && girlName == "Mily"){
            setPT(100);
            setTRF(true);
            return;
        }else{

            if(boyName != null || girlName != null){

                let point = Math.floor(Math.random()*100);
    
                setPT(point);
    
                if ((point%2) == 0) {
                    setTRF(true);
                }else{
                    setTRF(false);
                }
    
            }else{
                return setWrn("At First full fill from");
            }
        }

    }
    
  return (
    <>
      <div className='w-full h-screen bg-[#8a86ff00] relative'>
    <LovePage />
          <div className='w-[85%] h-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-57%]'>
                  <div className='w-[85%] h-[80%] absolute top-[60%] left-[50%] flex translate-x-[-50%] translate-y-[-50%]'>
                      <div className='h-[100%] w-[50%]'>
                          <div className='w-[140px] xl:w-[300px] h-full '>
                              <input value={boyName} onChange={e=>setBoyName(e.target.value)} type="text" className='w-full h-[40px] outline-none xl:mt-[20%] mt-[90px] px-4 placeholder:text-[#7c4242a1] xl:text-xl text-sm italic placeholder:font-semibold text-[#323232]' placeholder='Inter his name' />
                              <div className='w-full h-[15%] text-center content-center xxl:text-5xl text-3xl font-bold text-[#fcafbc]'>
                                  <h1>+</h1>
                              </div>
                              <input value={girlName} onChange={e=>setGirlName(e.target.value)} type="text" className='w-full h-[40px] outline-none mt-[20] px-4 placeholder:text-[#7c4242a1] xl:text-xl text-sm italic placeholder:font-semibold text-[#323232]' placeholder='Inter her name' />
                              <div className='w-full flex justify-center items-center h-[100px]'>
                                  <button onClick={()=>calculate()} className='xl:w-[200px] text-sm w-[110px] text-[#a82626] italic hover:scale-105 rounded-xl h-[50px] bg-[#e8b7ff] xl:text-2xl font-bold xl:hover:text-[25px] duration-150 ease-in-out xl:hover:scale-110 mt-[10%] active:text-[red]'>Calculate Love</button>
                              </div>
                          </div>
                      </div>
                      <div className='h-[100%] pb-16 w-[50%] text-[20px] bg-[#ff000000] xl:text-5xl font-semibold text-[#ffffff] italic flex justify-center items-center'>
                          <h1>{PT == null ? '00' : `${PT}`}% {TRF == null ? '..' : TRF == true ? 'True' : TRF == false ? `False` : ''}</h1>
                      </div>
                  </div>
          </div>
      </div>
    </>
  )
}

export default Home
