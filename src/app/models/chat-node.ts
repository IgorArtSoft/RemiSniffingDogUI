export interface ChatNode {
   id: string;
   name: string;
   parentId?: string;
   
   children?: ChatNode[];
   
}
