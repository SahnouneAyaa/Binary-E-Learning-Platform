import { DesktopMobile, TabOnly } from "@/styles/HeroStyles/Hero";
import { ActualPaddedSectionStyle } from "@/styles/HomepageStyles/Section";
import { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { LinkStyle } from "@/styles/LinkStyles/Link";
import {
  AboutHeroStyles,
  TeamMemberStyles,
  TeamStyle,
  TeamTabOnly,
} from "@/styles/AboutpageStyles/Aboutpage";
import SectionHead from "../SectionHead/SectionHead";
import { TeamMembers } from "@/Constant/constant";
import { SmallNoMargin, XtraSmall } from "@/styles/SectionHeadStyles/Small";
import { motion } from "framer-motion";
import { behindVariants } from "@/Animations/LandingPageVariants";

export const AboutHero: FunctionComponent = () => {
  return (
    <DesktopMobile>
      <AboutHeroStyles>
        <motion.div
          className="behind desktop"
          variants={behindVariants}
          initial="initial"
          whileInView="final"
          viewport={{ once: true }}
        ></motion.div>
        <ActualPaddedSectionStyle>
          <div className="main">
            <div className="hero-text">
              <h1>
                Welcome to Binary Ascent’s E-learning Platform
              </h1>
              <p className="desktop hero-p">
                At Binary Ascent, we provide expert-led courses and essential resources to elevate your coding skills and accelerate your tech career.
              </p>
              <div className="desktop">
                <div className="action">
                  <Link href={"/courses"}>
                    <LinkStyle color="var(--purple, #7d26cd)">
                      Explore Our Courses
                    </LinkStyle>
                  </Link>
                </div>
              </div>
            </div>
            <div className="hero-img">
              <TabOnly>
                <Image
                  alt="hero img"
                  src="/assets/experts.jpg"
                  width={517.695}
                  height={402.511}
                  priority={true}
                  className="desktop"
                />
                <Image
                  alt="hero img"
                  src="/assets/experts.jpg"
                  width={350}
                  height={250}
                  priority={true}
                  className="tab"
                />
                <Image
                  alt="hero img"
                  src="/assets/experts.jpg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  priority={true}
                  className="mobile mobile-img"
                />
              </TabOnly>
            </div>
            <p className="mobile hero-p">
              At Binary Ascent, we provide expert-led courses and essential resources to elevate your coding skills and accelerate your tech career.
            </p>
            <div className="mobile">
              <div className="action">
                <Link href={"/courses"}>
                  <LinkStyle color="var(--purple, #7d26cd)">
                    Explore Our Courses
                  </LinkStyle>
                </Link>
              </div>
            </div>
          </div>
        </ActualPaddedSectionStyle>
      </AboutHeroStyles>
    </DesktopMobile>
  );
};

export interface ITeamMember {
  image: string;
  name: string;
  post: string;
  desc: string;
}

export const TeamMemberComp: FunctionComponent<ITeamMember> = ({
  name,
  post,
  image,
  desc,
}) => {
  return (
    <TeamMemberStyles>
      <TeamTabOnly>
        <Image
          alt={name}
          src={image}
          width={384}
          height={456}
          className="desktop"
        />
        <Image
          alt={name}
          src={image}
          width={384}
          height={456}
          className="tab"
        />
        <Image
          alt={name}
          src={image}
          width={0}
          height={0}
          sizes="100vw"
          priority={true}
          className="mobile mobile-img"
        />
      </TeamTabOnly>
      <div className="deet">
        <h4>{name}</h4>
        <XtraSmall>{post}</XtraSmall>
      </div>
      <SmallNoMargin>{desc}</SmallNoMargin>
    </TeamMemberStyles>
  );
};

export const Team: FunctionComponent = () => {
  return (
    <>
      <TeamStyle>
        <SectionHead
          bigtext="Meet Our Expert Instructors"
          smalltext="Learn from industry leaders and experienced developers dedicated to your success."
        />
        <ActualPaddedSectionStyle>
          <div className="team">
            {TeamMembers.map((ele, index) => (
              <TeamMemberComp
                key={index}
                name={ele.name}
                image={ele.image}
                post={ele.post}
                desc={ele.desc}
              />
            ))}
          </div>
        </ActualPaddedSectionStyle>
      </TeamStyle>
    </>
  );
};
