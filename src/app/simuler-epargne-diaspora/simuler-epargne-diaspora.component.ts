import { Component, OnInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
@Component({
  selector: 'app-simuler-epargne-diaspora',
  templateUrl: './simuler-epargne-diaspora.component.html',
  styleUrls: ['./simuler-epargne-diaspora.component.css']
})
export class SimulerEpargneDiasporaComponent implements OnInit {
 cotisationMensuel = 0;
 maturite = 12;
 tauxAnnuel = 8;
 tauxMensuel = 0.64;
 valeurCotisationEcheance = 0;
 valeurEcheanceVoulue = 0;
 hypothese = 'h1' ;
 montantTotalPlacement = 0;
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
  val = 1 + ( this.tauxMensuel / 100 );
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

  }
  public calculMontantEcheanceParMois() {
     this.valeurEcheanceVoulue =  this.cotisationMensuel * this.calculSommeMontant();
     this.valeurCotisationEcheance = this.cotisationMensuel * this.maturite ;

  }

  public calculMontantAInvestirParMois() {
    this.cotisationMensuel = this.valeurEcheanceVoulue / this.calculSommeMontant();
    this.valeurCotisationEcheance =   this.cotisationMensuel * this.maturite ;

  }
  public calculMontantEcheanceUnique() {
    this.valeurEcheanceVoulue *= Math.pow( 1 + this.tauxAnnuel / 100, this.maturite );
  }

  public calculMontantAInvestirUnique() {
    this.cotisationMensuel = this.valeurEcheanceVoulue /  Math.pow( 1 + this.tauxAnnuel / 100, this.maturite );
  }

  public calculSommeMontant() {
    let som = 0 ;
    for ( let i = 1 ; i <= this.maturite ; i++) {
      som +=   (Math.pow( this.val, i ));
    }
    return som;
  }

}
