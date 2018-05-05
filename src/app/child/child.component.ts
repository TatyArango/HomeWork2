import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: [ './child.component.scss' ]
})
export class ChildComponent implements OnInit {
	@Input() user;
	@Output() deleteUser = new EventEmitter<number>();
	constructor() {}

	ngOnInit() {}

	onDeleteUser(userId: number) {
		this.deleteUser.emit(userId);
	}
}
