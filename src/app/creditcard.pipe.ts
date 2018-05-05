import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'creditcard'
})
export class CreditcardPipe implements PipeTransform {
	transform(value: string, args?: any): any {
		const newvalue = value.substring(11, 15);
	}
}
