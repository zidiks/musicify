import { Injectable } from '@nestjs/common';
import { MicroserviceService } from "../utils/microservice/microservice.service";
import { GetAllBandsArgs } from "./dto/args/get-all-bands-args.dto";
import { Observable } from "rxjs";
import { PaginatedResponse } from "../common/paginated-reponse.model";
import { BandResponse } from "./models/band-response.model";
import { MICROSERVICES } from "../common/paths.model";
import { DeleteArgs } from "../common/delete-args.dto";
import { DeleteResponse } from "../common/delete-response.model";
import { UpdateBandInput } from "./dto/input/update-band-input.dto";
import { CreateBandInput } from "./dto/input/create-band-input.dto";
import { GetByIdArgs } from "../common/get-by-id-args.dto";

@Injectable()
export class BandService {
    constructor(private microservice: MicroserviceService) {}

    public getAllBands(getAllBandsArgs: GetAllBandsArgs): Observable<PaginatedResponse<BandResponse>> {
        return this.microservice.get<PaginatedResponse<BandResponse>>(MICROSERVICES.BANDS, '', getAllBandsArgs);
    }

    public deleteBand(deleteBandArgs: DeleteArgs, token: string): Observable<DeleteResponse> {
        return this.microservice.delete<DeleteResponse>(MICROSERVICES.BANDS, `${deleteBandArgs.id}`, token);
    }

    public updateBand(updateBandInput: UpdateBandInput, token: string): Observable<BandResponse> {
        return this.microservice.put<BandResponse, UpdateBandInput>(MICROSERVICES.BANDS, `${updateBandInput.id}`, updateBandInput, token);
    }

    public createBand(createBandInput: CreateBandInput, token: string): Observable<BandResponse> {
        return this.microservice.post<BandResponse, CreateBandInput>(MICROSERVICES.BANDS, '', createBandInput, token);
    }

    public getBand(getBandArgs: GetByIdArgs): Observable<BandResponse> {
        return this.microservice.get<BandResponse>(MICROSERVICES.BANDS, `${getBandArgs.id}`);
    }
}
