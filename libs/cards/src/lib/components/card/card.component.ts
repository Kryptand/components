import {
  ContentChild,
  AfterContentChecked,
  Component,
  OnInit
} from '@angular/core';
import { CardContentDirective } from '../../directives/card-content.directive';
import { CardFooterDirective } from '../../directives/card-footer.directive';
import { CardHeaderDirective } from '../../directives/card-header.directive';
import { CardImageDirective } from '../../directives/card-image.directive';

@Component({
  selector: 'bulma-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, AfterContentChecked {
  @ContentChild(CardContentDirective,{static:true}) content: CardContentDirective | null;
  @ContentChild(CardFooterDirective,{static:true}) footer: CardFooterDirective | null;
  @ContentChild(CardHeaderDirective,{static:true}) header: CardHeaderDirective | null;
  @ContentChild(CardImageDirective,{static:true}) image: CardImageDirective | null;
  constructor() {}

  ngOnInit() {}
  ngAfterContentChecked() {
    console.debug(this.content);
    console.debug(this.footer);
    console.debug(this.header);
  }
}
