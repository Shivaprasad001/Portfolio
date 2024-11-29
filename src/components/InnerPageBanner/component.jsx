import { Fragment } from "react";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";
import { useEffect } from "react";
export default function InnerPageBanner(props) {
  useEffect(() => {
    const titleCharacter = document.querySelectorAll(".title-char");
    gsap.fromTo(
      titleCharacter,
      { opacity: 0, translateX: "-20px" },
      { opacity: 1, duration: 1, stagger: 0.2, translateX: 0 }
    );
  }, []);
  return (
    <section className="inner-page-banner">
      <div className="inner-page-banner__content">
      <h1 className="inner-page-banner__title">
        {props.title.split("").map((char, index) => (
          <Fragment key={index}>
            <span className="title-char">{char}</span>
          </Fragment>
        ))}
      </h1>
      </div>
    </section>
  );
}
