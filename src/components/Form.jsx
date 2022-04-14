import React from "react";
import { useState, useEffect } from "react";
import styles from "./Form.module.css";
import { validEmail, validPassword } from "../regex";
/*

*/

function Form() {
  //   1 state par input
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [age, setAge] = useState("");
  //   const [address, setAddress] = useState("");

  //   1 state pour tous les inputs
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    age: "",
    address: "",
  });
  const [err, setErr] = useState(null);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {}, []);

  const onChangeInput = (input) => {
    // switch (inputValue.name) {
    //   case "email":
    //     setEmail(inputValue.value);
    //     break;
    //   case "password":
    //     setPassword(inputValue.value);
    //     break;
    //   case "age":
    //     setAge(inputValue.value);
    //     break;
    //   case "address":
    //     setAddress(inputValue.value);
    //     break;
    // }
    // setInputs({ email: email, password: password, age: age, address: address });

    setErr(null);

    setInputs({
      ...inputs,
      [input.name]: input.value,
    });
  };

  const validateInputField = (e) => {
    e.preventDefault();
    console.log(inputs);
    setIsValid(true);

    if (
      inputs.email === "" ||
      inputs.password === "" ||
      inputs.age === "" ||
      inputs.address === ""
    ) {
      setErr("Tous les champs doivent être remplis");
      setIsValid(false);
      return;
    }
    if (!validEmail.test(inputs.email)) {
      setErr("Email incorrect");
      setIsValid(false);
    }
    if (!validPassword.test(inputs.password)) {
      setErr("Mot de passe incorrect");
      setIsValid(false);
    }
    if (isNaN(inputs.age)) {
      setErr("Age incorrect");
      setIsValid(false);
    }
    if (inputs.address.length > 50 || inputs.address.length < 5) {
      setErr("Adresse incorrecte");
      setIsValid(false);
    }
  };

  return (
    <main className={styles.container}>
      <h1>Form Page</h1>

      {isValid ? (
        <p className={styles.successMessage}>Formulaire envoyé avec succès</p>
      ) : (
        <p className={styles.errorMessage}>{err}</p>
      )}

      <form>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => onChangeInput(e.target)}
          name="email"
          type="text"
          required
        />

        <label htmlFor="password">Mot de passe</label>

        <input
          onChange={(e) => onChangeInput(e.target)}
          name="password"
          type="password"
          required
        />
        <span style={{ fontSize: "0.8em" }}>
          Au moins une majuscule, un chiffre, un caractère spécial, minimum 8
          caractères
        </span>

        <label htmlFor="age">Age</label>
        <input
          onChange={(e) => onChangeInput(e.target)}
          name="age"
          type="text"
          required
        />

        <label htmlFor="address">Adresse</label>
        <input
          onChange={(e) => onChangeInput(e.target)}
          name="address"
          type="text"
          required
        />

        <button onClick={(e) => validateInputField(e)}>Valider</button>
      </form>
    </main>
  );
}

export default Form;
