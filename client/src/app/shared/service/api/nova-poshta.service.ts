import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import {
  GetWarehousesNP,
  SearchSettlementsNP,
} from "../../interface/interfaces";

@Injectable({
  providedIn: "root",
})
export class NovaPoshtaService {
  constructor(private http: HttpClient) {}

  private api_nova_poshta: string = `https://api.novaposhta.ua/v2.0/json/`;
  private api_key_nova_poshta: string = environment.API_KEY_NOVA_POSHTA;

  searchSettlementsNovaPoshta(
    cityName: string
  ): Observable<SearchSettlementsNP> {
    return this.http.post<SearchSettlementsNP>(`${this.api_nova_poshta}`, {
      apiKey: this.api_key_nova_poshta,
      modelName: "Address",
      calledMethod: "searchSettlements",
      methodProperties: { CityName: cityName, Limit: "10", Page: "1" },
    });
  }

  getWarehousesNovaPoshta(
    cityName: string,
    text_search: string,
    limit?: number
  ): Observable<GetWarehousesNP> {
    return this.http.post<GetWarehousesNP>(`${this.api_nova_poshta}`, {
      apiKey: this.api_key_nova_poshta,
      modelName: "Address",
      calledMethod: "getWarehouses",
      methodProperties: {
        CityName: cityName,
        Limit: limit ? String(limit) : "20",
        FindByString: text_search,
        Page: "1",
      },
    });
  }
}
