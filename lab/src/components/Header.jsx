import Button from "./Button";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="ih-header">
      <Navbar className="nav" />
      <h1 className="ih-title">Say hello {"\n"} to react</h1>
      <p>
        You will learn how to use {"\n"}
        the most popular frontend linrary,{"\n"}
        and become a super Ninja developer
      </p>
      <Button prop2="This is my prop2" myNum={2} myBool={true} myStr={"my str"}>
        This is my inside text
      </Button>
    </header>
  );
}

export default Header;
