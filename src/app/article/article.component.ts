import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [NgFor],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css',
})
export class ArticleComponent implements OnInit {
  /*
  In Angular, a component host is the element this component is attached to. We can set properties on
  the host element by using the @HostBinding() decorator. In this case, we’re asking Angular to keep the
  value of the host elements class to be in sync with the property cssClass.
  */

  @HostBinding('attr.class') cssClass = 'row';
  @Input()
  article!: Article; //MODIFICADO 02/06

  constructor() {
    // this.article = new Article('Angular', 'http://angular.io', 10);
    //article is populated by the Input now
    // so we don't need anything here
  }

  voteUp(): boolean {
    this.article.voteUp();
    return false;
  }

  voteDown(): boolean {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {}
}
