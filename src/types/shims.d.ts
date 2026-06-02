declare module 'react' {
  export type ReactNode = any;
  export type ReactElement = any;
  export type JSXElementConstructor<P = any> = any;

  export function useSyncExternalStore<T>(
    subscribe: (onStoreChange: () => void) => () => void,
    getSnapshot: () => T,
    getServerSnapshot?: () => T,
  ): T;
  export function useState<T>(initialState: T | (() => T)): [T, (value: T) => void];
  export function useEffect(effect: () => void | (() => void), deps?: readonly unknown[]): void;

  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const Fragment: any;
  export const jsx: any;
  export const jsxs: any;
}

declare module 'react-native' {
  export const Modal: any;
  export const Pressable: any;
  export const StyleSheet: {
    create: (styles: Record<string, any>) => Record<string, any>;
  };
  export const Text: any;
  export const View: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
