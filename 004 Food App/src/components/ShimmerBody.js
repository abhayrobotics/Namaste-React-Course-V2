const ShimmerBody = ()=>{
    let array=[]
    for(let i=0;i<20;i++){

     
        array.push( <div className="shimmer__card" key= {i} >
                         <div className="shimmer__img"></div> 
                         <div className="shimmer__line l1"></div>
                         <div className="shimmer__line l2"></div>
                         <div className="shimmer__line l3"></div>
                         <div className="shimmer"></div>
                    </div>)
     
         i++;
    }
    // console.log(array)

 return(

     <div className="shimmer__container">
        {array}
        
    </div>
        )
}


export default ShimmerBody