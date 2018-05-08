import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @Input() post;

  constructor() { }

  ngOnInit() {
  }

  onLike() {
    this.post.loveIts ++;
    alert("Vous avez aimé \""+ this.post.title + "\" ! Super !");
  }
  onDislike() {
    this.post.loveIts --;
    alert("Vous n'avez pas aimé \""+ this.post.title + "\" ! Dommage !");
  }

}
