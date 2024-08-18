
import './App.css'

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
    <div className="flex justify-between items-center gap-8 m-5 ">
      {
        data?.map((item, key) =>
          <div key={key} className='bg-[#343944] p-10 w-full text-center rounded-md text-[32px] font-semibold'>
            <h1>{item?.name}</h1>
            <h1>{item?.total}</h1>
          </div>
        )
      }

    </div>
  )
}

export default App
