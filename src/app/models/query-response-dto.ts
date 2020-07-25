import { CustomerInformation } from './customer-information';
import { ArrayType } from '@angular/compiler';

export class QueryResponseDTO {
    list:CustomerInformation[];
    totalNoOfPages:number;
    currentPageNumber:number;
}
