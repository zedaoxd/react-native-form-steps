import { AccountProvider } from "./src/context/account-form-context";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <AccountProvider>
      <Routes />
    </AccountProvider>
  );
}
