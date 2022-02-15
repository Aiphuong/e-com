
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useDispatch } from 'react-redux'
import {set_user_info} from '../../../redux/actions/user'

const schema = Yup.object().shape({
  username: Yup.string().required("Please Enter your username"),
  password: Yup.string().min(8).max(32).required("ndfdsxfjsdjk"),
});
// const schema = Yup.object({
//   username: Yup.string()
//     .username("wrong username")
//     .required("Please Enter your username"),
//   password: Yup.string(
//     .required("Please Enter your password")
//     .matches(
//       /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
//       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
//     )
// });
function SignIn() {
  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
      setValue(e.target.value);
    };
    return {
      value,
      onChange: handleChange,
    };
  };

  const [error, setError] = useState("");

  const onFinish = (data) => {
    dispatch(set_user_info(data))
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFinish)}>
        <h2>Lets sign you in.</h2>
        <br />
        {errors.username ? <div>{errors.username}</div> : null}
        <input {...register("username")} placeholder="username" type="username" required />
        <p>{errors.username?.message}</p>
        <br />

        <input
          {...register("password")}
          placeholder="password"
          type="password"
          required
        />
        <p>{errors.password?.message}</p>
        <br />

        <button type="submit">Sign in</button>
      </form>
    </>
  );
}

export default SignIn;