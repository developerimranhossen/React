

function ShowAdded({cartObj}) {
  return (
    <div>
        <div className="flex justify-center">
          <div className="w-[351px] h-[98px] bg-white rounded-[8px] mb-4">
            <h1 className="text-[#111] text-[18px] font-medium leading-[28.8px] p-5">{cartObj.title}</h1>
          </div>
        </div>
    </div>
  )
}

export default ShowAdded