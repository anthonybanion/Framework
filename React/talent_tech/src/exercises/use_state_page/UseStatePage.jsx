// ==========================================
//
// This file contains the UseStatePage component which
// serves as the main entry point for the use_state_page.
//
// File: UseStatePage.jsx
// Author: Anthony Bañon
// Created: 2025-05-24
// Last Updated: 2025-05-24
// ==========================================

import Counter from "../../hooks/use_state/Counter";
import FormWhitSweetAlert from "../../hooks/use_state/FormWhitSweetAlert";
import Text from "../../hooks/use_state/Text";

function UseStatePage() {
  return (
    <div className="container bg-light m-4 d-flex flex-column align-items-center">
      <Counter />
      <FormWhitSweetAlert />
      <Text />
    </div>
  );
}

export default UseStatePage;
