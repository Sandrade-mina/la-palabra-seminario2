import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, } from '@angular/core';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss'],
})
export class FilaComponent implements OnInit, OnChanges {
  @Input() palabra!: string;
  @Input() letras!: string[];
  @Input() codigo!: number;
  @Input() v_enviar!: number;
  @Output() gol = new EventEmitter<any>();
  public corr: any[] = [];
  public listo: boolean = true;
  constructor(
    private elRef: ElementRef
  ) { }
  ngOnChanges(changes: SimpleChanges): void {
    if (this.codigo < this.v_enviar || this.codigo > this.v_enviar) {
      this.listo = true;
    } else if (this.codigo == this.v_enviar) {
      this.listo = false;
    }
  }
  arg(arg: any) {
    if (this.corr.length < 5) {
      this.corr.push(arg);
    }
    if (this.corr.length == 5) {
      let contador = 0;
      for (let x = 0; x < this.corr.length; x++) {
        if (this.corr[x] === true) {
          contador += 1;
        }
      }
      if (this.codigo < this.v_enviar) {
        if (contador == 5) {
          this.gol.emit(true);
        } else if (contador < 5 && this.corr.indexOf('none') == -1) {
          this.gol.emit(false);
        } else if (this.corr.indexOf('none') >= 0) {
          this.gol.emit('error');
        }
      }
      this.corr = [];
    }
  }

  ngOnInit() {
    return 0;
  }
}
