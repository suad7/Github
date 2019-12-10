import { Component } from "@angular/core";
import { GithubService } from "./github.service.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public username: string;
  public Repositories: string;
  public followers: string;
  public following: string;
  public avatar_url: string;
  public email: string;
  public created_at: Date;
  repos: Object;


  constructor(private _githubService: GithubService) {
    console.log("Github Component Init...");
  }

  search() {
    this._githubService.updateUsername(this.username);

    this._githubService.getUser().subscribe(user => {
 
      this.username = this.username;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }
}
