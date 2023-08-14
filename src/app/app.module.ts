import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './pages/public/home/home.component';
import { HostComponent } from './pages/public/host/host.component';
import { SearchComponent } from './pages/public/search/search.component';
import { RoomComponent } from './pages/public/room/room.component';
import { HelpComponent } from './pages/public/help/help.component';
import { BookComponent } from './pages/public/book/book.component';
import { NotificationsComponent } from './pages/private/notifications/notifications.component';
import { WishlistsComponent } from './pages/private/wishlists/wishlists.component';
import { ChatComponent } from './pages/private/chat/chat.component';
import { TripsComponent } from './pages/private/trips/trips.component';

import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'room/:property_id',
    component: RoomComponent
  },
  {
    path: 'book/:property_id',
    component: BookComponent
  },
  {
    path: 'host',
    component: HostComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

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
    TripsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
