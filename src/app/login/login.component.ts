import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AppUtils} from '../httpUtils/utils'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  constructor(private fb: FormBuilder,private router:Router,private http:AppUtils ) {
    this.loginForm=this.fb.group({
      'email':['',[Validators.email,Validators.required]],
      'password':['',[Validators.required,Validators.minLength(6)]]
    })
  }
  

  ngOnInit(): void {}

  insertDetails(){
    let data = this.loginForm.getRawValue()
    console.log(data);
    this.http.post('http://localhost:3001/login',data).subscribe((res)=>{
      console.log(res);
      alert("User logged in successfully")
      
    })
    
  }

  redirect(){
    this.router.navigateByUrl('/signup')
  }
}
