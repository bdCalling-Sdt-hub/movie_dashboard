
import './App.css'
import NewStudio from './Components/NewStudio/NewStudio'
import RevinewChart from './Components/RevinewChart/RevinewChart'
import { useGetDashboardOverviewQuery } from './redux/api/studioApi'

function App() {

  const {data :  overview} = useGetDashboardOverviewQuery();

  const data = [
    {
      name: "Total User",
      total: overview?.data?.totalUser,
      bgColor: "#EBEBEB",
    },
    {
      name: "Total Studio",
      total: overview?.data?.totalStudio,
      bgColor: "#EBEBEB",
    },
    {
      name: "Total Movie",
      total: overview?.data?.totalMovie,
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
        <RevinewChart overview={overview} />
      </div>

    </div>
  )
}

export default App
