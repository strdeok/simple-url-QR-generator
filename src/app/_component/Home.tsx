"use client";

import setUrl from "../_statemanagement/store";
import { useRouter } from "next/navigation";
import style from "./home.module.css";
import { ChangeEvent } from "react";

export default function Home() {
  const { url, saveUrl } = setUrl();
  const router = useRouter();

  const changeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    saveUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    router.push("/down");
  };
  return (
    <form onSubmit={handleSubmit} className={style.container}>
      <h1>URL QR 생성기</h1>
      <p>URL을 입력해주세요</p>
      <input
        type="url"
        className={style.input}
        required
        pattern="https?://.+"
        value={url}
        placeholder="https://example.com"
        onChange={(e) => {
          changeUrl(e);
        }}
      />
      <button type="submit" className={style.button}>
        QR 코드 생성하기
      </button>
    </form>
  );
}
