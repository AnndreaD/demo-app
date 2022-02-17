import { Dispatch } from "redux";
import { FeatureFlagDto, FeatureFlags, getFeatureFlags } from "../Api-client";

export enum Actions {
  GET_FEATURE_FLAGS = "RECEIVE_FEATURE_FLAGS",
}

export type Action = {
  type: Actions.GET_FEATURE_FLAGS;
  featureFlags: Record<string, boolean>;
};
//TODO add error and loading state
type FeatureFlagsState = {
  featureFlags: Record<FeatureFlags, boolean | undefined>;
};

const initialState: FeatureFlagsState = {
  featureFlags: {} as Record<FeatureFlags, boolean | undefined>,
};

export default function featureFlagsReducer(
  state = initialState,
  action: Action
): FeatureFlagsState {
  switch (action.type) {
    case Actions.GET_FEATURE_FLAGS:
      return {
        ...state,
        featureFlags: action.featureFlags,
      };

    default: {
      return state;
    }
  }
}

const mapper = (array: FeatureFlagDto[]): Record<string, boolean> => {
  return array.reduce((a, v) => {
    return { [v.name]: v.value };
  }, {});
};

export const fetchFeatureFlags = () => {
  return async (dispatch: Dispatch<Action>) => {
    try {
      const featureFlags = await getFeatureFlags();
      const mappedresult = mapper(featureFlags);

      dispatch({
        type: Actions.GET_FEATURE_FLAGS,
        featureFlags: mappedresult,
      });
    } catch (error: any) {
      //TODO push to logging
      console.log(error);
    }
  };
};
