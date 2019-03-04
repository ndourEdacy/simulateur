import { Component, OnInit } from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

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
  versementPeriodique = 0;
  montantTotalEcheance = 0;
  montantVersementEcheancePeriodique = 0;
  montantVersementEcheanceUnique = 0;
  hypothese = 'fcpquietude' ;
  montantTotalPlacement = 0;
  typeSimulation = 'sommeEcheance' ;
  fcp = {
    'typeFcp': 'fcpquietude',
    'tauxAnnuel': 5.25 ,
    'tauxMensuel': 0.4273
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

   get tickInterval(): number | 'auto' {
     return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
   }
   set tickInterval(value) {
     this._tickInterval = coerceNumberProperty(value);
   }
   private _tickInterval = 1;

  constructor() { }

  ngOnInit() {
  }

  public onChangeSimulation = (event) => {
    if ( event !== 'sommeEcheance') {
      this.ish1 = false;
      this.activeInputCotisation = true;
      this.isSommeEcheance = true;
      this.ishiden = false;
      this.fcp.tauxAnnuel = 5;
      this.fcp.tauxMensuel = 0.41;
      this.isVUOutput = false;
      this.isVUInput = true;
      this.isVPInput = true ;
      this.isVPOutput = false;
      this.isMEPInput = false;
      this.idMEPOutput = true ;
      this.isMEUInput = false;
      this.idMEUOutput = true ;
    } else {
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
   }

  public onChangemontantVersementEcheancePeriodique = (event) => {

  }
  public getMontantVersementEcheanceUnique = (val) => {
   console.log(val);
  }
  public onChangeFcp( even ) {
      if ( even === 'fcpquietude') {
          this.fcp.tauxAnnuel = 5.25;
          this.fcp.tauxMensuel = 0.4273;
      }
      else if ( even === 'fcpavantage') {
        this.fcp.tauxAnnuel = 7 ;
        this.fcp.tauxMensuel = 0.57;
      }
      else if ( even === 'fcphorizon') {
        this.fcp.tauxAnnuel = 8 ;
        this.fcp.tauxMensuel = 0.64;
      }
      else if ( even === 'fcpcroissance') {
        this.fcp.tauxAnnuel = 10 ;
        this.fcp.tauxMensuel = 0.80;
      }

  }

  public getMaturite( even ) {
    this.maturite = even ;
  }

  public getVersementPeriodique( even ) {
    console.log(even);
  }

  public clean() {
    this.montantVersementEcheancePeriodique = 0;
    this.versementPeriodique = 0;
    this.montantVersementEcheanceUnique = 0;
    this.montantTotalEcheance = 0;
    this.versementUnique = 0;

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
    this.calculMontantEcheanceUnique();
      console.log('calculMontantEcheanceParMois');
 }

 public calculMontantAInvestirParMois() {
   this.versementPeriodique = this.montantVersementEcheancePeriodique / this.calculSommeMontant();
   this.calculMontantAInvestirUnique();

 }
 public async calculMontantEcheanceUnique() {

        this.montantVersementEcheanceUnique = this.versementUnique * Math.pow( 1 + (this.fcp.tauxAnnuel / 100), this.maturite );

        this.montantTotalEcheance =  this.montantVersementEcheanceUnique + this.montantVersementEcheancePeriodique;
 }

 public calculMontantAInvestirUnique() {
   this.versementUnique = this.montantVersementEcheanceUnique /  Math.pow( 1 +  this.fcp.tauxAnnuel / 100, this.maturite );
 }

 public calculSommeMontant() {
   let som = 0 ;
   const val1 = 1 / 12;
   const val2 = 1 + (  this.fcp.tauxMensuel / 100 );
   const val = Math.pow(val2, val1);

   for ( let i = 1 ; i <= this.maturite ; i++) {
     som +=   Math.pow( val, i );
   }
   return som;
 }
}
