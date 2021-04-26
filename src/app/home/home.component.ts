import { Component, OnInit, ComponentFactoryResolver, ViewChild, ViewContainerRef } from '@angular/core';
import { TextComponent } from '../dynamicComponents/text/text.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  @ViewChild('textData', {static: true, read: ViewContainerRef} ) textData: ViewContainerRef;
  error: boolean;
  ngOnInit() {
  }

  addText() {
    console.log('sdsd')
    const textComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TextComponent)
    this.textData.createComponent(textComponentFactory)
    
  }
  addAlert() {
    this.error = true;
  }
  addTable() {

  }
}
