import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Card } from 'src/app/card';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
selectedCard:any[] =[];
card1:any;
names:any;
zea:any[]=[];
namesCount:number;
item:any;
z:number=0;
searchText:FormControl =new FormControl('');
  constructor() { 
    this.card1 = this.cards;
  }
    cards: Card[] = [
      { id: 1, inscription: '1', isSelected: false },
      { id: 2, inscription: '2', isSelected: false },
      { id: 3, inscription: '3', isSelected: false },
      { id: 4, inscription: '4', isSelected: false },
      { id: 5, inscription: '5', isSelected: false },
      { id: 6, inscription: '6', isSelected: false },
      { id: 7, inscription: '7', isSelected: false },
      { id: 8, inscription: '8', isSelected: false },
      { id: 9, inscription: '5', isSelected: false },
      { id: 10, inscription: '5', isSelected: false },
      { id: 11, inscription: '8', isSelected: false },
      { id: 12, inscription: '5', isSelected: false },
      { id: 13, inscription: '5', isSelected: false },
      { id: 14, inscription: '5', isSelected: false },
      { id: 15, inscription: '5', isSelected: false },
      { id: 16, inscription: '5', isSelected: false },
      { id: 17, inscription: '5', isSelected: false },
   
  
    ];
   
  ngOnInit(): void {

    this.searchText.valueChanges.subscribe(
      term => {
        if (term != '') { 
      this.cards = this.card1.filter(p => p.inscription.includes(term));
    }
      else{
        this.cards = this.card1;
      }

    })

  this.names = Array.from(new Set(this.cards.map(p => p.inscription)));
    this.namesCount = this.names.length;
    debugger
    this.cards.forEach(element => {
      if(this.zea.find(item => item.id == element.inscription)){
       this.zea.find(item => item.id == element.inscription).count++;
        if( this.zea.find(item => item.id == element.inscription).count== 2)
        this.z++    
      }
      else{
        this.zea.push( { id: element.inscription, count: 1 }) 
      }
debugger
});


  
  }
  
  selectedCards: Card[] = [];


  onCardClick(card: Card) {
    card.isSelected = !card.isSelected;
    if (card.isSelected) {
      this.selectedCards.push(card);
    } else {
      const index = this.selectedCards.indexOf(card);
      if (index >= 0) {
        this.selectedCards.splice(index, 1);
      }
    }
  }

  notSelect(){
this.cards=this.card1.filter(e=>e.isSelected==false)  }
  selectedCardc(){
  this.cards=this.selectedCards;
  }
  all(){
    
this.cards=this.card1;
  }
}
