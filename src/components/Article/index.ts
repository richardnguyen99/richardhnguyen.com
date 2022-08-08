/**
 * Index file for <Article /> components
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

import { StyledArticleContainer } from "./style";
import TimelineArticle from "./TimelineArticle";

const exported = Object.assign("Article", {
  Container: StyledArticleContainer,
  Timeline: TimelineArticle,
});

export default exported;
