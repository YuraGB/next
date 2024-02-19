import { type ReactNode } from "react";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  ViberIcon,
  ViberShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareComponent = (): ReactNode => {
  return (
    <section className={"flex gap-3"}>
      <EmailShareButton url={window.location.href}>
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      <FacebookShareButton url={window.location.href}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <TelegramShareButton url={window.location.href}>
        <TelegramIcon size={32} round={true} />
      </TelegramShareButton>
      <ViberShareButton url={window.location.href}>
        <ViberIcon size={32} round={true} />
      </ViberShareButton>
      <WhatsappShareButton url={window.location.href}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </section>
  );
};

export default ShareComponent;
