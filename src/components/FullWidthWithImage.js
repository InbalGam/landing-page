import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import heroImg from '../images/gabin-vallet-J154nEkpzlQ-unsplash.jpg';

import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "./light.js";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;

const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

const Container = tw.div`relative -mx-8 -mt-8`;
const TwoColumn = tw.div`flex flex-col lg:flex-row bg-gray-100`;
const LeftColumn = tw.div`ml-8 mr-8 xl:pl-10 py-8`;
const RightColumn = styled.div`
  background-image: url(${heroImg});
  ${tw`bg-green-500 bg-cover bg-center xl:ml-24 h-96 lg:h-auto lg:w-1/2 lg:flex-1`}
`;

const Content = tw.div`mt-24 lg:mt-24 lg:mb-24 flex flex-col sm:items-center lg:items-stretch`;
const Heading = tw.h1`text-3xl sm:text-5xl md:text-6xl lg:text-5xl font-black leading-none`;
const Paragraph = tw.p`max-w-md my-8 lg:my-8 sm:text-lg lg:text-base xl:text-lg leading-loose`;

const Actions = styled.div`
  ${tw`mb-8 lg:mb-0`}
  .action {
    ${tw`text-center inline-block w-full sm:w-48 py-4 font-semibold tracking-wide rounded hocus:outline-none focus:shadow-outline transition duration-300`}
  }
  .primaryAction {
    ${tw`bg-blue-500 text-gray-100 hover:bg-blue-700`}
  }
`;

export default ({
  // navLinks = [
  //   <NavLinks key={1}>
  //     <NavLink href="#">About</NavLink>
  //     <NavLink href="#">Blog</NavLink>
  //     <NavLink href="#">Pricing</NavLink>
  //     <NavLink href="#">Login</NavLink>
  //   </NavLinks>
  // ],
  heading = (
    <>
      Transforming Lives
      <wbr />
      <br />
      <span tw="text-blue-500">One Workout at a Time.</span>
    </>
  ),
  description = "Our personalized programs and expert guidance empower you to achieve your fitness goals. Join us on a journey to a healthier, stronger, and happier you.",
  primaryActionUrl = "#",
  primaryActionText = "Sign Up"
}) => {
  return (
    <Container>
      <TwoColumn>
        <LeftColumn>
          <StyledHeader collapseBreakpointClass="sm" />
          <Content>
            <Heading>{heading}</Heading>
            <Paragraph>{description}</Paragraph>
            <Actions>
              <a href={primaryActionUrl} className="action primaryAction">
                {primaryActionText}
              </a>
            </Actions>
          </Content>
        </LeftColumn>
        <RightColumn></RightColumn>
      </TwoColumn>
    </Container>
  );
};
