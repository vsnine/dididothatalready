import clsx from "clsx";

import { Image } from "..";
import { getSiteMetaData } from "@utils/helpers";

export function Bio({ className }) {
  const { author, social } = getSiteMetaData();
  return null;
/*   return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
        src={require("../../../content/assets/profile.png")}
        webpSrc={require("../../../content/assets/profile.png?webp")}
        previewSrc={require("../../../content/assets/profile.png?lqip")}
        alt="Profile"
      />
    </div>
  ); */
}
