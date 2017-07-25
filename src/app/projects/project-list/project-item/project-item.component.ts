import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../../projects.model';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.css']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Input() index: number;

  ngOnInit() {
  }

}
