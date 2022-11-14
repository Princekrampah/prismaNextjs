import { useForm } from "react-hook-form";
import Input from "./Input";
import InputSpacer from "./InputSpacer";

const FormError = ({ errorMessage }) => {
  return <p className="text-red-300 mt-1">{errorMessage}</p>;
};

export default function AddContactForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(props.onSubmit)}>
      <InputSpacer>
        <Input
          placeholder="First Name"
          name="firstName"
          formRef={register("firstName", { required: true })}
        />
        {errors.firstName && (
          <FormError errorMessage="First Name is required" />
        )}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Last Name"
          name="lastName"
          formRef={register("lastName", { required: true })}
        />
        {errors.lastName && <FormError errorMessage="Last Name is required" />}
      </InputSpacer>
      <InputSpacer>
        <Input
          placeholder="Email"
          name="email"
          formRef={register("email", { required: true })}
        />
        {errors.email && <FormError errorMessage="Email is required" />}
      </InputSpacer>

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
