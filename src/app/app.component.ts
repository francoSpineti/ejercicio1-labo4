import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejercicio-1';

  promedio : number = 0;
  suma : number = 0;
  edadUno : string = "";
  edadDos : string = "";

  sumar(){
    this.edadUno = (<HTMLInputElement>document.getElementById("edadUno")).value;
    this.edadDos = (<HTMLInputElement>document.getElementById("edadDos")).value; 
    this.suma = (parseInt(this.edadUno) + parseInt(this.edadDos));
    this.promedio = (this.suma/2);
  }

  limpiar(){
    let elementos : any = document.getElementsByName("general");
    for(let i=0; i < elementos.length; i++){
        elementos[i].value ="0";
    }
  }

}
