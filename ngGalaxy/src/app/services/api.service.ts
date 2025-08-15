// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })

export class ApiService {
    private baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    private getHeaders(): HttpHeaders {
        let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        const token = localStorage.getItem('token');
        if (token) headers = headers.set('Authorization', `Bearer ${token}`);
        return headers;
    }

    private buildParams(params?: Record<string, any>): HttpParams {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach(key => {
                if (params[key] !== null && params[key] !== undefined) {
                    httpParams = httpParams.set(key, params[key]);
                }
            });
        }
        return httpParams;
    }

    private buildUrl(endpoint: string): string {
        return endpoint.startsWith("http") ? endpoint : `${this.baseUrl}/${endpoint}`;
    }

    /** 🔹 Unified request handler */
    private request<T>(method: string, endpoint: string, body?: any, params?: Record<string, any>, callback?: (res: T) => void) {
        this.http.request<T>(method, this.buildUrl(endpoint), {
            body,
            headers: this.getHeaders(),
            params: this.buildParams(params)
        }).subscribe({
            next: res => {
                console.log(`✅ ${method} ${endpoint} Success:`, res);
                if (callback) callback(res);
            },
            error: err => {
                console.error(`❌ ${method} ${endpoint} Error:`, err);
            }
        });
    }

    /** 🔹 Public API methods */
    get<T>(endpoint: string, params?: Record<string, any>, callback?: (res: T) => void) {
        this.request<T>('GET', endpoint, null, params, callback);
    }

    post<T>(endpoint: string, body: any, params?: Record<string, any>, callback?: (res: T) => void) {
        this.request<T>('POST', endpoint, body, params, callback);
    }

    put<T>(endpoint: string, body: any, params?: Record<string, any>, callback?: (res: T) => void) {
        this.request<T>('PUT', endpoint, body, params, callback);
    }

    patch<T>(endpoint: string, body: any, params?: Record<string, any>, callback?: (res: T) => void) {
        this.request<T>('PATCH', endpoint, body, params, callback);
    }

    delete<T>(endpoint: string, params?: Record<string, any>, callback?: (res: T) => void) {
        this.request<T>('DELETE', endpoint, null, params, callback);
    }
}
