import { createContext, ReactNode, useState } from "react";

type AccountProps = {
  name?: string;
  email?: string;
  phone?: string;
  birth?: string;
  password?: string;
  passwordConfirmation?: string;
};

type AccountFormContextDataProps = {
  accountFormData: AccountProps;
  updateFormData: (data: AccountProps) => void;
};

type AccountFormContextProviderProps = {
  children: ReactNode;
};

const AccountFormContext = createContext({} as AccountFormContextDataProps);

function AccountProvider({ children }: AccountFormContextProviderProps) {
  const [accountFormData, setAccountFormData] = useState<AccountProps>({});

  function updateFormData(data: AccountProps) {
    setAccountFormData((prevState) => ({ ...prevState, ...data }));
  }

  return (
    <AccountFormContext.Provider
      value={{
        accountFormData,
        updateFormData,
      }}
    >
      {children}
    </AccountFormContext.Provider>
  );
}

export { AccountProvider, AccountFormContext, type AccountProps };
