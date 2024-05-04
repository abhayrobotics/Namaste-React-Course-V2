const ShimmerBody = ()=>{
    let array=[]
    for(let i=0;i<20;i++){

     
        array.push( <div className="shimmer__card flex  w-52 h-52 bg-slate-200 p-3 m-2 pointer border border-slate-300" key= {i} >
                         <div className="shimmer__img"></div> 
                         <div className="shimmer__line l1 "></div>
                         <div className="shimmer__line l2"></div>
                         <div className="shimmer__line l3"></div>
                         <div className="shimmer"></div>
                    </div>)
     
         i++;
    }
    // console.log(array)

 return(

     <div className="shimmer__container flex flex-wrap">
        {array}
        
    </div>
        )
}


export default ShimmerBody