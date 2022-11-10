import{ useEffect, useState } from 'react'
import axios from 'axios';

function Subjects() {
   let id = localStorage.getItem("_id")
   const [myData, setMyData] = useState([]);
   const [isError, setIsError] = useState("");

   const getMyPostData = async () => {
     try {
      console.log(id)
       const res = await axios.get(`https://localhost:3001/filterSubjects?userId=${id}`);
       setMyData(res.data);
     } catch (error) {
       setIsError(error.message);
     }
     console.log(myData)
   };

   useEffect(() => {
     getMyPostData();
   }, []);

  return (
    <>
         <h1>SUBJECTS</h1>
         <div className='grid'>
          {myData.map((sub)=>{
            const{id,name,marks} = sub;
            return (
              <div className='card' key={id}>
                   <h2>{name}</h2>
                   <p>{marks}</p>
              </div>
            )
          })}
         </div>
    </>
  )
}

export default Subjects;
