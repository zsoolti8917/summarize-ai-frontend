import { Link } from "lucide-react";
import qs from "qs";
import { flattenAttributes } from "@/lib/utils";
import { HeroSection } from "@/components/custom/HeroSection";
import {FeatureSection} from "@/components/custom/FeatureSection";
import { getStrapiURL } from "@/lib/utils";
import { getHomePageData } from "@/data/loaders";
const homePageQuery = qs.stringify({
 /* populate: {
    blocks: {
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true
        },
        featureSection :{
          populate: "*"
        },
      }
    }
  }*/

  populate: {
    blocks: {
      populate: {
        image: {
          fields: ["url", "alternativeText"],
        },
        link: {
          populate: true,
        },
        features: {
          populate: true,
        },
      },
    },
  },
});

function blockRenderer(block) {
  switch (block.__component) {
    case "layout.hero-section":
      return <HeroSection key={block.id} data={block} />;
    case "layout.feature-section":
      return <FeatureSection key={block.id} data={block} />;
    default:
      return null;
  }
}




export default async function Home() {
  const data = await getHomePageData();
  const { title, description } = data;
  const { blocks } = data;
  if(!blocks){
    return <div> No Blocks Found</div>
  };
  return (
  <main>
    {blocks.map((block) => blockRenderer(block))}
  </main>
  );
}
