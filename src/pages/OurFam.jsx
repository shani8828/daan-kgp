import React from "react";
import Fam from "../components/OurFam/Fam";
import { Helmet } from "react-helmet";

const OurFam = () => {
  document.title = "Our Fam | DAAN KGP";
  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <Helmet>
        <meta
          name="description"
          content="This is our God-Gifted Family of KGPian Dakshanites. We are proud of such a big and more importantly organised family. Kudos to Everyone!"
        />
      </Helmet>
      <Fam />
    </div>
  );
};

export default OurFam;
