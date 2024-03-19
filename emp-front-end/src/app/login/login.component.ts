import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // property

  email:string=""
  password:string=""

  constructor(private api:ApiService,private home:Router){}

  login(){
    if(this.email&&this.password){

      this.api.adminDetails().subscribe({
        next:(result:any)=>{
          console.log(result);

          if(this.email===result.email&&this.password===result.password){
            alert("authorization successful")
            this.home.navigateByUrl('home')
          }else{
            alert("invalid admin details")
          }
        },
        error:(res:any)=>{
          console.log(res);
          
        }
      })

    }
    else{
      alert('please fill the form completely')
    }
  }

}
