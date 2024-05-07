const ShimmerBody = () => {
  let array = [];
  for (let i = 0; i < 20; i++) {
    array.push(
      <div
        className="shimmer__card flex  flex-col animate-pulse   m-3 pointer border  rounded-xl border-slate-300  w-[220px] h-[300px]  my-4  rounded-xl shadow-lg bg-slate-100  "
        key={i}
      >
        {/* img */}
        <div className="shimmer__img h-40  bg-slate-300 rounded-t-xl mb-4"></div>
        {/* description */}
        <div className="shimmer__line l1 bg-slate-300 w-44 h-5 rounded-lg m-2 "></div>
        <div className="shimmer__line l1 bg-slate-300 w-36 h-5 rounded-lg m-2"></div>
        
      </div>
    );

    i++;
  }
  // console.log(array)

  return (
    <div className="shimmer__container flex flex-wrap m-auto w-10/12 mt-16 px-4 ">
      {array}
    </div>
  );
};

export default ShimmerBody;
