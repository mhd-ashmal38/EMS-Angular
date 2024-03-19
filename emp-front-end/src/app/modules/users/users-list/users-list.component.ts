import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { userSchema } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  // property
  allusers: userSchema[] = []

  searchKey:string=""

  today=new Date()

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    this.getUserList()
  }

  // when userlist page open, display all users from json file


  // to get details of employees - create a function
  getUserList() {
    this.api.getallUsers().subscribe({
      next: (result: any) => {
        console.log(result);
        // assign api response to class property
        this.allusers=result

      },
      error: (res: any) => {
        console.log(res);

      }
    })
  }

  deleteUser(id:any){
    this.api.deleteUser(id).subscribe({
      next:(res:any)=>{
        // after delete a single person show others in table
        this.getUserList()

      },
      error:(err:any)=>{
        alert("Cannot perform the action now")
      }
    })
  }

}
