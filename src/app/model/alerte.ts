import {Abonne} from './abonne';
import {TypeAlerte} from './type-alerte';
import {Admin} from './admin';
import {SignalAlerte} from './signal-alerte';


export class Alerte {
  idAlerte :number;
  dateAlerte : Date ;
  abonne: Abonne;
  admin:Admin;
  typeAlerte : TypeAlerte ;
  enabled: boolean;
  signalAlertes: SignalAlerte[];
}
