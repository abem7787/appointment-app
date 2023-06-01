import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt from "jwt-decode"
import Cookies from "universal-cookie"




export default function AdminLogin(props) {



 
    useEffect(() => {
      
        // var list = []
        // list.push(props["App"])
        // list.join("")
        

    }, [props]);

    const cookies = new Cookies();

    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const [user, setUser] = useState(null);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const logout = () => {
        setUser(null);
        cookies.remove("jwt_authorization");
        navigate('/');
    }


    const login = (jwt_token) => {
        const decoded = jwt(jwt_token);
        navigate('list');

        // set user state
        setUser(decoded);

        cookies.set("jwt_authorization", jwt_token, {
            expires: new Date(decoded.exp + 1000),
        })

    };
    const handleSubmit = (event) => {
        event.preventDefault();

        // axios.post('http://localhost:8888/api/user/save', inputs).then(function(response){
        //     console.log(response.data);
        //     navigate('/');
        // });
        // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }


    return (
        <div>
            <h1>Admin Secret Page</h1>

            <form onSubmit={handleSubmit}>
                <table cellSpacing="10">
                    <tbody>

                        <tr>

                            <th>
                                <label>Name: </label>
                            </th>
                            <td>
                                <input type="text" name="name" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Email: </label>
                            </th>
                            <td>
                                <input type="text" name="email" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Mobile: </label>
                            </th>
                            <td>
                                <input type="text" name="mobile" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>

                            {user ? (
                                <div>
                                    <button onClick={logout}>Logout</button>
                                </div>
                            ) : (

                                <td colSpan="2" align="right">
                                    <button onClick={() => login(props["App"])}>Save</button>
                                </td>)}
                            

                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    )
}
