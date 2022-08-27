import axios from "axios";
export async function deleteData(year,id) {
    
    
    if(id){
        return await axios.delete(`https://tembeganesha.firebaseio.com/${year}/${id}.json`);
    }
   
    return await axios.delete(`https://tembeganesha.firebaseio.com/${year}.json`);
  }
  