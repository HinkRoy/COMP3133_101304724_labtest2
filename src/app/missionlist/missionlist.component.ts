import { Component, OnInit } from '@angular/core';
import { SpacexService } from '../spacex.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  launches: any[] = [];

  constructor(private spacexService: SpacexService) { }

  ngOnInit(): void {
    this.spacexService.getAllLaunches().subscribe(data => {
      this.launches = data;
    });
  }
}

