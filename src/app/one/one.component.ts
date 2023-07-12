import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit{
  contactForm : any;
  options : any = "choose option";
  



  constructor(private router : Router){}
  ngOnInit(): void {
  }
  phone(){
    this.options = "phone";
  }
  email(){
    this.options = "email"
  }

}





