import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RecetasService } from './services/recetas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  recetas:any = [];
  receta:any = {};
  
  constructor(private recetaService: RecetasService){

  }

  ngOnInit(){
    this.recetaService.getRecetas().subscribe((data:any)=>{
      this.recetas = data;
    })
  }

  onClickReceta(path:string){
    this.recetaService.getRecetaDetail(path).subscribe((data:any)=>{
      this.receta = data;
    })
  }
}
