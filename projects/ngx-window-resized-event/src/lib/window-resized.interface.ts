interface HostElementProps {
  offset: number;
  client: number;
  scroll: number;
}

interface HostElementSize {
  height: HostElementProps;
  width: HostElementProps;
}

interface WindowProps {
  inner: number;
  outer: number
}

interface WindowSize {
  height: WindowProps;
  width: WindowProps;
}

export interface WindowResized {
  hostElement: HostElementSize;
  window: WindowSize;
}
