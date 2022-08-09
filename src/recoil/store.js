import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

// token-recoil-persist
const { persistAtom: tokenPersist } = recoilPersist({
  key: "X-REFRESH-TOKEN",
});
export const tokenState = atom({
  key: "X-REFRESH-TOKEN",
  default: "",
  effects_UNSTABLE: [tokenPersist],
});

export const useRefreshToken = () => {
  const [refreshToken, setRefreshToken] = useRecoilState(tokenState);
  return { refreshToken, setRefreshToken };
};
