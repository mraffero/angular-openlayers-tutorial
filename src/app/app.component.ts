import { Component, OnInit } from '@angular/core';
// import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { Map } from './ol/map';
import { BaseLayerService } from './ol/baselayer.service';
import { first } from 'rxjs/operators';
import { StandardBackground } from './ol/standard-backgrounds';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  mapComp: any;
  map: any;

  constructor(
    private baseLayerService: BaseLayerService,
    // private standardBackground: StandardBackground

  ){

  }

  ngOnInit(): void {
    
    this.mapComp = new Map();
    this.map = this.mapComp.olMap;
    this.baseLayerService.getBaseLayers()
        .pipe(first())
        .subscribe(
          (layers: any) => {
            const olLayers = StandardBackground.createBaseLayers(layers);
            this.map.getLayers().extend(olLayers);
          })
          
  }
}
