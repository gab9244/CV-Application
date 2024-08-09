// import { Header } from "./Header"
import { Form } from "./Form";
import { Curriculon } from "./Curriculon";
import { UserProvider } from "./UserContext";

export const App = () => {
  return (
    <>
      <UserProvider>
        <div className="content">
          {/* <Header /> */}
          <Form />
          <Curriculon />
        </div>
      </UserProvider>
    </>
  );
};
