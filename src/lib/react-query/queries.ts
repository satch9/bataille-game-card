import { useMutation, useQuery, useQueryClient, } from "@tanstack/react-query"

export const useCreateWorkerAccount = () => {
    return useMutation({
        mutationFn: (worker: INewUser) => createWorkerAccount(worker)
    });
}