import { api } from "@/services/api"
import { useRouter } from "next/router"


export const useGet = async (url: string, params?: any): Promise<any> => {
    const router = useRouter()

    try{
        const response = await api.get(url, params)

        return response
    }catch(err){
        router.push('/404')
    }
}

export const usePost = async (url: string, params?: any): Promise<any> => {
    const router = useRouter()

    try{
        const request = await api.post(url, params)
        return request
    }catch(err){
        router.push('/404')
    }
}