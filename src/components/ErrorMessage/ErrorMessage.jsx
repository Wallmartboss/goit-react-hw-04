import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <p className={s.errorText}> Something went wrong! Try again... </p>
  )
}

export default ErrorMessage