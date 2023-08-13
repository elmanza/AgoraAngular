import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './pages/home/home.component';
import { HostComponent } from './pages/host/host.component';
import { SearchComponent } from './pages/search/search.component';
import { RoomComponent } from './pages/room/room.component';
import { HelpComponent } from './pages/help/help.component';
import { BookComponent } from './pages/book/book.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { WishlistsComponent } from './pages/wishlists/wishlists.component';
import { ChatComponent } from './pages/chat/chat.component';
import { TripsComponent } from './pages/trips/trips.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HomeComponent,
    HostComponent,
    SearchComponent,
    RoomComponent,
    HelpComponent,
    BookComponent,
    NotificationsComponent,
    WishlistsComponent,
    ChatComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
