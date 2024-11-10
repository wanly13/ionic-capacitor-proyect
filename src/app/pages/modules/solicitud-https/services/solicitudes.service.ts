import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class SolicitudesService {

    constructor(public http: HttpClient) { }



    getHttps(): Observable<any> {
        return this.http.get<any>('https://backend.mispueblitos.info/evento').pipe(
            map(data => { return data }), catchError((error) => { return error })
        );
    }

    getHttp(): Observable<any> {
        return this.http.get<any>('http://rsdev.site:8084/ventasdeldia/listaUnidadNegocio').pipe(
            map(data => { return data }), catchError((error) => { return error })
        );
    }
}

