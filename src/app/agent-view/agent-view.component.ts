import { Component, OnInit } from '@angular/core';
import { NewsStatusService } from '../news-status.service';

@Component({
  selector: 'app-agent-view',
  templateUrl: './agent-view.component.html',
  styleUrls: ['./agent-view.component.css']
})
export class AgentViewComponent implements OnInit {

  constructor(private newsStatusService:NewsStatusService) { }
  status = "";
  ngOnInit() {
  }
  trueClick(){
    console.log(" Status : True verified");
    this.status = "true";
    this.newsStatusService.postStatus(this.status);
  }
  partialFake(){
    this.status = "Patially fake";
    this.newsStatusService.postStatus(this.status);
    //alert(" Status : Partially fake verified");
  }
  fakeClick(){
    this.status = "Completely fake";
    this.newsStatusService.postStatus(this.status);
  //  alert(" Status : Completely fake verified");
  }
}
