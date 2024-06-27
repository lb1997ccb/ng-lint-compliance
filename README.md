# Angular ESLint Template Project

This repository provides a basic Angular 18 project setup with preconfigured ESLint rules. It serves as a starting point for Angular applications, demonstrating how ESLint can enforce code quality and best practices. The repository includes examples that illustrate common ESLint errors and warnings.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**

  ```bash
  git clone <repository_url>
  cd ng-lint-starter-kit
  ```

2. **Install dependencies:**

  ```bash
  npm install
  ```
3. **Start the development server:**

  ```bash
  npm start
  ```

This command builds the application and serves it locally. Open your browser and navigate to [http://localhost:4200/](http://localhost:4200/) to see the application in action.

## ESLint Configuration

The ESLint setup in this project includes rules from `eslint:recommended`, `@typescript-eslint/recommended`, `@angular-eslint/recommended`, and `@angular-eslint/template/accessibility`. These configurations ensure that the code adheres to best practices and maintains consistency throughout the project.

## Accessibility Rules

Accessibility is an important aspect of web development. This project includes specific ESLint rules (`@angular-eslint/template/accessibility`) that help enforce accessibility standards in Angular templates. These rules ensure that elements like images, form controls, ARIA roles, and other HTML attributes are used correctly to enhance accessibility for users with disabilities.

## Example Components

### LintCompliantComponent

This component demonstrates how to write Angular components that comply with ESLint rules and accessibility guidelines. Here's what this component does:

- Includes proper alt text for images.
- Uses label elements with associated controls.
- Uses appropriate ARIA attributes (role, aria-labelledby, etc.).
- Avoids unnecessary features like autofocus and distracting elements (`<marquee>`).
- Implements a `trackBy` function in `ngFor` loops for better performance.

### LintFailureComponent

This component intentionally violates ESLint rules to demonstrate common mistakes and bad practices in Angular development. It includes examples of unused variables, missing return types, deprecated API usage, unnecessary bindings, and unsafe JavaScript functions like `eval`.

## Usage

Feel free to use this repository as a template for your Angular projects. By leveraging ESLint and adhering to accessibility guidelines, you can improve code quality, maintainability, and user experience in your applications.

## Contributing

Contributions are welcome! If you find issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
