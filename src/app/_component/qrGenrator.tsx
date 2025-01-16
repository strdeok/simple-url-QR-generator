import { QRCodeCanvas } from "qrcode.react";
import setUrl from "../_statemanagement/store";
import style from "./qr.module.css";
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

export default function QRGenrator() {
  const { url } = setUrl();

  const downQR = () => {
    const node = document.getElementById("QRcode") as HTMLElement;

    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        const img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });

    htmlToImage.toPng(node).then(function (dataUrl) {
      download(dataUrl, `${url}QRcode.png`);
    });
  };

  return (
    <div className={style.container}>
      <QRCodeCanvas id="QRcode" value={url} />
      <button
        className={style.button}
        onClick={() => {
          downQR();
        }}
      >
        다운로드
      </button>
    </div>
  );
}
