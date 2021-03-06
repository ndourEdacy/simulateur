import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';
import { SimulateurService } from '../simulateur.service';

@Component({
  selector: 'app-simuler-fcp',
  templateUrl: './simuler-fcp.component.html',
  styleUrls: ['./simuler-fcp.component.css']
})
export class SimulerFcpComponent implements OnInit {
  cotisationMensuel = 0;
  maturite = 12;
  tauxAnnuel = 8;
  tauxMensuel = 0.64;
  versementUnique = 0;
  versementPeriodique: number = 0;
  montantTotalEcheance = 0;
  montantVersementEcheancePeriodique = 0;
  montantVersementEcheanceUnique = 0;
  hypothese = 'fcpquietude' ;
  montantTotalPlacement = 0;
  typeSimulation = 'sommeEcheance' ;
  fcp = {
    'typeFcp': 'fcpquietude',
    'tauxAnnuel': 5 ,
    'tauxMensuel': 0.41
  };
  ish1 = true;
  activeInputCotisation = false;
  autoTicks = false;
   disabled = false;
   invert = false;
   max = 1000000;
   min = 100000;
   showTicks = false;
   step = 1;
   thumbLabel = false;
   value = 100000;
   vertical = false;
   isSommeEcheance = false;
   ishiden = true;
   isVUOutput = true;
   isVUInput = false;
   isVPInput = false ;
   isVPOutput = true;
   isMEPInput = true;
   idMEPOutput = false ;
   isMEUInput = true;
   idMEUOutput = false ;
   montantAversementPeriodique: string = '0.0';
   montantAversementUnique: string = '';
   montantVersementEcheancePeriodiqueVoulue: string = '0.0';
  montantVersementEcheanceUniqueVoulue: string = '0.0';
  montantTotalEcheanceVoulue: string = '0.0'
   get tickInterval(): number | 'auto' {
     return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
   }
   set tickInterval(value) {
     this._tickInterval = coerceNumberProperty(value);
   }
   private _tickInterval = 1;

  constructor(private simulateurservice: SimulateurService) { }
  retour () {
    this.simulateurservice.retour();
  }
  ngOnInit() {
  }

  public onChangeSimulation = (event) => {
    if ( event !== 'sommeEcheance') {
      this.ish1 = false;
      this.activeInputCotisation = true;
      this.isSommeEcheance = true;
      this.ishiden = false;

      this.isVUOutput = false;
      this.isVUInput = true;
      this.isVPInput = true ;
      this.isVPOutput = false;
      this.isMEPInput = false;
      this.idMEPOutput = true ;
      this.isMEUInput = false;
      this.idMEUOutput = true ;
      // if ( this.fcp.typeFcp === 'fcpquietude') {
      //   this.fcp.tauxAnnuel = 5;
      //   this.fcp.tauxMensuel = 0.41;
      // }
    } else {
      // if ( this.fcp.typeFcp === 'fcpquietude') {
      //   this.fcp.tauxAnnuel = 5.25;
      //   this.fcp.tauxMensuel =  0.4273;
      // }

      this.ish1 = true;
      this.activeInputCotisation = false;
      this.isSommeEcheance = false;
      this.ishiden = true;
      this.isVUOutput = true;
      this.isVUInput = false;
      this.isVPInput = false ;
      this.isVPOutput = true;
      this.isMEPInput = true;
      this.idMEPOutput = false ;
      this.isMEUInput = true;
      this.idMEUOutput = false ;
     }
     this.clean();
   }

  public onChangemontantVersementEcheancePeriodique = (event) => {

  }
  public getMontantVersementEcheanceUnique = (val) => {
   console.log(val);
  }
  public onChangeFcp( even ) {
      if ( even === 'fcpquietude') {
          this.fcp.tauxAnnuel = 5;
          this.fcp.tauxMensuel = 0.41;
      }
      else if ( even === 'fcpavantage') {
        this.fcp.tauxAnnuel = 7 ;
        this.fcp.tauxMensuel = 0.57;
      }
      else if ( even === 'fcphorizon') {
        this.fcp.tauxAnnuel = 8 ;
        this.fcp.tauxMensuel = 0.64;
      }
      else if ( even === 'fcpexpat') {
        this.fcp.tauxAnnuel = 5 ;
        this.fcp.tauxMensuel = 0.41;
      }
      else if ( even === 'fcpcroissance') {
        this.fcp.tauxAnnuel = 10 ;
        this.fcp.tauxMensuel = 0.80;
      }
      else if ( even === 'fcpdiaspora' || even === 'fcpretraite' ) {
        this.fcp.tauxAnnuel = 6 ;
        this.fcp.tauxMensuel = 0.48;
      }
       this.clean();

  }

  public getMaturite( even ) {
    this.maturite = even ;
  }

  public getVersementPeriodique( even ) {
    console.log(even);
  }

  public clean() {
    this.maturite = 12 ;
    this.montantVersementEcheancePeriodique = 0;
    this.versementPeriodique = 0;
    this.montantVersementEcheanceUnique = 0;
    this.montantTotalEcheance = 0;
    this.versementUnique = 0;
    this.montantAversementPeriodique = '0.0';
    this.montantAversementUnique = '0.0';
    this.montantVersementEcheancePeriodiqueVoulue  = '0.0';
    this.montantVersementEcheanceUniqueVoulue  = '0.0';
    this.montantTotalEcheanceVoulue = '0.0';
  }

  public onChangeVersementPeriodique(event) {
    console.log(event.value);
  }
  public onChangeVersementUnique = (event) => {
    console.log(event.value);
  }
  public calculMontantEcheanceParMois() {
    this.montantVersementEcheancePeriodique =  this.versementPeriodique * this.calculSommeMontant();
    //this.valeurCotisationEcheance = this.cotisationMensuel * this.maturite ;
    this.montantVersementEcheancePeriodiqueVoulue =   this.montantVersementEcheancePeriodique.toFixed(1);
    this.calculMontantEcheanceUnique();
    console.log('calculMontantEcheanceParMois');
 }

 public calculMontantAInvestirParMois() {
   this.versementPeriodique = this.montantVersementEcheanceUnique / this.calculSommeMontant() + 1;
   this.montantAversementPeriodique = this.versementPeriodique.toFixed(1);
   console.log(this.montantAversementPeriodique);
   this.calculMontantAInvestirUnique();

 }
 public async calculMontantEcheanceUnique() {
      const val1 = 1 / 12;
      const val2 = 1 + (  this.fcp.tauxAnnuel / 100 );
      const val = Math.pow(val2, val1);
      this.montantVersementEcheanceUnique = this.versementUnique * Math.pow( val, this.maturite );
      this.montantVersementEcheanceUniqueVoulue = this.montantVersementEcheanceUnique.toFixed(1);

      this.montantTotalEcheance =  this.montantVersementEcheanceUnique + this.montantVersementEcheancePeriodique;
      this.montantTotalEcheanceVoulue = this.montantTotalEcheance.toFixed(1);
 }

 public calculMontantAInvestirUnique() {
    const val1 = 1 / 12;
    const val2 = 1 + (  this.fcp.tauxAnnuel / 100 );
    const val = Math.pow(val2, val1);
    this.versementUnique = this.montantVersementEcheanceUnique /  Math.pow( val, this.maturite ) ;
    this.montantAversementUnique =   this.versementUnique.toFixed(1);
 }

 public calculSommeMontant() {
   let som = 0 ;
   const val1 = 1 / 12;
   const val2 = 1 + (  this.fcp.tauxAnnuel / 100 );
   const val = Math.pow(val2, val1);

   for ( let i = 1 ; i <= this.maturite ; i++) {
     som +=   Math.pow( val, i );
   }
   return som;
 }
}
