import { Component } from '@angular/core';
import { Footer } from '../footer/footer';
import { Nav } from '../nav/nav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterModule,Footer,Nav],
  templateUrl: './layout.html',
  styleUrl: './layout.css'
})
export class Layout {

}
