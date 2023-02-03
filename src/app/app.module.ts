import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputModule } from './shared/components/search-input/search-input.module';
import { AccountComponent } from './pages/account-list/components/account/account.component';
import { ArrowIconModule } from './shared/components/arrow-icon/arrow-icon.module';
import { AccountListComponent } from './pages/account-list/account-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HotToastModule } from '@ngneat/hot-toast';

const SharedModules = [SearchInputModule, ArrowIconModule];

@NgModule({
  declarations: [AppComponent, AccountListComponent, AccountComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HotToastModule.forRoot(),
    ...SharedModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
