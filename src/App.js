import { useCallback } from 'react';
import { useState } from 'react';
import Accordion from './accordion/Accordion';
import './App.css';
import BootstrapExample from './BootstrapExample.js/BootstrapExample';
import FormControlBootStraps from './BootstrapExample.js/FormControlBootStraps';
import APIdatafetching from './component/APIdatafetching';
import DisableButton from './component/DisableButton';
import DisplayArray from "./component/DisplayArray";
import FetchDataFromAPI from './component/FetchDataFromAPI';
// import LoginForm from './registration/LoginForm';
import LoginForm from "./component/LoginForm";
import SearchElement from './component/SearchElement';
import ShowHideElement from './component/ShowHideElement';
import TwoWayDataBinding from './component/TwoWayDataBinding';
import Countrystatecity from './countryStateCitySelection/Countrystatecity';
import EditTextField from './editTextFieldWithRedux/EditTextField';
import FetchmoreDatafromAPI from './fetchMoreDatafromAPI/FetchmoreDatafromAPI';
import ImgSearchEng from './imagesearchengine/ImgSearchEng';
import Infinitescroll from './infinitescroll/Infinitescroll';
import MaterialUI from './materialUI/MaterialUI';
import MUI from './materialUI/MUI';
import IncrementDecrementNumber from './reduxExamplewithIncDec/IncrementDecrementNumber';
import SelectOptionPOC from './SelectOptionPOC/SelectOptionPOC';
import Signup from './signup/Signup';
// import Parent from './reactMemo/Parent';  //memo
import Parent from './useCallback/Parent';
import UserProfile from './userProfile/UserProfile';
function App() {
  const [bgcolor,setBgcolor]=useState(true);
const handlecolor=useCallback(()=>{
  setBgcolor(!bgcolor);
  console.log(!bgcolor,"sabir")
},[bgcolor])
  return (
    // <div className="App" style={{ backgroundColor: bgcolor ? "white" : "#1f2937" }}>
    <div className="App">
      {/* <DisplayArray/> */}
      {/* <ShowHideElement/> */}
      {/* <TwoWayDataBinding/> */}
      {/* <DisableButton/> */}
      {/* <FetchDataFromAPI/> */}
      {/* <APIdatafetching/> */}
      {/* <LoginForm/> */}
      {/* <UserProfile/> */}
      {/* <SearchElement/> */}
      {/* <Parent handlecolor={handlecolor}/> */}
      {/* <Infinitescroll/> */}
      {/* <FetchmoreDatafromAPI/> */}
      {/* <LoginForm/> */}
      {/* <Signup/> */}
      {/* <BootstrapExample/> */}
      {/* <FormControlBootStraps/> */}
      {/* <Countrystatecity/> */}
      {/* <ImgSearchEng/> */}
      {/* <Accordion/> */}
      {/* <IncrementDecrementNumber/> */}
      {/* <MUI/> */}
      {/* <EditTextField/> */}
      <SelectOptionPOC/>
    </div>
  );
}

export default App;