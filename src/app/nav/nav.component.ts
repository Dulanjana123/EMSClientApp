import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}


  constructor(public accountService: AccountService, private router: Router) { }

  ngOnInit(): void { 

  }

  

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => this.router.navigateByUrl('/employees'),
      error : error => console.log(error)
    })
    console.log(this.model)
  }

  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/')
  }

}
