import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  error:string='';

  registerForm = new FormGroup({
    first_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    last_name:new FormControl(null,[Validators.minLength(3),Validators.maxLength(10),Validators.required]),
    age:new FormControl(null,[Validators.required,Validators.min(16),Validators.max(80)]),
    email:new FormControl(null, [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })


  constructor(private _authService:AuthService, private _router:Router)
  {

  }


  submitRegisterForm(registerForm:FormGroup){
    this._authService.register(registerForm.value).subscribe((response)=>{
      if(response.message=='success')
      {
        this._router.navigate(['/login']);
      }
      else
      {
        this.error = response.errors.email.message
      }
    })

  }
  ngOnInit(): void {

  }



}
