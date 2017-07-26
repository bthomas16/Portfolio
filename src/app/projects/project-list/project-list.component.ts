import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Project } from '../projects.model';
import { ProjectsService } from '../projects.service'

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects: Project[]

  constructor(
    private projectsService: ProjectsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects()
  }

}
