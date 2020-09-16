import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { environment } from '../../environments/environment';
import { TrackerService } from '../tracker.service';
import * as mapboxgl from 'mapbox-gl';
import { FlightsRequest } from '../models/index';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/dark-v9';
  lat = 38.776246;
  lng = -9.135281;

  constructor(private trackerService: TrackerService) {}

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 8,
      center: [this.lng, this.lat],
    });
    this.map.addControl(new mapboxgl.NavigationControl());
    this.trackerService
      .getAllFlights()
      .subscribe((result) =>
        this.drawAirplanes(<FlightsRequest>(<unknown>result))
      );
  }

  drawAirplanes(flights: FlightsRequest): void {
    flights.data.forEach((flight) => {
      if (flight.live !== null && flight.live !== undefined) {
        const marker = new mapboxgl.Marker()
          .setLngLat([flight.live.longitude, flight.live.latitude])
          .addTo(this.map);
      }
    });
  }
}
