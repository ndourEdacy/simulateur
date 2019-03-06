import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
@Component({
  selector: 'app-simuler-epargne-diaspora',
  templateUrl: './simuler-epargne-diaspora.component.html',
  styleUrls: ['./simuler-epargne-diaspora.component.css']
})
export class SimulerEpargneDiasporaComponent implements OnInit {
 cotisationMensuel: number = 0;
 maturite:number = 12;
 tauxAnnuel = 8;
 tauxMensuel = 0.64;
 valeurCotisationEcheance: number = 0;
 valeurEcheanceVoulue: number = 0;
 hypothese = 'h1' ;
 montantTotalPlacement: number = 0;
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
  isHypothese3 = true;
  montantInitial = 0;
  isVEinput = true;
  isVEOutput = false;
  isCMOutPut = true;
  isCMInput = false;
  cotisationUnique: number = 0 ;
  valeurEcheanceUnique: number = 0;
  gainEspere = 0 ;
  rendemantObtenue: number= 0 ;
  rendemantObtenue1: string = '';
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

  public onChangeHypothese( even ) {
    if ( even !== 'h1') {
      this.ish1 = false;
      this.isHypothese3 = true;
      this.activeInputCotisation = true;
      this.isVEinput = false;
      this.isVEOutput = true;
      this.isCMOutPut = false;
      this.isCMInput = true;
      if ( even === 'h3') {
        this.isHypothese3 = false;
      }


    }
    else {
      this.ish1 = true;
      this.activeInputCotisation = false;
      this.isHypothese3 = true;
      this.isVEinput = true;
      this.isVEOutput = false;
      this.isCMOutPut = true;
      this.isCMInput = false;
    }

  }

  public getMaturite( even ) {
    this.maturite = even ;
  }

  public getMontantCotisation( even ) {
    this.valeurCotisationEcheance = this.maturite * (this.tauxMensuel * even * 12 / 100 ) + even * this.maturite ;
  }

  public clean() {
    this.valeurCotisationEcheance = 0;
    this.valeurEcheanceVoulue = 0;

    this.montantTotalPlacement = 0;
  }
  public calculMontantEcheanceParMois() {
     this.valeurEcheanceVoulue = Math.trunc( this.cotisationMensuel * this.calculSommeMontant()) + this.calculMontantEcheanceUnique();
     this.valeurCotisationEcheance = this.cotisationMensuel * this.maturite + this.cotisationUnique;
     this.gainEspere = this.valeurEcheanceVoulue - this.valeurCotisationEcheance ;
     this.rendemantObtenue = (this.gainEspere / this.valeurCotisationEcheance) * 100 ;
     this.rendemantObtenue1 = this.rendemantObtenue.toPrecision(3)

  }

  public calculMontantAInvestirParMois() {
    const val1 = 1 / 12;
    const val = 1 + ( this.tauxAnnuel / 100 );
    const val2 = Math.pow(val, val1);
     this.cotisationUnique = Math.trunc( this.valeurEcheanceVoulue /  Math.pow( val2, this.maturite ) );
    this.cotisationMensuel =  Math.trunc(  (this.valeurEcheanceVoulue) / this.calculSommeMontant() );
    this.valeurCotisationEcheance =   this.cotisationMensuel * this.maturite + this.cotisationUnique;
    this.gainEspere = this.valeurEcheanceVoulue - this.valeurCotisationEcheance ;

    // this.rendemantObtenue = (this.gainEspere / this.valeurCotisationEcheance) * 100 ;
    // this.rendemantObtenue1 = this.rendemantObtenue.toPrecision(3)

  }
  public calculMontantEcheanceUnique() {
    const val1 = 1 / 12;
    const val = 1 + ( this.tauxAnnuel / 100 );
    const val2 = Math.pow(val, val1);
     return Math.trunc( this.valeurEcheanceUnique = this.cotisationUnique * Math.pow( val2, this.maturite ) );
  }

  public calculMontantAInvestirUnique() {
    const val1 = 1 / 12;
    const val = 1 + ( this.tauxAnnuel / 100 );
    const val2 = Math.pow(val, val1);
    const valco = this.valeurEcheanceUnique /  Math.pow( val, this.maturite );
    this.cotisationMensuel = (this.valeurEcheanceVoulue - valco) / this.calculSommeMontant();

  }

  public calculSommeMontant() {
     let som = 0 ;
     const val1 = 1 / 12;
     const val = 1 + ( this.tauxAnnuel / 100 );
     const val2 = Math.pow(val, val1);
    for ( let i = 1 ; i <= this.maturite ; i++) {
      som +=   Math.pow( val2, i );
    }
    return som;
  }

}
