import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    console.log("Entered Email id : ",data);
    if(data.manager =="editor")
    this.router.navigate(['./editor']);
    else
    this.router.navigate(['./agent']);
     }

}
