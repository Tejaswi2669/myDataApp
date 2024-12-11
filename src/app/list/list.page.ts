import { Component } from '@angular/core';
import { DataItem, DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  items: DataItem[] = [];


  constructor(private dataService: DataService, private router: Router) { }
  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.dataService.getItems().subscribe(
      (data) => {
        this.items = data;
      },
      (error) => {
        console.error('Error fetching items:', error);
      }
    );
  }


  ionViewWillEnter() {
    this.loadItems();
    this.dataService.getItems().subscribe(items => {
      this.items = items;
    });    
  }

  editItem(id: number) {
    this.router.navigate(['/edit', id]);
  }

  deleteItem(id: number) {
    this.dataService.deleteItem(id).subscribe(
      () => {
        this.items = this.items.filter(item => item.id !== id); // Update the list locally
      },
      (error) => {
        console.error('Error deleting item:', error);
      }
    );
  }

  
}
