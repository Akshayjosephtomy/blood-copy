import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchdonor',
  templateUrl: './searchdonor.component.html',
  styleUrls: ['./searchdonor.component.css']
})
export class SearchdonorComponent implements OnInit {

  constructor() { }

  blood=""

  viewSearch=()=>{
    let data={
      "blood":this.blood
    }
    console.log(data)
  }


  ngOnInit(): void {
  }

}
