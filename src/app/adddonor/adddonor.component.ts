import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adddonor',
  templateUrl: './adddonor.component.html',
  styleUrls: ['./adddonor.component.css']
})
export class AdddonorComponent implements OnInit {

  constructor() { }

  name=""
  blood=""
  dob=""
  ddate=""
  deseases=""
  vdate=""
  address=""
  pincode=""
  mobile=""
  email=""

  viewValues=()=>{
    let data={
      "name":this.name,
      "blood":this.blood,
      "dob":this.dob,
      "ddate":this.ddate,
      "deseases":this.deseases,
      "vdate":this.vdate,
      "address":this.address,
      "pincode":this.pincode,
      "mobile":this.mobile,
      "email":this.email
    }
    console.log(data)
  }

  ngOnInit(): void {
  }

}
