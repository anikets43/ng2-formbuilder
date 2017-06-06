import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';

  options = {
    defaultFields: [{
      className: 'form-control',
      label: 'First Name',
      placeholder: 'Enter your first name',
      name: 'first-name',
      required: true,
      type: 'text'
    }, {
      className: 'form-control',
      label: 'Select',
      name: 'select-1454862249997',
      type: 'select',
      multiple: 'true',
      values: [{
        label: 'Custom Option 1',
        value: 'test-value'
      }, {
        label: 'Custom Option 2',
        value: 'test-value-2'
      }]
    }, {
      label: 'Radio',
      name: 'select-1454862249997',
      type: 'radio-group'
    }]
  };


  ngAfterViewInit() {
    const fbEditor = document.getElementById('fb-editor');
    const formBuilder = $(fbEditor).formBuilder(this.options);

    document.getElementById('getJSON').addEventListener('click', function () {
      alert(formBuilder.actions.getData('json'));
    });
  }

  getData() {
    const fbEditor = document.getElementById('fb-editor');
    const formBuilder = $(fbEditor).formBuilder();

    alert(formBuilder.actions.getData('json'));
  }
}
