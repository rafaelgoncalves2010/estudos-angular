import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AppComponent} from '../../app.component'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private headerStatus: AppComponent) { }

  ngOnInit() {
  }

  statusHeader(event){
    this.router.navigate(['home'])
    this.headerStatus.statusHeader = !this.headerStatus.statusHeader;
  }
}
