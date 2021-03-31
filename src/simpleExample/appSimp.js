import React  from 'react';
import SimpleContextProvider from './simpleContext'
import Booklist from './Booklist'




function AppSimp() {
   
  
  return (
    <SimpleContextProvider>
      <Booklist/>
    </SimpleContextProvider>


  );
}


export default AppSimp;
