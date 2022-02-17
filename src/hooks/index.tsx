import { useSelector } from "react-redux";
import { RootState } from "../Store";

export function useFeatureFlags() {
  return useSelector((state: RootState) => state.ui.featureFlags);
}
