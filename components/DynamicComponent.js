import Teaser from "./Teaser";
import Feature from "./Feature";
import FeaturedPosts from "./FeaturedPosts";
import Grid from "./Grid";
import Placeholder from "./Placeholder";
import PostsList from "./PostsList";
import Page from "./Page";
import BlogPost from "./BlogPost";
import Text from "./Text";

const Components = {
  "featured-posts": FeaturedPosts,
  "selected-posts": PostsList,
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  page: Page,
  post: BlogPost,
  text: Text,
};

const DynamicComponent = ({ blok }) => {
  if (typeof Components[blok.component] !== "undefined") {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
