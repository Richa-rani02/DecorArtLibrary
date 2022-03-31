export const searchVideos=(videos,searchVideo)=>{
   let updatedList=[...videos];
   if(searchVideo){
       return updatedList.filter((video)=>video.title.toLowerCase().includes(searchVideo.toLowerCase()))
   }
   return updatedList;

}

export const sortVideos=(videos,sortBy)=>{

}