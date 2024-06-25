import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LintFailureComponent } from './components/lint-failure/lint-failure.component';
import { LintCompliantComponent } from './components/lint-compliant/lint-compliant.component';

@NgModule({
  declarations: [
    AppComponent,
    LintFailureComponent,
    LintCompliantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
