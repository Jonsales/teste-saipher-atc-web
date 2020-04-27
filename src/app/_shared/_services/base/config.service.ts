import { Config } from '../../_models/base/config';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import SampleJson from 'src/config/config.json';

@Injectable({
    providedIn: 'root'
  })
  
export class ConfigService{
    public _config;
    constructor(config: Config, private _http: HttpClient) { 
        this._config = config;
    }

    async loadConfig() {
        if(environment.production){
          const configuracao =  await this._http.get<Config>('config/config.json').toPromise();
          this._config.apiUrl = configuracao.url;
          return this._config;
        }else{
          return this.  loadConfigLocal();
        }
    }

    public loadConfigLocal(): Config {
        this._config.url = SampleJson.url;
        return this._config;
     }
}