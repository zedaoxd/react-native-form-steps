import { useContext } from "react";

import { AccountFormContext } from "../context/account-form-context";

export function useAccountForm() {
  const context = useContext(AccountFormContext);

  return context;
}
