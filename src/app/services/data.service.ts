import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface DataItem {
  id?: number;
  name: string;
  itemDetails: string;
  amountPaid: number;
  actualAmount: number;
  phoneNumber: string;
  userName: string;
}


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private apiUrl = environment.apiUrl + '/items';

  constructor(private http: HttpClient) {}

  getItems(): Observable<DataItem[]> {
    return this.http.get<DataItem[]>(this.apiUrl);
  }

  getItemById(id: number): Observable<DataItem> {
    return this.http.get<DataItem>(`${this.apiUrl}/${id}`);
  }

  addItem(item: DataItem): Observable<DataItem> {
    console.log(JSON.stringify(item));
    return this.http.post<DataItem>(this.apiUrl, item);
  }

  updateItem(id: number, item: DataItem): Observable<DataItem> {
    console.log(JSON.stringify(item));
    return this.http.put<any>(`${this.apiUrl}/${id}`, item);
  }

  deleteItem(id: number): Observable<void> {
    console.log(JSON.stringify(id));
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
