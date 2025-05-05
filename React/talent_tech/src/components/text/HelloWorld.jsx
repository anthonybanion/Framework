// ==========================================
// 
// Description: This is a simple React component that displays a greeting message.
//
// File: Hello.jsx
// Author: Anthony Bañon
// Created: 2025-05-04
// Last Updated: 2025-05-04
// ==========================================


// Style the component
const styles = {
    backgroundColor: '#ff4757',
    color: 'while',
    fontSize: '20px',
    borderRadius: '15px',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.3)',
    pading: '10px',
}

function HelloWorld({name}) {
    /*
     * This function renders a greeting message with name.
     *
     * @param {string} name - Name of the user to greet
     * @returns {JSX.Element} Rendered greeting message
     */
    
    return (
        <div style={styles}>
            <h2>Hello {name}</h2>
            <p>This is a simple React component.</p>
        </div>
    );
}

export default HelloWorld;