import { AxiosError, AxiosResponse } from "axios"

export interface IResponse {
    status: number | undefined,
    error?: AxiosError<AxiosResponse<AxiosResponse<any, any>, any>>
    | AxiosResponse<any, any>
    | undefined
    //เนื่องจากเราจะต้องเอาไปใช้กับ Try-Catch ซึ่งกรณี Error อาจมีสาเหตุอื่นไม่ใช่แค่ Number
}


export const handleResponse = {
    success: (res: AxiosResponse) => {
        return {  //ถ้า error ให้ return status , data
            status: res.status,
            data: res.data
        }
    },
    error: (res: AxiosError<AxiosResponse>) => {
        if (res.message == "Network Error") {
            return {
                status: 500,
                error: res
            }
        } else {
            return {
                status: res.response?.status,
                error: res.response?.data
            }
        }
    }

}