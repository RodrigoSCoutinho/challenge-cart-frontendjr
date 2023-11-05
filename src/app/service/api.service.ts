import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // Chamada a API produtos e criacao de um metodo para ser chamado la no componente produto

  constructor(private http : HttpClient) { }
     getProduct(){
        return this.http.get<any>("https://fakestoreapi.com/products")
        .pipe(map((res:any) => {
           return res
        }))
     }
}
