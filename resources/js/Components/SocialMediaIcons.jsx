import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const SocialMediaIcons = () => {
  const {
    ziggy: { url },
  } = usePage().props;

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={`${url}/assets/linkedin.png`} />
      </a>

      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={`${url}/assets/twitter.png`} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={`${url}/assets/facebook.png`} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={`${url}/assets/instagram.png`} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
