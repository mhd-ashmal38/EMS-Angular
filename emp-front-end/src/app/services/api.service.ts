import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { userSchema } from '../modules/users/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  base_url: string = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  // to get admin details
  adminDetails() {

    // api call to http://localhost:3000/users/1
    return this.http.get(`${this.base_url}/users/1`)
  }

  // get all users -- to get all user data from json file
  getallUsers() {
    // api call to this url -- http://localhost:3000/users
    return this.http.get(`${this.base_url}/users`)
  }


  // add user

  addUser(user: userSchema) {
    // api call to this url :: http://localhost:3000?users
    return this.http.post(`${this.base_url}/users`, user)
  }


  // get existing user (single person)

  getexisting(id: any) {
    return this.http.get(`${this.base_url}/users/${id}`)
  }


  // update user
  updateUser(id:any,data:userSchema){
    return this.http.put(`${this.base_url}/users/${id}`,data)
  }

  // delete user
  deleteUser(id:any){
    return this.http.delete(`${this.base_url}/users/${id}`)
  }

}



