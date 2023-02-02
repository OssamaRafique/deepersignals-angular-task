import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeListComponent } from './pages/tree-list/tree-list.component';
import { SearchInputModule } from './shared/components/search-input/search-input.module';
import { AccountComponent } from './pages/tree-list/components/account/account.component';
import { ArrowIconModule } from './shared/components/arrow-icon/arrow-icon.module';

const SharedModules = [SearchInputModule, ArrowIconModule];

@NgModule({
  declarations: [AppComponent, TreeListComponent, AccountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...SharedModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
