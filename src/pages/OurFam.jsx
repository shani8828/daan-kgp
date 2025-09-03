import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import Fam from "../components/OurFam/Fam";

const OurFam = () => {
  const { year } = useParams();

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <Helmet>
        <title>Our Fam | DAAN KGP</title>
        <meta
          name="description"
          content="Meet our God-Gifted Family of KGPian Dakshanites. Proud, organized, and thriving together!"
        />
      </Helmet>

      <Fam yearParam={year} />
    </div>
  );
};

export default OurFam;