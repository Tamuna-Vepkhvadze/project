import "./App.css";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./schema";

function App() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    console.log("form submitted", data);
    reset();
  };
  return (
    <>
      <nav>
        <p>home</p>
        <p>students list</p>
        <p>about us</p>
      </nav>
      <h1>Student registration</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" {...register("username")} />

          {errors.username && (
            <p style={{ color: "red" }}>{errors.username.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="lastname">lastname</label>
          <input type="text" {...register("lastname")} />

          {errors.lastname && (
            <p style={{ color: "red" }}>{errors.lastname.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastname">email</label>
          <input type="email" {...register("email")} />

          {errors.email && (
            <p style={{ color: "red" }}>{errors.email.message}</p>
          )}
        </div>
        <br />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default App;
