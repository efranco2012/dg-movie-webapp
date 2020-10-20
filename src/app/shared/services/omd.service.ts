import { Injectable } from '@angular/core';
import { HttpClient, HttpParams,  } from '@angular/common/http';
import { OmdApi, OmdTypes } from 'src/app/shared/models/omd.constants';

@Injectable({
  providedIn: 'root'
})
export class OmdService {

  constructor(private http:HttpClient) { }

  private setParams(param){
    let params = new HttpParams();
    params = params.append(OmdTypes.API, OmdApi.KEY);
    params = params.append(param.type, param.value);
    return params;
  }

  getSearchResults(title){
    let searchParam = this.setParams({type: OmdTypes.SEARCH, value: title});
    return this.http.get(OmdApi.URL, {params: searchParam});
  }

  getMovieDetails(imdbID){
    let movieParams = this.setParams({type: OmdTypes.INFORMATION, value: imdbID});
    return this.http.get(OmdApi.URL, {params: movieParams});
  }
}
