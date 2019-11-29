import { Component } from "@angular/core";
import { Goal } from "./goal";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  goals: Goal = [
    { id: 1, name: "Watch finding Nemo",u:"first" },
    { id: 2, name: "Buy Cookies",u:"u"  },
    { id: 3, name: "Get new Phone Case" ,u:"u"},
    { id: 4, name: "Get Dog Food" ,u:"u"},
 
  ];
}
