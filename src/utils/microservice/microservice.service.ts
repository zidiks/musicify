import { Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { MICROSERVICES } from "../../common/paths.model";
import { map, Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class MicroserviceService {
    constructor(
        public configService: ConfigService,
        public httpService: HttpService
    ) {}

    private getMicroservice(service: MICROSERVICES): string {
        return this.configService.get<string>(service);
    }

    public get<T>(service: MICROSERVICES, path: string): Observable<T> {
        return this.httpService.get<T>(`${this.getMicroservice(service)}/${path}`).pipe(map(res => res.data));
    }

    public delete<T>(service: MICROSERVICES, path: string): Observable<T> {
        return this.httpService.delete<T>(`${this.getMicroservice(service)}/${path}`).pipe(map(res => res.data));
    }

    public post<T>(service: MICROSERVICES, path: string, data: any): Observable<T> {
        return this.httpService.post<T>(`${this.getMicroservice(service)}/${path}`, data).pipe(map(res => res.data));
    }

    public put<T>(service: MICROSERVICES, path: string, data: any): Observable<T> {
        return this.httpService.put<T>(`${this.getMicroservice(service)}/${path}`, data).pipe(map(res => res.data));
    }
}
