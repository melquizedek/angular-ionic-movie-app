import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

	@Input() totalPages: number;
	pages: any[] = null;
	page: any = 1;

	constructor() { 
		console.log(this.page);
	}

	ngOnInit() {
		setTimeout(() => {
			this.pages = this.pagination(1, this.totalPages);
			console.log('generated pagination', this.pages, 'totalPages', this.totalPages);
		}, 1000);
	}

	selectedPage(e) {
		console.log('currentPage', e);
		this.pages = this.pagination(e, this.totalPages);
	}

	private pagination(c, m) : any[] {
		var current = c,
			last = m,
			delta = 2,
			left = current - delta,
			right = current + delta + 1,
			range = [],
			rangeWithDots = [],
			l;

		for (let i = 1; i <= last; i++) {
			if (i == 1 || i == last || i >= left && i < right) {
				range.push(i);
			}
		}

		for (let i of range) {
			if (l) {
				if (i - l === 2) {
					rangeWithDots.push(l + 1);
				} else if (i - l !== 1) {
					rangeWithDots.push('...');
				}
			}
			rangeWithDots.push(i);
			l = i;
		}

		return rangeWithDots;
	}

}
