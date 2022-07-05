import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from "@nestjs/config";
import { HttpService } from "@nestjs/axios";
import { MICROSERVICES } from "../../common/paths.model";
import { catchError, map, Observable } from "rxjs";
import { QueryArgs } from "../../common/query-args.dto";

@Injectable()
export class MicroserviceService {
    constructor(
        public configService: ConfigService,
        public httpService: HttpService
    ) {}

    private getMicroservice(service: MICROSERVICES): string {
        return this.configService.get<string>(service);
    }

    private generateHeaders(token: string | undefined): Record<string, string> {
        const headers = {};
        if (token?.length) {
            headers['Authorization'] = token;
        }
        return headers;
    }

    public get<T>(service: MICROSERVICES, path: string, params?: Record<string, any>, token?: string): Observable<T> {
        if (params) {
            if (params.ids) {
                params['_id'] = params.ids;
                delete params.ids;
            }
        }
        return this.httpService.get<T>(
            `${this.getMicroservice(service)}/${path}`,
            {
                headers: this.generateHeaders(token),
                params: { ...params }
            },
        ).pipe(
            map(res => res.data),
            catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            })
        );
    }

    public delete<T>(service: MICROSERVICES, path: string, token?: string): Observable<T> {
        return this.httpService.delete<T>(
            `${this.getMicroservice(service)}/${path}`,
            { headers: this.generateHeaders(token) },
        ).pipe(
            map(res => res.data),
            catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            })
        );
    }

    public post<T, D>(service: MICROSERVICES, path: string, data: D, token?: string): Observable<T> {
        return this.httpService.post<T>(
            `${this.getMicroservice(service)}/${path}`,
            data,
            { headers: this.generateHeaders(token) },
        ).pipe(
            map(res => res.data),
            catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            })
        );
    }

    public put<T, D>(service: MICROSERVICES, path: string, data: D, token?: string): Observable<T> {
        return this.httpService.put<T>(
            `${this.getMicroservice(service)}/${path}`,
            data,
            { headers: this.generateHeaders(token) },
        ).pipe(
            map(res => res.data),
            catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            })
        );
    }
}
