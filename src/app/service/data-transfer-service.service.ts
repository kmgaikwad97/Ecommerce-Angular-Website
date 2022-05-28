import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataTransferServiceService {

  constructor() { }

  public objSub = new Subject();

  dataToTransfer(obj:object){
    console.log("Hello");
    console.log(obj);
    
    this.objSub.next(obj);
  }
}
