import { Component } from '@angular/core';

@Component({
    selector : 'app-server', // this is a Element Selector
    //selector : '[app-server]', // This is a Attribute Selector

    /* Attribute Selector :
    We can use Attribute as selector to use or render the 
    component content as well as Element by declare it in []  */

    //selector : '.app-server', // This is a Class Selector.

    /* Class Selector :
    We can also use Class as selector to use or render the 
    component content as well as Element by declare it with '.'  */
    

    templateUrl : './server.component.html'
    
})
export class ServerComponent{
  serverId:number = 10;
  serverStatus:string = 'offline';
}