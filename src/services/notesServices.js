import axios from "axios";
import {notesActions} from "../Utils/actions";
import {toast} from react-hot-toast;

export const AddNotesServices=async(videoId,content,token,dispatch)=>{
const toastId=toast.loading("saving notes..");
try{
    const {data,status}=await axios.post(`/api/user/notes/${videoId}`,{
        note:{content:content},
    },{
        headers: { authorization: token },
    });
    if(status==200 || status===201){
        toast.success("Note saved successfully!", {
            id: toastId,
          });
        dispatch({type:notesActions.ADD_NOTES,payload:data.notes})
    }

}catch(error){
        toast.error("Some error occured. Try Again.", {
          id: toastId,
        });
     console.log(error);
}
}

export const deleteNotesService = async (noteId, token, dispatch) => {
    const toastId = toast.loading("Deleting note...");
    try {
      const { data, status } = await axios.delete(`/api/user/notes/${noteId}`, {
        headers: { authorization: token },
      });
      if (status === 200) {
        toast.success("note deleted successfully.", {
          id: toastId,
        });
        dispatch({ type: DELETE_NOTE, payload: data.notes });
      }
    } catch (error) {
      toast.error("Some error occured. Try Again.", {
        id: toastId,
      });
     console.log(error);
    }
  };
