import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Router} from '@angular/router';
import {AppUtils} from '../httpUtils/utils'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm:FormGroup;
  constructor(private fb:FormBuilder,private router:Router,private http:AppUtils) { 
    this.signupForm= this.fb.group({
      'firstName':['',[Validators.required,Validators.minLength(3)]],
      'lastName':['',[Validators.required,Validators.minLength(3)]],
      'email':['',[Validators.required,Validators.email]],
      'password':['',[Validators.required,Validators.minLength(6)]]
    })
  }

  ngOnInit(): void {
  }
 
  insertDetails(){
    let data = this.signupForm.getRawValue()
    console.log("User data",data);
    this.http.post('http://localhost:3001/signup',data).subscribe((res)=>{
      console.log(res);
      
      alert('User registered successfully')
      
    })
    this.router.navigateByUrl('/login')
    
  }

}
