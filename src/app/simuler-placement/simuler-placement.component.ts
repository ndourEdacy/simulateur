import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-simuler-placement',
  templateUrl: './simuler-placement.component.html',
  styleUrls: ['./simuler-placement.component.css']
})
export class SimulerPlacementComponent implements OnInit {
  nombreDeMoi = 24;
  montantTotalPlacement = 0;
  montantPlacement = 100000;
  montantPlacementOpti = 0;
  maturiteOpti = 12;
  montantOptiEspere = 0;
  montantEspere = 0;
  montantCombinaisonEspere = 0;
  gainEspere = 0;
  iscombinaison = true ;
  pourcentageRendementQuitude = 5.00 ;
  pourcentageRendementOptimum = 5.25 ;
  typePlacement = {
      'typePlacement': 'quietude',
      'pourcentageRendement': 5.00
  };
  montantparMoi: Array<number> = [];
  constructor() { }
  public pieChartLabels: string[] = ['Pending', 'InProgress', 'OnHold', 'Complete', 'Cancelled'];
  public pieChartData: number[] = [21, 39, 10, 14, 16];
  public pieChartType: string = 'line';
  public pieChartOptions: any = {'backgroundColor': [
                                '#FF6384',
                                '#4BC0C0',
                                '#FFCE56',
                                '#E7E9ED',
                                '#36A2EB'
                              ]};

      public chartClicked(e: any): void {
        console.log(e);
      }
      public chartHovered(e: any): void {
        console.log(e);
      }
    ngOnInit() { }

    public onChangePlacement(even) {
      if ( even === 'quietude') {
      this.typePlacement.pourcentageRendement = 5;
      this.iscombinaison = true ;
      }
      else if (even === 'optimum') {
        this.typePlacement.pourcentageRendement = 5.25;
        this.iscombinaison = true ;
      }
      else if ( even === 'cumule') {
        this.iscombinaison = false ;
        this.typePlacement.pourcentageRendement = 5;
      }

    }

   public  getMontantPlacement( val ) {
      this.montantPlacement = val;
      this.montantTotalPlacement = this.nombreDeMoi * val;
      console.log( val );
      this.calculMontant();
    }

    public getMaturite( val ) {
      this.montantTotalPlacement = this.montantTotalPlacement * val;

      this.calculMontant();
    }

    public getMaturiteOptimum(val) {
      this.montantTotalPlacement = this.montantTotalPlacement * val;

      this.calculMontant();
    }

    public  getMontantPlacementOptimum( val ) {
      this.montantPlacementOpti = val;
      this.montantTotalPlacement = this.nombreDeMoi * val;
      console.log( val );
      this.calculMontant();
    }


    public getData() {
      for ( let i = 1 ; i <= this.nombreDeMoi ; i++) {
        const m = this.montantPlacement * i + (this.montantPlacement * i * this.typePlacement.pourcentageRendement / 100 ) ;
        this.montantparMoi.push(m);
        console.log(this.montantparMoi);
      }
    }

    public clean() {
      this.montantPlacementOpti = 0;
      this.montantTotalPlacement = 0;
      this.montantPlacement = 0 ;
      this.gainEspere  = 0 ;
      this.montantEspere = 0 ;

    }
    public  calculMontant() {
      this.montantTotalPlacement = this.montantPlacement * this.nombreDeMoi ;

      if ( this.typePlacement.typePlacement === 'cumule' ) {
        this.montantEspere =  this.montantPlacement * this.calculSommeMontant(this.typePlacement.pourcentageRendement, this.nombreDeMoi);
      }
      else {
        this.montantEspere = Math.ceil( this.montantPlacement * this.calculSommeMontant(this.typePlacement.pourcentageRendement,this.nombreDeMoi));

      }
     this.gainEspere   = this.montantEspere - this.montantTotalPlacement ;

      //this.getData();
    }
    public calculSommeMontant(taux,matu) {
        let som = 0 ;
        const val1 = 1 / 12;
        const val2 = 1 + (  taux / 100 );
        const val = Math.pow(val2, val1);
        console.log(val)
        for ( let i = 1 ; i <= matu ; i++) {
           som +=   Math.pow( val, i );
        }
        return  som;
    }

    public calculMontantComBinaisonPlacement() {
      console.log("calculMontantComBinaisonPlacement");
      this.montantEspere = Math.ceil( this.montantPlacement * this.calculSommeMontant(this.typePlacement.pourcentageRendement,this.nombreDeMoi));

      this.montantOptiEspere = Math.ceil( this.montantPlacementOpti * this.calculSommeMontant(this.typePlacement.pourcentageRendement,this.maturiteOpti));
      this.montantTotalPlacement = this.montantPlacement * this.nombreDeMoi + this.montantPlacementOpti * this.maturiteOpti;
      this.montantCombinaisonEspere =  this.montantEspere +  this.montantOptiEspere
      this.gainEspere   = this.montantCombinaisonEspere - this.montantTotalPlacement ;
    }
}
