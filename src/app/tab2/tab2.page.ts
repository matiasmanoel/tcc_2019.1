import { PostService } from './../services/posts/post.service';
import { Component } from '@angular/core';

import { FotosService } from './../services/fotos.service';
import { Post } from '../services/posts/post';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  posts: Post[];
  titulo : any;
  descricao : any;

  constructor(public foto_serv: FotosService, private service: PostService) {}

  ngOnInit(){
    // this.foto_serv.carregarFotos();
    this.service.list().subscribe( dados => this.posts = dados);
  }
}
