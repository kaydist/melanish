import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Footer from "../components/footer";
import Layout from "../layouts/layout";

// markup
const IndexPage = () => {
  return (
    <Layout>
        <div className="max-w-full start overflow-x-auto overflow-y-hidden no-scrollbar content-min-h">
          <Link to="/project">
          <div className="min-w-[100vw]  max-h-[60vh] center relative">
            <div className="max-w-[60%] overflow-hidden">
              <StaticImage
                src="../images/project/editorial/Main-IMG.png"
                alt="Editorial"
                className="object-contain"
              />
            </div>
            <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-[25%] md:bottom-[10%] absolute z-10">
              EDITORIAL
            </h2>
          </div>
          </Link>

          <div className="min-w-[100vw]  max-h-[60vh] center relative">
            <div className="max-w-[60%] overflow-hidden">
              <StaticImage
                src="../images/project/pale-lady/Main-IMG.png"
                alt="Editorial"
                className="object-contain"
              />
            </div>
            <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-[25%] md:bottom-[10%] absolute z-10">
              PALE LADY
            </h2>
          </div>

          <div className="min-w-[100vw]  max-h-[60vh] center relative">
            <div className="max-w-[60%] overflow-hidden">
              <StaticImage
                src="../images/project/MELANISH/Main-IMG.png"
                alt="Editorial"
                className="object-contain"
              />
            </div>
            <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-[25%] md:bottom-[10%] absolute z-10">
              MELANISH
            </h2>
          </div>

          <div className="min-w-[100vw]  max-h-[60vh] center relative">
            <div className="max-w-[60%] overflow-hidden">
              <StaticImage
                src="../images/project/editorial/Main-IMG.png"
                alt="Editorial"
                className="object-contain"
              />
            </div>
            <h2 className="uppercase font-CormorantGaramond text-[10.69vw] bottom-[25%] md:bottom-[10%] absolute z-10">
              EDITORIAL
            </h2>
          </div>
        </div>

        <Footer />
    </Layout>
  );
};

export default IndexPage;
