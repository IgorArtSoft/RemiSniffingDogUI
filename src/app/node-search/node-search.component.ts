import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { getFilesystem } from '../services/files.service';

@Component({
  selector: 'app-node-search',
  templateUrl: './node-search.component.html',
  styleUrls: ['./node-search.component.css']
})
export class NodeSearchComponent implements OnInit {
	files: TreeNode[];

	cols: any[];

	ngOnInit() {
		this.files = getFilesystem().data;

		this.cols = [
			{ field: 'name', header: 'Name' },
			{ field: 'size', header: 'Size' },
			{ field: 'type', header: 'Type' }
		];
  }
}  