import {Link} from 'react-router-dom';
import '../App.js';




function AdminUser() {
  return (
    <div className="App">
      <h5>You made to your secret lair, React CRUD operations using PHP API and MySQL</h5>
        <nav>
          <ul>
            <li>
              <Link to="/">Back to AdminLogin</Link>
            </li>
            <li>
              <Link to="create">Create User</Link>
            </li>
            <li>
              <Link to="list">Secret List</Link>
            </li>

          </ul>
        </nav>
       
     
   
    </div>
  );
}

export default AdminUser;
