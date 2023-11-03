import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
function ShowData({ data, btnHandle }) {
  // console.log('hello', btnHandle);
  const { id, picture, title, time, name, profilePicture } = data;
  return (
    <div className="h-[821px] w-[845px]">
      <img
        className="w-full h-[450px] object-cover rounded-[8px] mb-[34px]"
        src={picture}
        alt=""
      />
      <div className="flex items-center justify-between">
        <div className="flex">
          <img
            src={profilePicture}
            className="h-[60px] w-[60px] rounded-full object-cover mr-6"
            alt=""
          />
          <div className="text-left">
            <h1 className="text-[#111] text-2xl font-bold leading-[38.4px]">
              {name}
            </h1>
            <p className="text-[#11111199] font-semibold leading-6">
              Mar 29(23 days ago)
            </p>
          </div>
        </div>
        <div className="">
          <button onClick={() => btnHandle(data)}>
            {time} min read {}
            <FontAwesomeIcon id="icon"
              className="text-gray-500 hover:text-red-400"
              icon={faBookmark}
            />
          </button>
        </div>
      </div>
      <div className="">
        <h1 className="text-left text-[#111] text-[40px] font-bold leading-[64px] mb-4">
          {title}
        </h1>
      </div>
      <div className="flex font-medium text-[20px] leading-8 text-[#11111199]">
        <p className="mr-4">#beginners</p>
        <p>#programming</p>
      </div>
    </div>
  );
}

export default ShowData;
