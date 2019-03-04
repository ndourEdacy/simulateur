import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-simulateur',
  templateUrl: './type-simulateur.component.html',
  styleUrls: ['./type-simulateur.component.css']
})
export class TypeSimulateurComponent implements OnInit {

  constructor(private router: Router) {}
  redirectSimulateurAction() {
    this.router.navigate(['simulateurachat'] );
  }
  redirectSimulateurPlacement() {
    this.router.navigate(['simulateurplacement'] );
  }

  redirectSimulateurFcp() {
    this.router.navigate(['simulateurfcp'] );
  }
  redirectSimulateurEpargne() {
    this.router.navigate(['simulateurepargne'] );
  }

  ngOnInit() {
  }

}
