import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lint-compliant',
  templateUrl: './lint-compliant.component.html',
  styleUrls: ['./lint-compliant.component.scss']
})
export class LintCompliantComponent implements OnInit{

  items: Array<{ id: number, name: string }> = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' }
  ];

  constructor() { }

  /**
   * Initializes unusedVariable on component initialization.
   */
  ngOnInit(): void {
    this.greetings('World');
  }

  /**
   * Returns a greeting message with the provided name.
   * @param name The name to greet.
   * @returns A greeting message.
   */
  greetings(name: string): string {
    return `Hello, ${name}!`;
  }

  /**
   * Logs a message when the button is clicked.
   */
  onClick(): void {
    console.log('Button clicked');
  }

  /**
   * Logs a message indicating the function is no longer empty.
   */
  emptyFunction(): void {
    console.log('This function is not empty anymore');
  }

  /**
   * Logs a message indicating an eval example.
   */
  evalExample(): void {
    console.log('Eval example');
  }

  /**
   * Logs a message indicating a with statement example.
   * @param obj An object type unknown used in the example. Should be replaced with a specific type.
   */
  withStatementExample(obj: unknown): void {
    console.log('With statement example');
  }

  /**
   * Logs a message indicating an unnecessary var example.
   */
  unnecessaryVar(): void {
    const x = 10;
    console.log(x);
  }

  /**
   * Binds the onClick method to a bound function and executes it.
   */
  bindExample(): void {
    const boundFunction = (): void => this.onClick();
    boundFunction();
  }

  /**
   * Logs a message indicating a new object creation example.
   */
  newObject(): void {
    const obj = {};
    console.log(obj);
  }

  /**
   * Logs a message indicating an unnecessary string constructor example.
   */
  unnecessaryStringConstructor(): void {
    const str = "Hello";
    console.log(str);
  }

  /**
   * Logs a message indicating a deprecated API usage.
   */
  deprecatedAPI(): void {
    console.log('Deprecated API');
  }

  // TrackBy-Funktion für *ngFor
  trackByFn(index: number, item: { id: number, name: string }): number {
    return item.id; // Eindeutige ID des Elements zurückgeben
  }

}
