/// <reference path="../node_modules/grafana-sdk-mocks/app/headers/common.d.ts" />
import { MetricsPanelCtrl } from 'app/plugins/sdk';
export declare class DSInfo {
    name: string;
    baseURL: string;
    isProxy: boolean;
    withCredentials: boolean;
    basicAuth: string;
    constructor(ds: any);
}
declare class AjaxCtrl extends MetricsPanelCtrl {
    $rootScope: any;
    $q: any;
    $http: any;
    templateSrv: any;
    datasourceSrv: any;
    backendSrv: any;
    $sce: any;
    static templateUrl: string;
    static scrollable: boolean;
    params_fn: Function;
    header_fn: Function;
    json: any;
    content: string;
    objectURL: any;
    scopedVars: any;
    img: any;
    overlay: any;
    requestCount: number;
    lastRequestTime: number;
    fn_error: any;
    lastURL: string;
    dsInfo: DSInfo;
    static examples: ({
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
            header_js: string;
            responseType: string;
            withCredentials: boolean;
            skipSameURL: boolean;
            showTime: boolean;
            showTimePrefix: any;
            showTimeFormat: string;
            showTimeValue: string;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
            responseType: string;
            showTime: boolean;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
            header_js: string;
            responseType: string;
            showTime: boolean;
            showTimeValue: string;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            header_js: string;
            showTime: boolean;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
        };
    } | {
        name: string;
        text: string;
        config: {
            url: string;
            withCredentials: boolean;
            params_js: string;
            header_js: string;
        };
    } | {
        name: string;
        text: string;
        editorTabIndex: number;
        config: {
            url: string;
            withCredentials: boolean;
            params_js: string;
            header_js: string;
        };
    })[];
    constructor($scope: any, $injector: any, $rootScope: any, $q: any, $http: any, templateSrv: any, datasourceSrv: any, backendSrv: any, $sce: any);
    getStaticExamples(): ({
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
            header_js: string;
            responseType: string;
            withCredentials: boolean;
            skipSameURL: boolean;
            showTime: boolean;
            showTimePrefix: any;
            showTimeFormat: string;
            showTimeValue: string;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
            responseType: string;
            showTime: boolean;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
            header_js: string;
            responseType: string;
            showTime: boolean;
            showTimeValue: string;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            header_js: string;
            showTime: boolean;
        };
    } | {
        name: string;
        text: string;
        config: {
            method: string;
            url: string;
            params_js: string;
        };
    } | {
        name: string;
        text: string;
        config: {
            url: string;
            withCredentials: boolean;
            params_js: string;
            header_js: string;
        };
    } | {
        name: string;
        text: string;
        editorTabIndex: number;
        config: {
            url: string;
            withCredentials: boolean;
            params_js: string;
            header_js: string;
        };
    })[];
    loadExample(example: any, evt?: any): void;
    getCurrentParams(scopedVars?: any): {};
    template(v: string): any;
    getHeaders(scopedVars?: any): any;
    _getURL(scopedVars?: any): any;
    /**
     * @override
     */
    updateTimeRange(datasource?: any): void;
    /**
     * Rather than issue a datasource query, we will call our ajax request
     * @override
     */
    issueQueries(datasource: any): any;
    handleQueryResult(result: any): void;
    onPanelInitalized(): void;
    onConfigChanged(): void;
    onInitEditMode(): void;
    getDatasourceOptions(): Promise<any>;
    datasourceChanged(option: any): void;
    updateFN(): void;
    update(rsp: any, checkVars?: boolean): void;
    openFullscreen(): void;
    link(scope: any, elem: any, attrs: any, ctrl: any): void;
}
export { AjaxCtrl, AjaxCtrl as PanelCtrl };
