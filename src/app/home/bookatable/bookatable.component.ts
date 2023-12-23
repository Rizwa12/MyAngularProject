import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-bookatable',
  templateUrl: './bookatable.component.html',
  styleUrls: ['./bookatable.component.css']
})
export class BookatableComponent implements OnInit{
  display:any;
  ngOnInit(): void {}
  center:google.maps.LatLngLiteral = {
    lat:24,
    lng:12
  };
  zoom = 4;
  moveMap(event: google.maps.MapMouseEvent) {
    debugger;
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}
move(event:google.maps.MapMouseEvent){
  debugger;
  if(event.latLng!=null) this.display =  event.latLng.toJSON();
}
}
