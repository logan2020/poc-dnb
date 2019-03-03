import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-customer-search',
  templateUrl: './customer-search.component.html',
  styleUrls: ['./customer-search.component.scss']
})
export class CustomerSearchComponent implements OnInit {

  private customerSearch:FormGroup;

  constructor(private fb:FormBuilder,private http:HttpClient,private route:Router,private utility: UtilityService) { 
    this.customerSearch = this.fb.group({
      cust_name: this.fb.control('',[Validators.required]),
      search: this.fb.control('',[Validators.required])
    });
  }

  ngOnInit() {
  }

  onSearch(form){
    console.log(form.value);
    this.http.post('http://localhost:8080/dnb/customer/details',form.value)
    .subscribe((response:any)=>{
      if(response.status == 200){
        this.route.navigateByUrl('/customer-details');
        this.utility.data.next('data');
      }
    })
  }

  onLogOut(){
    console.log("logout the user")
  }
}
