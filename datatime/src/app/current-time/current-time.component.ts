import { Component, OnInit, OnDestroy } from '@angular/core';


@Component({

  selector: 'app-current-time',

  templateUrl: './current-time.component.html',

  styleUrls: ['./current-time.component.css']

})

export class CurrentTimeComponent implements OnInit, OnDestroy {

  currentTime: string = '';

  intervalId: any;


  ngOnInit(): void {

    this.updateTime();

    this.intervalId = setInterval(() => {

      this.updateTime();

    }, 1000);

  }


  updateTime(): void {

    const now = new Date();

    this.currentTime = now.toLocaleString();

  }


  ngOnDestroy(): void {

    if (this.intervalId) {

      clearInterval(this.intervalId);

    }

  }

}