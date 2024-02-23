import { Component, EventEmitter, Output } from '@angular/core';
import * as $ from 'jquery';
import { faPlus, faMinus, faBars, faGripVertical, faXmark, faTrash, faClone, faArrowUpFromBracket, faPhone, faArrowDownWideShort, faCircleChevronLeft, faRightLeft, faImage, faListUl, faFolder, faChevronLeft, faFileCode, faHome, faGear, faListOl, faIcons,faCircleDot, faEye, faA, faUser, faCalendarDays, faLocationDot, faFontAwesome, faGlobe, faCar, faEnvelope, faUtensils, faBriefcase, faBuilding, faMapLocationDot, faGraduationCap, faSchool, faCheckToSlot, faEarthEurope, faAppleAlt, faLaptopCode, faFont, faBrain, faUserTie, faDiagramProject, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { AlyoService } from './alyo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  log: boolean = false;
  email = "";
  password = "";
  messaggio = "";
  //utente: any = [];
  testo = ""
  utenti: any = [];

  utente: any = {nome:"Alyosha",cognome: "Vallucci",email: "alyosha.vallucci@gmail.com",id: "1",id_contatto: "0006476650",immagine: "esercizio/assets/immagini/alyosha.jpeg",password: "vekkio44"}

  constructor(private alyoservice: AlyoService){}

  ngOnInit(): void {this.log=true;}

  login(){

      var formdate = new FormData();
      formdate.append("email",this.email);
      formdate.append("password",this.password);
      
      this.alyoservice.alyo_login(formdate).subscribe(dati => {

        this.s("DATI HOME: ",dati)

        if(dati.stato){
          this.utente = dati.utente;
          this.log = true;
        }else{
          this.log = false;
          this.messaggio = dati.messaggio;
        }
      
      })

  }

  search(){

    var formdate = new FormData();
    formdate.append("search",this.testo);
    
    this.alyoservice.alyo_search(formdate).subscribe(dati => {
      this.s("DATI HOME: ",dati)
      this.utenti = dati.utenti

      if(dati.stato){
        this.utenti = dati.utenti;
      }else{
        this.messaggio = dati.messaggio;
      }
    })



  }

  s(intestazione: any, testo: any){
    console.log();
    console.log(intestazione);
    console.log(testo);
    console.log();
  }

}
