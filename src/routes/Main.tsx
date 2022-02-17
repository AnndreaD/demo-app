import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useFeatureFlags } from "../hooks";
import { fetchFeatureFlags } from "../Store/ui";
import { FeedbackformModal } from "./FeedbackFormModal";
import { ShortFormModal } from "./ShortFormModal";

export const Main = () => {
  const featureflag = useFeatureFlags();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFeatureFlags());
  }, [dispatch]);
  return (
    <>
      {featureflag.ENABLE_SHORT_FORM ? (
        <ShortFormModal />
      ) : (
        <FeedbackformModal />
      )}
    </>
  );
};
