import { Redirect, Route, Switch } from "react-router-dom";
import Ch01ComponentDeclaration from "views/Ch01ComponentDeclaration";
import Ch02JSX from "views/Ch02JSX";
import Ch03PropsAndState from "views/Ch03PropsAndState";
import Ch04LifeCycle from "views/Ch04LifeCycle";
import Ch05Style from "views/Ch05Style";
import Ch06Route from "views/Ch06Route";
import Home from "views/Home";

function AppRoute() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/ch01" component={Ch01ComponentDeclaration}/>
      <Route path="/ch02" component={Ch02JSX}/>
      <Route path="/ch03" component={Ch03PropsAndState}/>
      <Route path="/ch04" component={Ch04LifeCycle}/>
      <Route path="/ch05" component={Ch05Style}/>
      <Route path="/ch06" component={Ch06Route}/>
      <Redirect to="/"/>
    </Switch>
  );
}

export default AppRoute; 

