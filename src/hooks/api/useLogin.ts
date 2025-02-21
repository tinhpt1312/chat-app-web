import AuthAPI from "@/src/service/auth";
import { useMutation } from "react-query";

const useLogin = () => useMutation({ mutationFn: AuthAPI.login });

export default useLogin;
