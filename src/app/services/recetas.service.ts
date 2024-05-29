import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  constructor(private _http:HttpClient) { }


  getRecetas(){
    const URL = 'https://recipe-book2.p.rapidapi.com/recipes-popular'
    const httpOptions = {
      headers: {
        'x-rapidapi-key': 'e0cf639359msh75c7747f5adb418p1b1a16jsn0e779fe7bce9',
        'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
      }
    }
    return this._http.get(URL, httpOptions);
  }

  getRecetaDetail(path:string){
    const URL = `https://recipe-book2.p.rapidapi.com/recipe-details?path=${path}`
    const httpOptions = {
      headers: {
        'x-rapidapi-key': 'e0cf639359msh75c7747f5adb418p1b1a16jsn0e779fe7bce9',
        'x-rapidapi-host': 'recipe-book2.p.rapidapi.com'
      }
    }
    return this._http.get(URL, httpOptions);
  }
}
