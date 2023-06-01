import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function SignUp() {
  

    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8888/api/user/save', inputs).then(function(response){
            console.log(response.data);
           
        });
        
    }
    return (
        <div>
            <h1>Admin Secret Sign Up Page</h1>
            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label>Name:</label>
                            </th>
                            <td>
                                <input type="text" name="admin_name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email:</label>
                            </th>
                            <td> 
                                <input type="text" name="admin_email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Password:</label>
                            </th>
                            <td>
                                <input type="text" name="admin_password" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                        <td colSpan="2" align ="right">
                                <button>Save</button>
                            </td>
                        
                            {/* <Link to={`adminUser`}><button>Go!</button></Link> */}
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}


