import { Component } from '@angular/core';

@Component({
  selector: 'app-lint-failure',
  templateUrl: './lint-failure.component.html',
  styleUrl: './lint-failure.component.scss'
})
export class LintFailureComponent {

  // This variable is declared but not used - will cause lint error
  // It can cause ng serve to break
  /**
  unusedVariable: string;
   **/

  items = [{name: 'foo'}, {name: 'bar'}];

  constructor() { }

  ngOnInit(): void {
    // Example of a function declaring an unused local variable
    const unusedLocalVariable = 'Hello, world!'; // unusedLocalVariable is declared but not used
  }

  greetings(name: string) {
    // Missing explicit return type for function
    return `Hello, ${name}!`;
  }

  onClick(): void {
    // Missing explicit return type for function
    console.log('Button clicked');
  }

  unusedMethod(): void {
    console.log('This method is declared but not used'); // This method is declared but not used within the component
  }

  emptyFunction() {
    // Empty function body (no implementation)
  }

  evalExample() {
    // Example of using eval() function (eval is generally considered unsafe and should be avoided)
    eval('console.log("eval is evil")');
  }

  unnecessaryVar() {
    // Unnecessary usage of var instead of let/const
    var x = 10;
  }

  bindExample() {
    // Unnecessary usage of bind()
    const boundFunction = this.onClick.bind(this);
  }

  newObject() {
    // Unnecessary usage of new with objects
    const obj = new Object();
  }

  unnecessaryStringConstructor() {
    // Unnecessary usage of String constructor
    const str = new String("Hello");
  }

  deprecatedAPI() {
    // Example of using deprecated API
    document.writeln('This method is deprecated');
  }
}
