import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private route:Router) { 
    this.login = this.fb.group({
      username: this.fb.control('',[Validators.required]),
      password: this.fb.control('')
    });
  }

  ngOnInit() {
  }

  onLogin(form){
    console.log(form.value);
    this.http.post('http://localhost:8080/dnb/login',form.value)
    .subscribe((response:any)=>{
      if(response.status == 200){
        this.route.navigateByUrl('/customer-search');
      }
    });
  }
}
