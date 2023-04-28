import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) {

   }

   getTrending(mediaType:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=84c7b8810b83fbdf21cb35383022cb6b`);
   }

   getMovieDetails(id:string):Observable<any>
   {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=84c7b8810b83fbdf21cb35383022cb6b&language=en-US`);
   }
}
