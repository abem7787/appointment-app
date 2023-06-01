
export function PostData(type, userData){

let BaseUrl = "http://localhost:8888/api/user/save"

return new Promise((resolve, reject) =>{
    
         
    fetch(BaseURL+type, {
        method: 'POST',
        body: JSON.stringify(userData)
      })
      .then((response) => response.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });


  });
}