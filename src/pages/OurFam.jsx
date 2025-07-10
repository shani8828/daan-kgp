import React from "react";
import Fam from "../components/OurFam/Fam";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

const OurFam = () => {
  const { year } = useParams(); // <-- Get URL param like '24

  document.title = "Our Fam | DAAN KGP";

  return (
    <div className="min-h-screen pt-14 bg-gray-100">
      <Helmet>
        <meta
          name="description"
          content="This is our God-Gifted Family of KGPian Dakshanites. We are proud of such a big and more importantly organised family. Kudos to Everyone!"
        />
      </Helmet>
      <Fam yearParam={year} />
    </div>
  );
};

export default OurFam;
