import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {
  @Input() error;
  @Output() close =  new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onCloseClick() {
    console.log('hie')
    this.close.emit();
  }
}
