import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ChatBotResponse } from "../models/chat-bot-response";
import { TreeNodeResponse } from '../models/tree-node-response';
import { ChatNodeTreeNodeTransformations } from '../utils/chat-node-tree-node-transformations';


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

  private chatTreeNodeTransformation = new ChatNodeTreeNodeTransformations();

  constructor(private _http: HttpClient) { }

  // getChatNodes( nodeName: string ): Observable<TreeNodeResponse> {

  //   let params = new HttpParams().set( 'name', ( nodeName ) ? nodeName: '' );
  //   let chatBotResponse$: Observable<ChatBotResponse>;
  //   chatBotResponse$ = this._http.get<ChatBotResponse>( this.chatNodesUrl, { headers: this.headers, params: params } );
    
  //   let treeNodeResponse$: Observable<TreeNodeResponse>;
  //   treeNodeResponse$ = chatBotResponse$.pipe(
  //     map((chatBotResponse: ChatBotResponse ) => 
  //     this.chatTreeNodeTransformation.transformChatNodeToTreeNode( chatBotResponse ))
  //   );
   
  //   return treeNodeResponse$;

  // }

  // getNode( id: string ): Observable<ChatBotResponse>{
  //   return this._http.get<ChatBotResponse>( this.nodeUrl + id , { headers: this.headers } );
  // }

  getChatNodes( nodeName: string ): Observable<ChatBotResponse> {

    let params = new HttpParams().set( 'name', ( nodeName ) ? nodeName: '' );

    return this._http.get<ChatBotResponse>( this.chatNodesUrl, { headers: this.headers, params: params } );
      
  }

  getNode( id: string ): Observable<ChatBotResponse>{
    return this._http.get<ChatBotResponse>( this.nodeUrl + id , { headers: this.headers } );
  }

}