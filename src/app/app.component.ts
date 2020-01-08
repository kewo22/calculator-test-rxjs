import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  onNumClick(num:string) {
    const currNum: number = +num;
    (document.querySelector('#num') as HTMLInputElement).value += currNum.toString();
  }

  onOperationClick(op:string) {
    (document.querySelector('#ans') as HTMLInputElement).value = '';
    (document.querySelector('#num') as HTMLInputElement).value += op;

    switch(op){
      // case '+': (document.querySelector('#num') as HTMLInputElement).value +
    }

    (document.querySelector('#ans') as HTMLInputElement).value += (document.querySelector('#num') as HTMLInputElement).value;
  }
}
