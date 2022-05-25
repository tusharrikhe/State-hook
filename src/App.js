import React from 'react';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';
import HookHover from './components/HookHover';
import HookCounterThree from './components/HookCounterThree';
import HookCounterFour from './components/HookCounterFour';
import ClassCounterOne from './components/ClassCounterOne';
import UeffHookCountOne from './components/UeffHookCountOne';
import ClassMove from './components/ClassMove';
import HookMove from './components/HookMove';
import HookContainer from './components/HookContainer';
import ClassInterval from './components/ClassInterval';
import HookInterval from './components/HookInterval';
import DataFetching from './components/DataFetching';
import ComponentC from './components/ComponentC';
import Parent from './useCallBack.js/Parent';
import UseMemoHook from './useMemo/UseMemoHook.js'
import InputRef from './useRefHok/InputRef.js'
import ClassTimer from './useRefHok/ClassTimer.js'
import HookTimer from './useRefHok/HookTimer.js'
import Parent1 from './useCallBack.js/Parent1';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
function App() {
  return (
    <div className="App">
      {/*<HookCounter/>*/}
      {/* <HookHover/>*/}
      {/* <HookCounterTwo/>*/}
      {/* <HookCounterThree/>*/}
      {/* <HookCounterFour/> */}
      {/* <ClassCounterOne/> */}
      {/* <UeffHookCountOne /> */}
      {/* <ClassMove/> */}
      {/* <HookMove/> */}
      {/* <HookContainer /> */}
      {/* <ClassInterval/> */}
      {/* <HookInterval/> */}
      {/* <DataFetching/> */}
      {/* <UserContext.Provider value="Tushar">

<ChannelContext.Provider value={'Kanu'}>

    <ComponentC/>

</ChannelContext.Provider>
     
</UserContext.Provider> */}
      {/* <Parent/> */}
      {/* <UseMemoHook/> */}

      {/* <InputRef/> */}
      {/* <ClassTimer/> */}
      {/* <HookTimer/> */}
      <Parent1 />
    </div>
  );
}

export default App;
