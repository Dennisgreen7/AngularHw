import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   imgWidth: string = "100";
   imgHeight: string ="100";
  GetImg(){
    var imgSrc:string ="https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/1200px-Real_Madrid_CF.svg.png";
    return imgSrc;
  }

}
