import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HighlightDirective } from './highlight.directive';
import { CreditcardPipe } from './creditcard.pipe';

@NgModule({
	declarations: [ AppComponent, ChildComponent, HighlightDirective, CreditcardPipe ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
