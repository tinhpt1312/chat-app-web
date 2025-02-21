import AuthAPI from "@/src/service/auth";
import { useMutation } from "react-query";

const useRegister = () => useMutation({ mutationFn: AuthAPI.register });

export default useRegister;
