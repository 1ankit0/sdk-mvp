import {useEffect, useState} from 'react';
import MySDK from '../index';

export function useMySDK() {
  const [state, setState] = useState(() => MySDK.getState());

  useEffect(() => {
    return MySDK.subscribe(setState);
  }, []);

  return {
    ...state,
    showUI: MySDK.showUI.bind(MySDK),
    hideUI: MySDK.hideUI.bind(MySDK),
  };
}
