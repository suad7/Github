import { Component } from "@angular/core";
import { GithubService } from "./github.service.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})


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
