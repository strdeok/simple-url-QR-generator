"use client";

import { useRouter } from "next/navigation";
import setUrl from "../_statemanagement/store";
import style from "./modal.module.css";
import QRGenrator from "./qrGenrator";
import Link from "next/link";

export default function Modal() {
  const { url, deleteUrl } = setUrl();
  const router = useRouter();
  return (
    <div className={style.container}>
      <div
        className={style.background}
        onClick={() => {
          deleteUrl();
          router.back();
        }}
      ></div>
      <div className={style.modal}>
        <QRGenrator />
        <Link href={url}>{url}</Link>
      </div>
    </div>
  );
}
