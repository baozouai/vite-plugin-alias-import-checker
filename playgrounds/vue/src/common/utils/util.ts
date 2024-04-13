// 【/../hooks】请使用@hooks引入 
// import { useMounted } from "../../hooks";
import { useMounted } from "@hooks/useMount";

export function useCommon() {
  useMounted();
}

export function log1() {
  console.log(1)
}