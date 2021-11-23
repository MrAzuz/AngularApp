export enum DataStateEnum{
LOADING,
LOADED,
ERROR
}

export interface appDataState<T> {
    dataState?:DataStateEnum,
    data?:T,
    errorMessage?:string
}