import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-jugar',
  templateUrl: './jugar.page.html',
  styleUrls: ['./jugar.page.scss'],
})
export class JugarPage implements OnInit {
  public id: number = 0
  public nivel: any = '';
  public opciones: any = [
    { id: 1, name: 'Facil', opc: 7, color: 'primary' },
    { id: 2, name: 'Normal', opc: 5, color: 'warning' },
    { id: 3, name: 'Dificil', opc: 2, color: 'danger' }
  ];
  public numfiles: number[] = [];

  public palabras: string[] = [
    'abeto', 'actor', 'aguas', 'agudo', 'alado', 'albas', 'altar', 'Antón', 
    'atizo', 'avala', 'avión', 'azul', 'babas', 'bacas', 'bache', 'bajes', 'balas',
     'bebés', 'belén', 'Berto', 'bicho', 'bizco', 'bueno', 'busca', 'cabra', 'cafés', 
     'cajas', 'calar', 'calas', 'calca', 'calla', 'calma', 'camba', 'campo', 'canas', 
     'cantos', 'capto', 'caras', 'Carlo', 'carro', 'casas', 'catar', 'caída', 'cejas', 
     'Celia', 'cenas', 'cepas', 'cerca', 'cerco', 'cerdo', 'chile', 'china', 'ciego', 
     'cines', 'citas', 'clara', 'clavo', 'colas', 'colon', 'colón', 'coral', 'coras', 
     'corea', 'corro', 'cosas', 'costo', 'crudo', 'curar', 'dados', 'dagas', 'datos', 
     'daños', 'dejar', 'dejes', 'denso', 'dices', 'divos', 'dotes', 'dunas', 'dures', 
     'duros', 'ellos', 'echas', 'edito', 'elevo', 'emulé', 'emulo', 'enoje', 'error', 
     'estáS', 'fallo', 'falto', 'feria', 'fetos', 'fijos', 'filas', 'filia', 'finca', 
     'gafas', 'galas', 'Gales', 'galos', 'ganas', 'ganes', 'gases', 'gasto', 'giras', 
     'gordo', 'gorro', 'grave', 'grito', 'hacer', 'halos', 'hasta', 'heces', 'hielo', 
     'ideas', 'india', 'inflo', 'islas', 'Japón', 'jefas', 'jerga', 'Josué', 'julio', 
     'malos', 'manía', 'marca', 'marco', 'martí', 'maría', 'melón', 'menos', 'meter', 
     'metro', 'moler', 'monte', 'morir', 'nacer', 'nadar', 'narro', 'natas', 'naves', 
     'necio', 'niños', 'notas', 'nubes', 'obras', 'ocios', 'ollas', 'ondas', 'onzas', 
     'opera', 'otros', 'ovulo', 'oírte', 'palas', 'parís', 'pedir', 'pelea', 'pelos', 
     'peras', 'perro', 'pesos', 'pilas', 'pinto', 'poder', 'Qatar', 'quedo', 'quema', 
     'quito', 'reloj', 'rubio', 'rasco', 'ratas', 'ratos', 'redes', 'remar', 'renos', 
     'renta', 'sabio', 'sacar', 'salir', 'selva', 'sanar', 'sopas', 'secar', 'serio', 
     'sitúo', 'sobar', 'sonar', 'subir', 'sucio', 'siete', 'tabla', 'tacos', 'Tania', 
     'tapas', 'tazas', 'telón', 'tener', 'tenis', 'terco', 'terso', 'Texas', 'tipos', 
     'tiras', 'todas', 'todos', 'tomar', 'Tomás', 'tonos', 'tonto', 'toque', 'torpe', 
     'trote', 'vacas', 'vagos', 'valer', 'valor', 'veces', 'vedas', 'velas', 'vemos', 
     'venas', 'venir', 'verde', 'viera', 'vigas', 'vinos', 'vivir', 'volar', 'votar', 
     'yates', 'yemas', 'Yemen', 'yendo', 'yenes', 'yesca', 'yogur', 'yugos', 'zonas',
      'zorro', 'zurdo'
  ];
  public palabra: string = '';
  public letras: string[] = [];
  public v_enviar: number = 0;

  constructor(
    private activedRoute: ActivatedRoute,
    private alertController: AlertController,
    public router: Router) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id'];
    this.nivel = this.opciones.find((item: any) => item.id == this.id);
    this.numfiles = Array(this.nivel.opc).fill(0).map((x, i) => i);
    const rand = Math.ceil(Math.random() * this.palabras.length);
    this.palabra = this.palabras[rand];
    this.letras = this.palabra.split('');
    console.log(this.v_enviar, this.numfiles, this.palabra);
    return 0;
  }

  enviar() {
    this.v_enviar += 1;
    console.log(this.v_enviar);
  }
  volver() {
  }
  comp(arg: any) {
    if (arg === 'error') {
      console.log(arg);
      if (this.v_enviar > 0) {
        this.v_enviar -= 1
      }
    }else if (arg === true){
      this.mostrarAlerta();
    }else if (this.v_enviar == this.nivel.opc){
      this.perdistes();
    }
  }
  async perdistes() {
    const alert = await this.alertController.create({
      header: 'Lo siento',
      message: 'PERDIO',
      buttons: [
        {
          text: 'Volver',
          handler: () => {
            this.router.navigate(['/']);
          }
        },
        {
          text: 'Jugar otra vez',
          handler: () => {
            window.location.reload();
          }
        }
      ]
    });

    await alert.present();
  
  }
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: 'Felicitacion',
      message: 'GANO',
      buttons: [
        {
          text: 'Volver',
          handler: () => {
            this.router.navigate(['/']);
          }
        },
        {
          text: 'Jugar  de nuevo',
          handler: () => {
            window.location.reload();
          }
        }
      ]
    });

    await alert.present();
  }
}
