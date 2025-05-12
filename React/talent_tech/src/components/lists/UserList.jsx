// ==========================================
// 
// Description: This is a simple React component that displays a list of users.
//
// File: UserList.jsx
// Author: Anthony Bañon
// Created: 2025-05-04
// Last Updated: 2025-05-04
// ==========================================


import "./list.css";


function UserList({users}){
    /*
     * This function renders a list of users.
     *
     * @param {Array} users - List of users to display
     * @returns {JSX.Element} Rendered list of users
     */
    
    
    return(
        <ul className="myList">
            {users.map(user => (
            <li key={user}>{user}</li>
        ))}
        </ul>
    );
}

export default UserList;