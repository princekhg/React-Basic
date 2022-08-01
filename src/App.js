import logo from './logo.svg';
import './App.css';
import Greet from "./Component/FunctionalComponent";
import ClassComponent from "./Component/ClassComponent";
import Welcome from "./Component/Welcome";
import ClassState from "./Component/ClassState";
import FunctionalClick from "./Component/FunctionalClick";
import ClassClick from "./Component/ClassClick";
import EventBind from "./Component/EventBind";
import Form from "./Component/Form";
import LifeCycleA from "./Component/LifeCycleA";
import ParentComponent from "./Component/ParentComponent";
import UserGreeting from "./Component/UserGreeting";
import NameList from "./Component/NameList";
import StyleSheet from "./Component/StyleSheet";
import styles from './StyleSheet.module.css'
import InlineStyleSheet from "./Component/InlineStyleSheet";
import './Component/StyleSheetNormal.css'
import FragmentDemo from "./Component/FragmentDemo";
import Table from "./Component/Table";
import PureComp from "./Component/PureComp";
import ParentCompo from "./Component/ParentCompo";
import MemoComponent from "./Component/MemoComponent";
import RefsMemo from "./Component/RefsMemo";

function App() {
  return (
    <div className="App">


       <RefsMemo/>
        {/*<Table/>*/}
        {/*<FragmentDemo />*/}

        {/*<h1 className='error'>Error</h1>*/}
        {/*<h1 className={styles.success}>Success</h1>*/}
      {/*<Greet name = "Shubham" heroName = "CoderMan"/>*/}
      {/*  <ClassComponent name = "Hemant" heroName = "TesterMan"/>*/}
      {/*  <Welcome/>*/}
      {/*  <ClassState/>*/}
      {/*<FunctionalClick/>*/}
      {/*  <ClassClick/>*/}

    {/*  In case you want to check the output and how it works uncomment the above lines */}
    {/*  <EventBind/>*/}
    {/*  <Form/>*/}
    {/*    <LifeCycleA/>*/}
    {/*    <ParentComponent/>*/}
    {/*    <UserGreeting/>*/}
    {/*    <NameList/>*/}
    {/*    <StyleSheet primary={true}/>*/}
    {/*    <InlineStyleSheet/>*/}
    </div>
  );
}

export default App;
