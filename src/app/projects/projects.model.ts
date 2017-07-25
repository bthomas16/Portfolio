export class Project {
  public name: string;
  public description: string;
  public image: string;
  public technology: string;

  constructor(name: string, description: string, image: string, technology: string) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.technology = technology;
  }
}
