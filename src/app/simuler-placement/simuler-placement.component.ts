import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-simuler-placement',
  templateUrl: './simuler-placement.component.html',
  styleUrls: ['./simuler-placement.component.css']
})
export class SimulerPlacementComponent implements OnInit {
  nombreDeMoi = 12;
  montantTotalPlacement:number = 0;
  montantPlacement: number = 0;
  montantPlacementOpti = 0;
  maturiteOpti = 12;
  montantOptiEspere = 0;
  montantEspere = 0;
  montantCombinaisonEspere = 0;
  gainEspere: number= 0;
  iscombinaison = true ;
  pourcentageRendementQuitude = 5.00 ;
  pourcentageRendementOptimum = 5.25 ;
  rendemantObtenue: number= 0 ;
  rendemantObtenue1: string = '0.0';
  montantUnique: number = 0 ;
  montantUniqueOpti : number= 0 ;

  montantTotalPlacementVoulue: string = '0.0';
  montantEspereVoulue: string = '0.0';
  gainEspereVoulue: string = '0.0';
  montantCombinaisonEspereVuolue: string = '0.0';
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
      this.clean();
    }

   public  getMontantPlacement( val ) {
      this.montantPlacement = val;
      this.montantTotalPlacement = this.nombreDeMoi * val + this.montantUnique;
      this.montantTotalPlacementVoulue = this.montantTotalPlacement.toFixed(1);
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
      this.montantUnique = 0;
      this.gainEspere  = 0 ;
      this.montantEspere = 0 ;
      this.montantCombinaisonEspere = 0;
      this.rendemantObtenue = 0;
      this.montantTotalPlacementVoulue = '0.0';
      this.montantEspereVoulue = '0.0';
      this.gainEspereVoulue = '0.0';
      this.rendemantObtenue1 = '0.0';
      this.montantCombinaisonEspereVuolue = '0.0';

    }
    public  calculMontant() {
      this.montantTotalPlacement = this.montantPlacement * this.nombreDeMoi + this.montantUnique ;
      this.montantTotalPlacementVoulue = this.montantTotalPlacement.toFixed(1);

      if ( this.typePlacement.typePlacement === 'cumule' ) {
        this.montantEspere =  this.montantPlacement * this.calculSommeMontant(this.typePlacement.pourcentageRendement, this.nombreDeMoi);

      }
      else {
        this.montantEspere =  this.montantPlacement
                                        * this.calculSommeMontant(this.typePlacement.pourcentageRendement, this.nombreDeMoi)
                            + this.calculMontantEspereUnique(this.typePlacement.pourcentageRendement, this.nombreDeMoi, this.montantUnique);
      }
      this.montantEspereVoulue = this.montantEspere.toFixed(1)

     this.gainEspere   = this.montantEspere - this.montantTotalPlacement ;
     this.gainEspereVoulue =  this.gainEspere.toFixed(1);

     this.rendemantObtenue = (this.gainEspere / this.montantTotalPlacement) * 100 ;
     this.rendemantObtenue1 = this.rendemantObtenue.toPrecision(3)
     //console.log(Math.(this.rendemantObtenue))

    }
    public calculSommeMontant(taux , matu) {
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
     public calculMontantEspereUnique (taux , matu , montant) {
      const val1 = 1 / 12;
      const val2 = 1 + ( taux / 100);
      const val = Math.pow(val2, val1);
         return (montant * Math.pow(val , matu));
     }
    public calculMontantComBinaisonPlacement() {
      // console.log("calculMontantComBinaisonPlacement");
      this.montantEspere = this.montantPlacement
                                        * this.calculSommeMontant(this.pourcentageRendementQuitude, this.nombreDeMoi)
                                        + this.calculMontantEspereUnique(this.pourcentageRendementQuitude, this.nombreDeMoi,this.montantUnique);
     this.montantEspereVoulue = this.montantEspere.toFixed(1);

      this.montantOptiEspere =  this.montantPlacementOpti
                                          * this.calculSommeMontant(this.pourcentageRendementOptimum, this.maturiteOpti)
                                          + this.calculMontantEspereUnique(this.pourcentageRendementOptimum, this.maturiteOpti,this.montantUniqueOpti);
      this.montantTotalPlacement = this.montantPlacement * this.nombreDeMoi + this.montantPlacementOpti * this.maturiteOpti
                                   + this.montantUnique + this.montantUniqueOpti;
      this.montantTotalPlacementVoulue = this.montantTotalPlacement.toFixed(1);

      this.montantCombinaisonEspere =  this.montantEspere +  this.montantOptiEspere;
      this.montantCombinaisonEspereVuolue = this.montantCombinaisonEspere.toFixed(1);

      this.gainEspere = this.montantCombinaisonEspere - this.montantTotalPlacement ;
      this.gainEspereVoulue = this.gainEspere.toFixed(1);
    }
}
