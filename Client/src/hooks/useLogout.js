import { useAuthContext } from "./useAuthContext";
import { useInvestorsContext } from "./useInvestorsContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const { dispatch: investorsDispatch } = useInvestorsContext();

  const logout = () => {
    // Remove User from storage
    localStorage.removeItem("user");

    // dispatch logout action
    dispatch({ type: "LOGOUT" });
    investorsDispatch({ type: "SET_INVESTORS", payload: null });
  };

  return { logout };
};
