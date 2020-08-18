import React, { useState } from "react";
import styled from "styled-components";
import { ReactNode } from "../utils/types";
import icons from "../assets/icons2.png";

interface AccordionProps {
  title?: string;
  icon?: ReactNode;
  expanded?: boolean;
}

const StyledAccordion = styled.div<AccordionProps>`
  display: block;
  h4 {
    margin: 0;
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 14px;
    color: rgba(0, 0, 0, 0.34);
    font-size: 13px;
    font-weight: bold;
    text-transform: uppercase;
    direction: ltr;
    position: relative;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
    }

    div {
      height: 20px;
      width: 20px;
      transition: transform 0.1s ease-out;
      background-image: url(${icons});
      background-repeat: no-repeat;
      background-size: 92px 1126px;
      background-position: -63px -735px;
      transform: ${(props) => !props.expanded && "rotate(90deg)"};
      direction: ltr;
      display: block;
      line-height: 16.64px;
    }
  }
  & > div {
    padding-bottom: 16px;
    display: block;
  }

  .divider {
    display: block;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0;
  }
`;

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <StyledAccordion expanded={expanded}>
      <div className="divider" />
      <h4 onClick={() => setExpanded(!expanded)}>
        {title}
        <div role="button" tabIndex={0} />
      </h4>
      {expanded && <div>{children}</div>}
    </StyledAccordion>
  );
};

export default Accordion;
