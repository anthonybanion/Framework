// ==========================================
// 
// Description: 
//
// File: Nav.jsx
// Author: Anthony Bañon
// Created: 2025-04-28
// Last Updated: 2025-04-28
// ==========================================

// Example of using support elements of the Nav component
// const items = [
//   { id: 1, label: 'Home', link: '/' },
//   { id: 2, label: 'About', link: '/about' },
//   { id: 3, label: 'Contact', link: '/contact' },
//   { id: 4, label: 'Services', link: '/services' },
//   { id: 5, label: 'Blog', link: '/blog' },
// ]


function Nav({ items, onSelection }) {
  /*
   * Nav component
   *
   * @param {Array} items - List of navigation items
   * @param {Function} onSelection - Callback function when an item is selected
   * @returns {JSX.Element} Navigation component
   */
  
  return (
    <nav className="nav" aria-label="Main navigation">
      <ul className="nav-list">
        {items.map((item, index) => (
          <li key={item.id || index} className="nav-item" onClick={() => onSelection(item)}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Nav;