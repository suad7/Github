import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipe"
})
export class HomePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) return "Just now";
      const time = {
        year: 31536000,
        month: 2592000,
        week: 604800,
        day: 86400,
        hour: 3600,
        minute: 60,
        second: 1
      };
      let counter;
      for (const i in time) {
        counter = Math.floor(seconds / time[i]);
        if (counter > 0)
          if (counter === 1) {
            return counter + "" + " ago";
          } else {
            return counter + "" + "s ago";
          }
      }
    }
    return value;
  }
}
