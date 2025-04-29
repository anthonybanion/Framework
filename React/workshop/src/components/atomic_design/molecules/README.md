# 🧬 Molecules

This folder contains **reusable UI components** that combine atoms to create more complex UI structures. Molecules represent a **modular piece** of an interface and often include **interactivity** or **basic logic**.

They are still simple components but with a higher level of complexity compared to atoms. Molecules can be composed of multiple atoms (like buttons, inputs, labels, etc.) and are used to build **interactive sections** of your interface.

## 📁 Folder Structure

Each molecule has its own folder with the following structure:

```text
molecules/ 
├── form_group/ 
│ ├── FormGroup.jsx 
│ └── FormGroup.module.css 
├── card/ 
│ ├── Card.jsx 
│ └── Card.module.css 
├── modal/ 
│ ├── Modal.jsx 
│ └── Modal.module.css 
├── ...

```

>    
>   - ComponentName.jsx: The React component definition.
>   - ComponentName.module.css: Optional file for scoped styling using CSS Modules.
>   - You can also use Tailwind CSS, SCSS, or any preferred styling method.

## 📦 List of Available Molecules

|Component	|Description|
|---|---|
|form_group	|Combines label and input with validation|
|card	|Display card with image, title, and content|
|modal	|Reusable modal window for displaying content|
|navbar	|Navigation bar with links and buttons|
|dropdown	|Dropdown menu with selectable options|
|input_group	|Group of input elements with buttons or add-ons|
|alert	|Message alert for success, error, or info|
|table	|Data table with rows and columns|
|pagination	|Pagination controls for navigating data|
|accordion	|Expandable sections to hide/display content|
|progress_bar	|Bar to show progress of tasks or loading|
|tooltip	|Tooltip that provides additional info on hover|
|breadcrumb	|Navigation breadcrumbs for hierarchical structure|
|list_group	|List of items used for displaying collections|
|carousel	|Carousel for image or content slides|


## 🧠 Best Practices
- Make molecules reusable and modular.
- Combine atoms to form functional units (e.g., Input with Label for a FormGroup).
- Keep the logic simple, typically for form handling or UI state management.
- Use TypeScript for type safety and define clear props.
- Test molecules with unit tests and ensure they handle interactivity well.
- Avoid making molecules too specific, they should remain generic for reusability.