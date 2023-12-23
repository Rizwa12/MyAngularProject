import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  intervalId: any;

  ngOnInit() {
    // this.startAutomaticMovement();
  }

  // startAutomaticMovement() {
  //   // Set up a timer to automatically move every 5 seconds (adjust as needed)
  //   this.intervalId = setInterval(() => {
  //     this.nextCustomer();
  //   }, 5000); // 5000 milliseconds = 5 seconds
  // }

  customers = [
    {
      name: 'Moana Michell',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      additionalInfo: 'magna aliqua',
      imagePath: 'assets/images/client1.jpg'
    },
    {
      name: 'Mike Hamell',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
      additionalInfo: 'magna aliqua',
      imagePath: 'assets/images/client2.jpg'
    },
    // Add more customer objects as needed
  ];

  currentindex: any = 0;

  // stopAutomaticMovement() {
  //   // Stop the automatic movement timer
  //   clearInterval(this.intervalId);
  // }

  nextCustomer() {
    this.swapCustomers(1);
  }

  prevCustomer() {
    debugger
    this.swapCustomers(-1);
  }

  private swapCustomers(offset: number) {
    debugger;

    // Save the current customer
    const currentCustomer = this.customers[this.currentindex];
    console.log(this.customers.length);

    // Calculate the new index after swapping
    
    let newIndex = (this.currentindex + offset + this.customers.length) % this.customers.length;

    // Swap the current customer with the one at the new index
    this.customers[this.currentindex] = this.customers[newIndex];
    this.customers[newIndex] = currentCustomer;

    // Update the current index
    this.currentindex = newIndex;
  }
}
