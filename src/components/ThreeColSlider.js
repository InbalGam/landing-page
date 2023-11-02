import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "./Headings";
import { PrimaryButton as PrimaryButtonBase } from "./Buttons";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import hiitImg from '../images/dylan-nolte-ITDjGji__6Y-unsplash.jpg';
import yogaImg from '../images/dane-wetton-t1NEMSm1rgI-unsplash.jpg';
import strengthImg from '../images/victor-freitas-hOuJYX2K5DA-unsplash.jpg';
import pilatesImg from '../images/logan-weaver-lgnwvr-u76Gd0hP5w4-unsplash.jpg';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;


const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: hiitImg,
      title: "High-Intensity Interval Training (HIIT)",
      description: "HIIT workouts involve short bursts of intense exercise followed by brief rest periods. They are known for their efficiency in burning calories, improving cardiovascular fitness, and building strength.",
    },
    {
      imageSrc: yogaImg,
      title: "Yoga",
      description: "Yoga combines physical postures, breathing exercises, and meditation to promote flexibility, balance, relaxation, and stress reduction. There are various yoga styles, including Hatha, Vinyasa, and Bikram, catering to different preferences and goals.",
    },
    {
      imageSrc: strengthImg,
      title: "Strength Training",
      description: "Strength training focuses on building muscle and increasing overall strength. It involves using resistance, such as weights, resistance bands, or bodyweight exercises like push-ups and squats. Strength training is essential for improving muscle tone and metabolism.",
    },
    {
      imageSrc: pilatesImg,
      title: "Pilates",
      description: "Pilates is a low-impact exercise system emphasizing core strength, flexibility, and a strong mind-body connection. It offers a versatile and effective approach to fitness, engaging the entire body and providing benefits like improved posture.",
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Popular Workouts</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              {/* <PrimaryButton>Book Now</PrimaryButton> */}
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
