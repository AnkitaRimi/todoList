import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {
loginForm:FormGroup;

  constructor(private formbuilder:FormBuilder,
    private router:Router) { }

  ngOnInit() {
    this.loginForm=this.formbuilder.group({
      name:['',[Validators.required,Validators.minLength(5)]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }
  get name(){
  return this.loginForm.get('name');
  }
  get password(){
    return this.loginForm.get('password');
      }
  onsubmit(){
    console.log("submit");
    localStorage.setItem('userData',JSON.stringify(this.loginForm.value)); // set user data
    this.router.navigate(['/todo/todo-list'],{replaceUrl:true})
  }
}
