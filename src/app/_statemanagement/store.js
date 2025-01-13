import { create } from "zustand";

// 초기 상태 정의
const setUrl = create((set) => ({
  url: "",
  saveUrl: (newUrl) => set(() => ({ url: newUrl })),
  deleteUrl: () => set(() => ({ url: "" })),
}));

export default setUrl;
