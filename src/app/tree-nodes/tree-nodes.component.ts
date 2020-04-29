import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { environment } from '../../environments/environment';
import { ChatBotResponse } from '../models/chat-bot-response';
import { ChatNode } from "../models/chat-node";
import { ChatBotServiceService } from '../services/chat-bot-service.service';

@Component({
  selector: 'app-tree-nodes',
  templateUrl: './tree-nodes.component.html',
  styleUrls: ['./tree-nodes.component.css']
})
export class TreeNodesComponent implements OnInit{

	private searchStringMinLength: number;
	searchForm: FormGroup;

  	treeControl = new NestedTreeControl<ChatNode>( node => node.children );
  	dataSource = new MatTreeNestedDataSource<ChatNode>();

	constructor( private formBuilder: FormBuilder, private _chatBotServiceService: ChatBotServiceService ) { 
	}

	ngOnInit(){
		this.searchStringMinLength = Number( `${environment.searchStringMinLength}` );
		this.searchForm = this.formBuilder.group({
			chatBotNodeName: [null, [ Validators.required, Validators.minLength( this.searchStringMinLength )]]
		});
	}

	hasChildCategories = (_: number, node: ChatNode) => !!node.children && node.children.length > 0;

	onSubmit( nodeSearchForm: any ){
		console.log( 'you submitted value: ', nodeSearchForm.chatBotNodeName + "  "  + this.searchForm.valid);
		if ( this.searchForm.valid ) {
			this._chatBotServiceService.getChatNodes( nodeSearchForm.chatBotNodeName )
			.subscribe( (treeData: ChatBotResponse) => {
				this.dataSource.data = treeData.chatNodes;
			} );
		}

	}

}