import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  ngAfterViewInit() {
    const fbEditor = document.getElementById('fb-editor');
    const formBuilder = $(fbEditor).formBuilder();

    document.getElementById('getJSON').addEventListener('click', function () {
      alert(formBuilder.actions.getData('json'));
    });
  }

  getData() {
    var fbEditor = document.getElementById('fb-editor');
    var formBuilder = $(fbEditor).formBuilder();

    alert(formBuilder.actions.getData('json'));
  }
}
