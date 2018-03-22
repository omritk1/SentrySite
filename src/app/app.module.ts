import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { ProjectGalleryComponent } from './project-gallery/project-gallery.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBannerComponent,
    ProjectGalleryComponent,
    SubHeaderComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
