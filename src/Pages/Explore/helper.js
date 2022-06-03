export const searchVideos=(videos,searchVideo)=>{
   let updatedList=[...videos];
   if(searchVideo){
       return updatedList.filter((video)=>video.title.toLowerCase().includes(searchVideo.toLowerCase()))
   }
   return updatedList;

}

export const sortVideos=(videos,filterByCategory)=>{
let updatedList=[...videos];
if(filterByCategory && filterByCategory !=="All"){
    return updatedList.filter((video)=>video.categoryName===filterByCategory)
}
return updatedList;
}

export const sortVideosByDates=(videos,sortby)=>{
    let updatedList=[...videos];
    if(sortby && sortby==='Latest'){
        return updatedList.sort((a,b)=>new Date(b.createdDate)- new Date(a.createdDate))
    }else if(sortby==='Oldest'){
        return updatedList.sort((a,b)=>new Date(a.createdDate)-new Date(b.createdDate))
    }
    return updatedList;
}