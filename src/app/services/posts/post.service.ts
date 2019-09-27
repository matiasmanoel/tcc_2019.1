import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { tap } from 'rxjs/operators';
/* 
geralmente o que importamos aqui, como a utilização do HttpCLient, como estamos fazendo o 'provided:root', 
precisamos importar no AppModule.
*/

@Injectable({
  providedIn: 'root'
})
/* 
a partir do angular 5, está vindo com o Injectable providedIn: 'root', 
para que n precisamo mais injetar nos providers dos módulos, o angular faz sozinho agora, 
*/

export class PostService {
/* 
Uma das grandes mudanças entre o http e o httpclient, é que com o HttpClient, não precisamos transformar 
o JSON manualmente, o angular já faz o "aplication/json" igual fizemos no arquivo 'db-exemplo.http'.
*/

private readonly API = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Post[]>(this.API)
    //caso precise debugar faça ↓↓↓
    .pipe(
      //tap é o antigo 'do'
      tap(console.log)
    );
  }
}
