import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:string;
  password:string;
  message:string = "Before";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: LoginService
  ) {}

  ngOnInit() {
  }

  onLogin() {
    this.message="After";
    this.router.navigate(['/main']);
  };
}
