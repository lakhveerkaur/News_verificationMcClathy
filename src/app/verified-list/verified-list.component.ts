import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verified-list',
  templateUrl: './verified-list.component.html',
  styleUrls: ['./verified-list.component.css']
})
export class VerifiedListComponent implements OnInit {

  newslist:any[] = [
    {name:'list-group-item list-group-item-success',value:'Checked Dapibus ac facilisis',checked:false},
    {name: 'list-group-item list-group-item-warning',value:'Checked1 Dapibus ac facilisis',checked:false},
    {name: 'list-group-item list-group-item-success',value:'Checked22 Dapibus ac facilisis',checked:false}

  ];


  constructor() { }

  ngOnInit() {
  }
  onApprove(data){
    console.log(data,"response");
    this.newslist = this.newslist
              .filter(opt => !opt.checked);

    alert("Selected news are approved");

  }

}
