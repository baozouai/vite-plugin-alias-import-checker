// please use @hooks to import Instead of【../hooks】
// import { useIsMounted } from "../../hooks";
import { useIsMounted } from "@hooks/useIsMounted";

export function useCommon() {
  useIsMounted();
}

export function log1() {
  console.log(1)
}