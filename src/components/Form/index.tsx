import { useRouter } from "next/router";

export const Form = () => {
  const router = useRouter();

  const redirect = () => {
    router.push("/dashbord");
  };

  return (
    <div>
      <form>
        <label htmlFor="email">email</label>
        <input type="email" id="email" name="email" />
        <br></br>
        <label htmlFor="password">password</label>
        <input type="password" id="password" name="password" />
        <br></br>
        <button type="button" onClick={redirect}>
          Entrar
        </button>
      </form>
    </div>
  );
};
