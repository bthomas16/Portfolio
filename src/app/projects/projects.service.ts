import { Project } from './projects.model';

export class ProjectsService {
  private projects: Project[] = [
    new Project('HeadLinR', 'Making use of over a dozen external APIs HeadLinR will help you curate news from around the world', '../assets/HeadLinR.png', 'HTML5'),
    new Project('StackD', 'Making use of over a dozen external APIs HeadLinR will help you curate news from around the world', '../assets/StackD.png', 'HTML5'),
    new Project('iHatch', 'Making use of over a dozen external APIs HeadLinR will help you curate news from around the world', '../assets/iHatch.png', 'HTML5'),
    new Project('Code_Pilot', 'Making use of over a dozen external APIs HeadLinR will help you curate news from around the world', '../assets/code-pilot-logo.png', 'HTML5'),
    new Project('Treasured Talent', 'Making use of over a dozen external APIs HeadLinR will help you curate news from around the world', '../assets/tt.png', 'HTML5'),

  ]

  getProjects() {
  return this.projects.slice()
}

}
