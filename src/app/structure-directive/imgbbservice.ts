import { HttpClient }
from '@angular/common/http';

import { Injectable }
from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable   ({ providedIn: 'root' }) 
export class ImgBBUploadService {



private readonly apiKey: string = '18d6a1c0088fc25d93fffa89b6f43f40';

constructor (private readonly httpClient: HttpClient){}

upload (file: File): Observable<string> {
    const fordata = new FormData();

    fordata.append('image', file);
    
    return this.httpClient
    .post('/upload', fordata, { params: { key: this.apiKey } })
    .pipe(map((response) => response['data']["url"]));
}



}