
import './App.css'
import NewStudio from './Components/NewStudio/NewStudio'
import RevinewChart from './Components/RevinewChart/RevinewChart'

function App() {
  const data = [
    {
      name: "Total User",
      total: "12,076",
      bgColor: "#EBEBEB",
    },
    {
      name: "Total Studio",
      total: "12,076",
      bgColor: "#EBEBEB",
    },
    {
      name: "Total Movie",
      total: "12,076",
      bgColor: "#EBEBEB",
    },
  ]
  return (
    <div className='m-5'>
      <div className="flex justify-between items-center gap-5">

        {
          data?.map((item, key) =>
            <div key={key} className='bg-[#343944] p-8 w-full text-center rounded-md text-[32px] font-semibold'>
              <h1>{item?.name}</h1>
              <h1>{item?.total}</h1>
            </div>
          )
        } 

      </div>
      <div className='mt-5'>
        {/* <NewStudio/> */}
        <RevinewChart/>
      </div>

    </div>
  )
}

export default App
