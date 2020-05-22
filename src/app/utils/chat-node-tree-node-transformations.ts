import { TreeNode } from 'primeng/api/treenode';

import { ChatBotResponse } from '../models/chat-bot-response';
import { TreeNodeResponse } from '../models/tree-node-response';
import { ChatNode } from '../models/chat-node';
/*
* Utility class to convert ChatBotResponse from backend into PrimeNg technology specific one.
* @author Igor Artimenko

*/
export class ChatNodeTreeNodeTransformations {

    public transformChatNodeToTreeNode( chatBotResponse: ChatBotResponse): TreeNodeResponse {
      
        if( chatBotResponse == null ){
            return null;
        } else {   

            let treeNodeResponse: TreeNodeResponse = {};
            treeNodeResponse.allInformationRetrieved = chatBotResponse.allInformationRetrieved;

            if( chatBotResponse.chatNodes != null ){

                let retrievedTreeNodes: TreeNode[] = [];
                for (let index = 0; index < chatBotResponse.chatNodes.length; index++) {
                    let currentChatNode = chatBotResponse.chatNodes[index];
            
                    let currentTreeNode: TreeNode = this.convertChatToTreeNode( currentChatNode );
                    retrievedTreeNodes.push( currentTreeNode );  
                }
                treeNodeResponse.retrievedTreeNodes = retrievedTreeNodes;
            }

            return treeNodeResponse;            
        }

    }

    public convertChatToTreeNode( chatNode: ChatNode ): TreeNode{
        let treeNode: TreeNode;

        if( chatNode != null ){

            treeNode = {
                label: chatNode.name,
                leaf: false,
                expanded: false,
                selectable:true,                    
                key: chatNode.id
                };

            treeNode.parent = {
                leaf: false,
                expanded: false,
                selectable:true,                    
                key: chatNode.parentId
            };

            treeNode.children = this.converChildrenChatToTreeNode( chatNode.children );

        }

        return treeNode;
    };

    public converChildrenChatToTreeNode( chatChildren: ChatNode[] ): TreeNode[]{
        let childrenNodes: TreeNode[];
        if( chatChildren!= null ){
            childrenNodes = [];
            for (let i = 0; i < chatChildren.length; i++) {           
                childrenNodes.push( this.convertChatToTreeNode( chatChildren[i] ) );
            }
        }

        return childrenNodes;
    }

    public toString( tN: TreeNode ){
        console.log( "key: " + tN.key + ", label:" + tN.label + ", leaf:" + tN.leaf 
            + ", expanded:" + tN.expanded + ", selectable:" + tN.selectable + ", children:" + tN.children?.length );
    }
}
