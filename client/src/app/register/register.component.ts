// import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // @Input() usersFromHomeComponent: any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  // users: any;

  constructor(private acountService: AccountService, private toastr: ToastrService/*private http: HttpClient*/) { }

  ngOnInit() {
    // this.getUsers();
  }

  register() {
    this.acountService.register(this.model).subscribe(response => {
      console.log(response);
      this.cancel();
    }, error => {
      //     console.log(error)
      this.toastr.error(error.error);      
    });
  }

  cancel() {
    // console.log("cancelled");
    this.cancelRegister.emit(false);
  }

  // getUsers() {
  //   this.http.get('https://localhost:5001/api/users').subscribe(users => this.users = users);
  // }
}
