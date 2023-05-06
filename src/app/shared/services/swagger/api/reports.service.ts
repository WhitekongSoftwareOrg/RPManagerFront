/**
 * Demo API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { AnyType } from '../model/anyType';
import { ListResponseReports } from '../model/listResponseReports';
import { Report } from '../model/report';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class ReportsService {

    protected basePath = '/';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * 
     * 
     * @param skip 
     * @param take 
     * @param orderBy 
     * @param orderDirection 
     * @param reportName 
     * @param reportDescription 
     * @param reportFirstDate 
     * @param reportNextDate 
     * @param reportDateCell 
     * @param reportExcelFileName 
     * @param centralId 
     * @param reportAdminNote 
     * @param reportValidationRequired 
     * @param reportOpRange 
     * @param reportExecHour 
     * @param mailListId 
     * @param reportNextUtcDate 
     * @param userId 
     * @param reportFileNameFormat 
     * @param reportAttachedFileNameFormat 
     * @param reportUserGroupId 
     * @param revisionMailListId 
     * @param reportPostExecutionExcelMacro 
     * @param reportPreExecutionExcelMacro 
     * @param reportDeleted 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiReportsGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportName?: string, reportDescription?: string, reportFirstDate?: Date, reportNextDate?: Date, reportDateCell?: string, reportExcelFileName?: string, centralId?: number, reportAdminNote?: string, reportValidationRequired?: string, reportOpRange?: string, reportExecHour?: number, mailListId?: number, reportNextUtcDate?: Date, userId?: number, reportFileNameFormat?: string, reportAttachedFileNameFormat?: string, reportUserGroupId?: number, revisionMailListId?: number, reportPostExecutionExcelMacro?: string, reportPreExecutionExcelMacro?: string, reportDeleted?: AnyType, observe?: 'body', reportProgress?: boolean): Observable<ListResponseReports>;
    public apiReportsGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportName?: string, reportDescription?: string, reportFirstDate?: Date, reportNextDate?: Date, reportDateCell?: string, reportExcelFileName?: string, centralId?: number, reportAdminNote?: string, reportValidationRequired?: string, reportOpRange?: string, reportExecHour?: number, mailListId?: number, reportNextUtcDate?: Date, userId?: number, reportFileNameFormat?: string, reportAttachedFileNameFormat?: string, reportUserGroupId?: number, revisionMailListId?: number, reportPostExecutionExcelMacro?: string, reportPreExecutionExcelMacro?: string, reportDeleted?: AnyType, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<ListResponseReports>>;
    public apiReportsGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportName?: string, reportDescription?: string, reportFirstDate?: Date, reportNextDate?: Date, reportDateCell?: string, reportExcelFileName?: string, centralId?: number, reportAdminNote?: string, reportValidationRequired?: string, reportOpRange?: string, reportExecHour?: number, mailListId?: number, reportNextUtcDate?: Date, userId?: number, reportFileNameFormat?: string, reportAttachedFileNameFormat?: string, reportUserGroupId?: number, revisionMailListId?: number, reportPostExecutionExcelMacro?: string, reportPreExecutionExcelMacro?: string, reportDeleted?: AnyType, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<ListResponseReports>>;
    public apiReportsGet(skip?: number, take?: number, orderBy?: string, orderDirection?: string, reportName?: string, reportDescription?: string, reportFirstDate?: Date, reportNextDate?: Date, reportDateCell?: string, reportExcelFileName?: string, centralId?: number, reportAdminNote?: string, reportValidationRequired?: string, reportOpRange?: string, reportExecHour?: number, mailListId?: number, reportNextUtcDate?: Date, userId?: number, reportFileNameFormat?: string, reportAttachedFileNameFormat?: string, reportUserGroupId?: number, revisionMailListId?: number, reportPostExecutionExcelMacro?: string, reportPreExecutionExcelMacro?: string, reportDeleted?: AnyType, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


























        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (skip !== undefined && skip !== null) {
            queryParameters = queryParameters.set('skip', <any>skip);
        }
        if (take !== undefined && take !== null) {
            queryParameters = queryParameters.set('take', <any>take);
        }
        if (orderBy !== undefined && orderBy !== null) {
            queryParameters = queryParameters.set('orderBy', <any>orderBy);
        }
        if (orderDirection !== undefined && orderDirection !== null) {
            queryParameters = queryParameters.set('orderDirection', <any>orderDirection);
        }
        if (reportName !== undefined && reportName !== null) {
            queryParameters = queryParameters.set('reportName', <any>reportName);
        }
        if (reportDescription !== undefined && reportDescription !== null) {
            queryParameters = queryParameters.set('reportDescription', <any>reportDescription);
        }
        if (reportFirstDate !== undefined && reportFirstDate !== null) {
            queryParameters = queryParameters.set('reportFirstDate', <any>reportFirstDate.toISOString());
        }
        if (reportNextDate !== undefined && reportNextDate !== null) {
            queryParameters = queryParameters.set('reportNextDate', <any>reportNextDate.toISOString());
        }
        if (reportDateCell !== undefined && reportDateCell !== null) {
            queryParameters = queryParameters.set('reportDateCell', <any>reportDateCell);
        }
        if (reportExcelFileName !== undefined && reportExcelFileName !== null) {
            queryParameters = queryParameters.set('reportExcelFileName', <any>reportExcelFileName);
        }
        if (centralId !== undefined && centralId !== null) {
            queryParameters = queryParameters.set('centralId', <any>centralId);
        }
        if (reportAdminNote !== undefined && reportAdminNote !== null) {
            queryParameters = queryParameters.set('reportAdminNote', <any>reportAdminNote);
        }
        if (reportValidationRequired !== undefined && reportValidationRequired !== null) {
            queryParameters = queryParameters.set('reportValidationRequired', <any>reportValidationRequired);
        }
        if (reportOpRange !== undefined && reportOpRange !== null) {
            queryParameters = queryParameters.set('reportOpRange', <any>reportOpRange);
        }
        if (reportExecHour !== undefined && reportExecHour !== null) {
            queryParameters = queryParameters.set('reportExecHour', <any>reportExecHour);
        }
        if (mailListId !== undefined && mailListId !== null) {
            queryParameters = queryParameters.set('mailListId', <any>mailListId);
        }
        if (reportNextUtcDate !== undefined && reportNextUtcDate !== null) {
            queryParameters = queryParameters.set('reportNextUtcDate', <any>reportNextUtcDate.toISOString());
        }
        if (userId !== undefined && userId !== null) {
            queryParameters = queryParameters.set('userId', <any>userId);
        }
        if (reportFileNameFormat !== undefined && reportFileNameFormat !== null) {
            queryParameters = queryParameters.set('reportFileNameFormat', <any>reportFileNameFormat);
        }
        if (reportAttachedFileNameFormat !== undefined && reportAttachedFileNameFormat !== null) {
            queryParameters = queryParameters.set('reportAttachedFileNameFormat', <any>reportAttachedFileNameFormat);
        }
        if (reportUserGroupId !== undefined && reportUserGroupId !== null) {
            queryParameters = queryParameters.set('reportUserGroupId', <any>reportUserGroupId);
        }
        if (revisionMailListId !== undefined && revisionMailListId !== null) {
            queryParameters = queryParameters.set('revisionMailListId', <any>revisionMailListId);
        }
        if (reportPostExecutionExcelMacro !== undefined && reportPostExecutionExcelMacro !== null) {
            queryParameters = queryParameters.set('reportPostExecutionExcelMacro', <any>reportPostExecutionExcelMacro);
        }
        if (reportPreExecutionExcelMacro !== undefined && reportPreExecutionExcelMacro !== null) {
            queryParameters = queryParameters.set('reportPreExecutionExcelMacro', <any>reportPreExecutionExcelMacro);
        }
        if (reportDeleted !== undefined && reportDeleted !== null) {
            queryParameters = queryParameters.set('reportDeleted', <any>reportDeleted);
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<ListResponseReports>('get',`${this.basePath}/api/Reports`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiReportsIdDelete(id: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiReportsIdDelete(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiReportsIdDelete(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiReportsIdDelete(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiReportsIdDelete.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/api/Reports/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiReportsIdGet(id: number, observe?: 'body', reportProgress?: boolean): Observable<Report>;
    public apiReportsIdGet(id: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Report>>;
    public apiReportsIdGet(id: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Report>>;
    public apiReportsIdGet(id: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiReportsIdGet.');
        }

        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Report>('get',`${this.basePath}/api/Reports/${encodeURIComponent(String(id))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiReportsIdPut(id: number, body?: Report, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiReportsIdPut(id: number, body?: Report, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiReportsIdPut(id: number, body?: Report, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiReportsIdPut(id: number, body?: Report, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling apiReportsIdPut.');
        }


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/Reports/${encodeURIComponent(String(id))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiReportsPost(body?: Report, observe?: 'body', reportProgress?: boolean): Observable<Report>;
    public apiReportsPost(body?: Report, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Report>>;
    public apiReportsPost(body?: Report, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Report>>;
    public apiReportsPost(body?: Report, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'text/plain',
            'application/json',
            'text/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Report>('post',`${this.basePath}/api/Reports`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public apiReportsRemoveByIdsPut(body?: Array<number>, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public apiReportsRemoveByIdsPut(body?: Array<number>, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public apiReportsRemoveByIdsPut(body?: Array<number>, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public apiReportsRemoveByIdsPut(body?: Array<number>, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {


        let headers = this.defaultHeaders;

        // authentication (Bearer) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json',
            'text/json',
            'application/_*+json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/api/Reports/removeByIds`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
