import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
 
})
export class GithubComponent implements OnInit {
  
  githubService: any;
  username: any;
  constructor(private_githubService:GithubService) {
    console.log('Github Component Init...');

    this.githubService.getUser().subscribe(username =>{
      //console.log(user);
      this.username = this.username ;
    });
   }

  ngOnInit() {
  }

}
