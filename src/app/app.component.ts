import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prog';
  data = "Hello  "
  
  // displayData(){
  //   console.warn(this.data)
  // }
  // alertFunction(data:any){
  //   alert(data)
  // }
  // alertdata(data:any)
  // {
  //   alert(data)
  // }
  // value = ""
  // displaydata(data: any){
  //   this.value = data;
  // }
// enteredval = ""
// displaydata(data:any)
// {
//   this.enteredval = data;
// }
enteredval = ""
mouseoverEvent(data:any){
  this.enteredval = data;

}
mouseLeaveEvent (){
  this.enteredval = ""
}
}
