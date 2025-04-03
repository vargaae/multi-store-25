import styled from "styled-components";

import { Link } from "react-router-dom";

export const CarouselContainer = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  padding: 0.1rem;

  font-family: "Afacad", "Afacad Placeholder", sans-serif;
  font-optical-sizing: auto;
  font-weight: 300;
  font-style: normal;
  letter-spacing: -0.02em;
`;

export const CarouselItem = styled(Link)`
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0.7rem;
  background-color: rgb(255, 255, 255, 0.9);
  border-radius: 1rem;
  // BOX-SHADOW
  -webkit-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 5px -3px rgba(0, 0, 0, 0.75);

  img {
    border-radius: 5px;
  }

  $breakpoints: (
    xs: 0px,
    sm: 600px,
    md: 810px,
    lg: 1280px,
    xl: 1920px,
  );

$breakpoint-keys: map.keys($breakpoints);

$width: "min";

@mixin responsive($size, $width) {
  $query: map.get($breakpoints, $size);
  @media (#{$width}-width: #{$query}) {
    @content;
  }
}

min-height: 50dvh;

// MEDIA QUERIES
@media (min-width: 768px) {
  min-height: 50dvh;
}
@media (min-width: 1280px) {
  min-height: 40dvh;
}
@include responsive(md, min) {
  min-height: 600px;
  }
`;
