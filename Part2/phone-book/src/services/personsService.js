import axios from "axios";

let baseUrl = "/api/persons";

const getAll = () => {
  const request =  axios.get(baseUrl);
    return  request.then((res)=> res)
};

const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request.then((res) => res);
};



const update = (id, newObject)=>{
  console.log(newObject, id, 'newObject')
    const request =  axios.put(`${baseUrl}/${id}`, newObject);
    return request.then((res)=>res)
}

const Delete =(id)=>{
   return  axios.delete(`${baseUrl}/${id}`).then((res)=> res.data)    
}
export { getAll, create, update, Delete};
