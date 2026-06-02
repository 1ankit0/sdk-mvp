// export class MySDK {
//   private apiKey: string | null = null;

//   init(config: { apiKey: string }) {
//     // this.apiKey = config.apiKey; 

//     console.log("SDK initialized");
//   }

//   track(event: string) {
//     console.log("Tracked:", event);
//   }
// }

import type {MySDKConfig, MySDKUIState} from './types';

type Listener = (state: MySDKUIState) => void;

export class MySDK {
  private apiKey: string | null = null;
  private initialized = false;
  private state: MySDKUIState = {
    visible: false,
    title: 'Welcome',
    message: 'This UI is coming from the SDK.',
  };
  private listeners = new Set<Listener>();

  init(config: MySDKConfig) {
    // this.apiKey = config.apiKey;
    this.initialized = true;
    console.log('SDK initialized');
  }

  track(event: string) {
    console.log('Tracked:', event);
  }

  showUI(payload?: Partial<Pick<MySDKUIState, 'title' | 'message'>>) {
    this.state = {
      ...this.state,
      ...payload,
      visible: true,
    };
    this.emit();
  }

  hideUI() {
    this.state = {
      ...this.state,
      visible: false,
    };
    this.emit();
  }

  getState() {
    return this.state;
  }

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    listener(this.state);

    return () => {
      this.listeners.delete(listener);
    };
  }

  private emit() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }
}