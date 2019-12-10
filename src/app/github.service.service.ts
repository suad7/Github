import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private username = "string";
  private client_id = "f5965befde606125132b";
  private client_secret = "b167a928530f13825133b651a79a19a93e777b54";

  constructor(private _http: HttpClient) {
  }
  getUser() {
    return this._http.get(
      "https://api.github.com/users/" +
        this.username +
        "/repos?client_id=" +
        this.client_id +
        "&client_secret=" +
        this.client_secret
    );
  }
  getRepos() {
    return this._http
      .get(
        "https://api.github.com/users/" +
          this.username +
          "/repos?client_id=" +
          this.client_id +
          "&client_secret=" +
          this.client_secret
      )
  }
  updateUsername(username: string) {
    this.username = username;
  }
}
