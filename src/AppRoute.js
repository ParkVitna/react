import { Redirect, Route, Switch } from "react-router-dom";
import Ch01ComponentDeclaration from "views/Ch01ComponentDeclaration";
import Ch02JSX from "views/Ch02JSX";
import Ch03PropsAndState from "views/Ch03PropsAndState";
import Home from "views/Home";

function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponentDeclaration}/>
      <Route path="/ch02" component={Ch02JSX}/>
      <Route path="/ch03" component={Ch03PropsAndState}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRoute; 

