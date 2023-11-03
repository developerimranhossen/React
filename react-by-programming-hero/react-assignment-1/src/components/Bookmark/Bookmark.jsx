import ShowAdded from "../ShowAdded/ShowAdded";

function Bookmark({ cart }) {
  // use reduce method to sum from objects number value
  // let total = 0;
  // total = cart.reduce((prev, current) => {
  //   return prev + current.time;
  // }, 0);

  // same task onother way
  let total = 0;
  for (const obj of cart) {
    total = total + obj.time;
  }

  return (
    <>
      <div className="flex h-20 bg-[#6047EC1A]">
        <h1 className="text-[#6047EC] text-2xl font-bold leading-[38.4px] m-auto">
          Spent time on read : {total}
        </h1>
      </div>
      <div className="w-[411px] bg-[#1111110D]">
        <div className="ml-[30px]">
          <h1 className="font-bold text-[#111] text-2xl leading-[38.4px] text-left mb-4">
            Bookmarked Blogs: {cart.length}
          </h1>
        </div>
        {cart.map(cartObj => <ShowAdded key={cartObj.id} cartObj={cartObj} />)}
      </div>
    </>
  );
}

export default Bookmark;
