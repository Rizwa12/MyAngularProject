import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  filter: string = 'all'; // Default filter value

  menuItems = [
    { category: 'pizza', name: 'Delicious Pizza', price: 20, image: 'assets/images/f1.png' },
    { category: 'burger', name: 'Delicious Burger', price: 15, image: 'assets/images/f2.png' },
    { category: 'pizza', name: 'Delicious Pizza', price: 17, image: 'assets/images/f3.png' },
    {category:'pasta',name:'Delicious Pasta',price:10,image:'assets/images/f4.png'},
    {category:'fries',name:'French Fries',price:10,image:'assets/images/f5.png'},
    { category: 'pizza', name: 'Delicious Pizza', price: 15, image: 'assets/images/f6.png' },
    { category: 'burger', name: 'Tasty Burger', price: 12, image: 'assets/images/f7.png' },
    { category: 'burger', name: 'Tasty Burger', price: 14, image: 'assets/images/f8.png' },
    { category: 'pasta', name: 'Delicious Pasta', price: 10, image: 'assets/images/f9.png' },

    // Add more menu items as needed
  ];

  filteredMenuItems() {
    debugger;
    if(this.filter == 'all')
    {
      return this.menuItems;
    }
    else
    {
      return this.menuItems.filter(x=>x.category === this.filter);
    }
  }
}
