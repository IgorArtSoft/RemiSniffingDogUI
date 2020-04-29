import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { ChatBotResponse } from "../models/chat-bot-response";

@Injectable({
  providedIn: 'root'
})
export class ChatBotServiceService {

  private chatNodesUrl = `${environment.chatNodeDataUrl}chatnodes`;
  private nodeUrl = `${environment.chatNodeDataUrl}node`;
  
  private headers = new HttpHeaders()
  .set( 'Content-Type', 'application/json' )
  .set( 'Access-Control-Allow-Origin', '*') 
  ;

  constructor(private _http: HttpClient) { }

  getChatNodes( nodeName: string ): Observable<ChatBotResponse> {

    let params = new HttpParams().set( 'name', ( nodeName ) ? nodeName: '' );

    return this._http.get<ChatBotResponse>( this.chatNodesUrl, { headers: this.headers, params: params } );
      
  }

  getNode( id: string ): Observable<ChatBotResponse>{
    return this._http.get<ChatBotResponse>( this.nodeUrl + id , { headers: this.headers } );
  }

}
