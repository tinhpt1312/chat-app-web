import AuthAPI from "@/src/service/auth";
import { useMutation } from "react-query";

const useLogout = () => useMutation({ mutationFn: AuthAPI.logout });

export default useLogout;
