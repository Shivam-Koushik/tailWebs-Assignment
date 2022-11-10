import{ useEffect, useState } from 'react'
import axios from 'axios';
import "./subjects.css"

function Subjects() {
   let id = localStorage.getItem("_id")
   const [myData, setMyData] = useState([]);
   const [isError, setIsError] = useState("");

   const getMyPostData = async () => {
     try {
      let url = `http://localhost:3001/filterSubjects?userId=${id}`
       const res = await axios.get(url);
       setMyData(res.data.data);
     } catch (error) {
       setIsError(error.message);
     }
   };

   const deleteSub = ()=>{
        
   }

   useEffect(() => {
     getMyPostData();
   }, []);

  return (
    <>
         <h1 className='heading'>SUBJECTS</h1>
         <div className='grid'>
           {myData.length==0 && 
              <div className='heading'> No Data</div>
           }
          { myData.map((sub)=>{
            console.log(sub)
            const{id,subjectname,marks} = sub;
            return (
              <div className='card' key={id}>
                   <h2>{subjectname}</h2>
                   <p> = </p>
                   <p>{marks}</p>
                   {/* <button key={subjectname} onClick={deleteSub}>Delete</button> */}
              </div>
            )
          })}
         </div>
    </>
  )
}

export default Subjects;
