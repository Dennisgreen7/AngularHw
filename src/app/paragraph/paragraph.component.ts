import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  GetParagraph() {
    var paragraphValue: string = "Real Madrid, is a Spanish professional football club based in Madrid.Founded on 6 March 1902 as Madrid Football Club, the club has traditionally worn a white home kit since inception. The honorific title real is Spanish for royal and was bestowed to the club by King Alfonso XIII in 1920 together with the royal crown in the emblem. The team has played its home matches in the 81,044-capacity Santiago Bernabéu Stadium in downtown Madrid since 1947. Unlike most European sporting entities, Real Madrid members (socios) have owned and operated the club throughout its history.";
    return paragraphValue;
  }
}
