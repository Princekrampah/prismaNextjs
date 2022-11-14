export default function Input(props) {
    console.log(props.formRef)
  return (
    <input
      className="rounded p-4 text-xl w-full"
      name={props.name}
      placeholder={props.placeholder}
      {...props.formRef}
    />
  );
}
