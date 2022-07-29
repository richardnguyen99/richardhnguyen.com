/**
 * Index file for <Content /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import Content from "./Content";
import ContentTitle from "./Header";
import FrontMatter from "./FrontMatter";
import Thumbnail from "./Thumbnail";
import {
  StyledContentGrid,
  StyledDescription,
  StyledLabel,
  StyledLabels,
  StyledStickySideContent,
} from "./style";
import Chapter from "./Chapter";
import TOC from "./TOC";
import Section from "./Section";
import Pill from "./Pill";

const exported = Object.assign(Content, {
  Header: ContentTitle,
  FrontMatter,
  Thumbnail,
  Description: StyledDescription,
  Grid: StyledContentGrid,
  Side: StyledStickySideContent,
  Chapter: Chapter,
  Section,
  LabelContainer: StyledLabels,
  Label: StyledLabel,
  Pill,
  TOC,
});

export default exported;
