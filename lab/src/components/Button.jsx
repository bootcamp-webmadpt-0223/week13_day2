export function capitalize() {}

function Button(props) {
  console.log(props);
  return <button>{props.children}</button>;
}

export default Button;
