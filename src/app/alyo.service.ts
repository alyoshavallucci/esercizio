import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: "root"
})
export class AlyoService {


  perorso = "/api/esercizio/php/"
  percorsi = [this.perorso+"login.php",
              this.perorso+"search.php",
             ];
  nuero_di_anni = 5

  constructor(private http: HttpClient,private cookie: CookieService){}

  ngOnInit(): void {}

  // Caricamento / Inserimento / Modifica / Cancellazione sul server
  alyo_login(dati:  any):             Observable<any> { return this.alyo_post(this.percorsi[0],dati); }
  alyo_search(dati: any):             Observable<any> { return this.alyo_post(this.percorsi[1],dati); }

  alyo_post(url: string, dati:  FormData): Observable<any> { return this.http.post(url,dati); }

}

