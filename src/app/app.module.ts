import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module';



import { AppComponent } from './app.component';
import { DescBioComponent } from './desc-bio/desc-bio.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectItemComponent } from './projects/project-list/project-item/project-item.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { ProposeIdeaComponent } from './propose-idea/propose-idea.component';
import { ProposeIdeaDetailComponent } from './propose-idea/propose-idea-detail/propose-idea-detail.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { EntrepreneurComponent } from './entrepreneur/entrepreneur.component';
import { HeaderComponent } from './header/header.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ContactComponent } from './contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    DescBioComponent,
    ProjectsComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectDetailComponent,
    ProposeIdeaComponent,
    ProposeIdeaDetailComponent,
    AboutMeComponent,
    EntrepreneurComponent,
    HeaderComponent,
    NewProjectComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
