import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule, InputTextModule, TreeTableModule } from 'primeng/primeng';
import { AppComponent } from './app.component';
import { NodeSearchComponent } from './node-search/node-search.component';
import { ChatBotServiceService } from './services/chat-bot-service.service';

@NgModule({
  declarations: [
    AppComponent,
    NodeSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule, 
    SharedModule,
    InputTextModule,
    CalendarModule,
    ButtonModule,
    TreeTableModule,
  ],
  providers: [ ChatBotServiceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
