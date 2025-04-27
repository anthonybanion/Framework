# 🧬 Atoms

This folder contains the **smallest, most reusable UI components** in the Atomic Design methodology.

Atoms are the **building blocks** of your interface. They include elements like buttons, inputs, icons, and other UI primitives. These components are self-contained, focused on a single functionality, and usually **do not manage complex logic**.

## 📁 Folder Structure

Each atom has its own folder with the following structure:

```text

atoms/ 
├── Button/ 
│ ├── Button.tsx 
│ └── Button.module.css 
├── Input/ 
│ ├── Input.tsx 
│ └── Input.module.css 
├── ...
 
```

---


- `ComponentName.tsx`: The React component definition.
- `ComponentName.module.css`: Optional file for scoped styling using CSS Modules.

> You can also use Tailwind CSS, SCSS, or any preferred styling method.

## 📦 List of Available Atoms

| Component      | Description                                  |
|----------------|----------------------------------------------|
| `Button`       | Basic clickable button                       |
| `Input`        | Text input field                             |
| `Label`        | Label for form elements                      |
| `Heading`      | Reusable H1–H6 heading component             |
| `Text`         | Paragraph or span for text content           |
| `Image`        | Controlled image wrapper                     |
| `Icon`         | Wrapper for displaying icons                 |
| `Link`         | Custom-styled anchor tag                     |
| `Checkbox`     | Checkbox input                               |
| `RadioButton`  | Radio button input                           |
| `Select`       | Dropdown/select input                        |
| `Textarea`     | Multi-line text input                        |
| `Divider`      | Horizontal line divider                      |
| `Badge`        | Small label or tag used for status/info      |
| `Loader`       | Spinner or loading indicator                 |

## 🧠 Best Practices

- Keep components **stateless** and **focused**.
- Use **TypeScript** to define clear and reusable props.
- Make your atoms **accessible** (ARIA attributes, semantic HTML).
- Write **unit tests** if possible (e.g., using React Testing Library).
- Import only these atoms in higher-order components (molecules, organisms, etc.).

## 📥 Exporting Atoms

Use an `index.ts` file to export all atoms for easier imports:

```ts
export * from "./Button/Button";
export * from "./Input/Input";
export * from "./Label/Label";
// ...etc.

```

This allows you to import atoms like:

```ts
import { Button, Input } from "@/components/atoms";

```
---
Happy coding with atoms! 🧪✨