import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../api/apiContact";

export function useSendMessage() {
    const {
        mutate: message,
        isLoading,
        data: results,
        error,
    } = useMutation({
        mutationFn: (userData) => sendMessage(userData),
    });

    return { message, isLoading, error, results };
}
