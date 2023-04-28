import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  error:string='';

  loginForm = new FormGroup({
    email:new FormControl(null, [Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required]),
  })
  ngOnInit(): void {

  }

  constructor(private _AuthService:AuthService,private _router:Router){}

  submitloginForm(loginForm:FormGroup)
  {
    this._AuthService.login(loginForm.value).subscribe((response)=>{
      if (response.message=='success')
      {
        localStorage.setItem("userToken",response.token);
        this._AuthService.saveCurrentUser();
        this._router.navigate(['/home']);
      }
      else
      {
        this.error=response.message;
      }
    })
  }

}
