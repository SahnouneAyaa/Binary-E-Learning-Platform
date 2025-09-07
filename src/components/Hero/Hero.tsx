import { DesktopMobile, HeroStyles, TabOnly } from "@/styles/HeroStyles/Hero";
import React, { FunctionComponent } from "react";
import Image from "next/image";
import HeroSearch from "./HeroSearch";
import Link from "next/link";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Hero: FunctionComponent = () => {
  const [text] = useTypewriter({
    words: ["Build", "Accelerate"],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 4800,
  });
  return (
    <DesktopMobile>
      <HeroStyles>
        <div className="hero-text">
          <h1>
            Let’s help you {text} <Cursor cursorColor="#531989" /> <br />
            your career in Tech
          </h1>
          <p className="hero-p">
            Binary Ascent is your dedicated e-learning platform, empowering you to master in-demand development skills and advance in the dynamic world of technology.
          </p>
          <HeroSearch />
          <div className="alink">
            <Link href={"/courses"}>
              <LinkStyle color="var(--purple, #7d26cd)">
                Browse Courses
              </LinkStyle>
            </Link>
          </div>
        </div>
        <div className="hero-img">
          <TabOnly>
            <Image
              alt="hero img"
              src="/assets/hero.jpg"
              width={700}
              height={500}
              sizes="100%"
              className="desktop"
            />
            <Image
              alt="hero img"
              src="/assets/hero.jpg"
              width={400}
              height={300}
              className="tab"
              sizes="100%"
            />
            <Image
              alt="hero img"
              src="/assets/hero_mobile.png"
              width={0}
              height={0}
              sizes="100vw"
              priority={true}
              className="mobile mobile-img"
            />
          </TabOnly>
        </div>
      </HeroStyles>
    </DesktopMobile>
  );
};

export default Hero;