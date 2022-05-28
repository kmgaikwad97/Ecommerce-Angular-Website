import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http:HttpClient) { }

  getData(keyname:string){
    return this.http.get(environment.apiPath + keyname)
  }

  postData(keyname:string, data:any){
    return this.http.post(environment.apiPath + keyname, data)
  }

  updateData(keyname:string, data:any){
    return this.http.put(environment.apiPath + keyname, data)
  }

  deleteData(keyname:string){
    return this.http.delete(environment.apiPath + keyname)
  }


}
