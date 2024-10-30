import React from "react";
import { useTranslation } from "react-i18next";
import "./HomePageApproach.styles.scss";

const HomePageApproachComponent = () => {
  //1334px
  const { t } = useTranslation();

  return (
    <section className="StyledHomePageApproachSection">
      <div style={{ margin: "0 auto" }}>
        <h2 className="StyledHomePageApproachHeadline">
          {t("main.homepage.ourApproachSection.headline")}
        </h2>
        <div className="approach-container">
          <div className="info-block first">
            <h3>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.bigInfoBlock.headline"
              )}
            </h3>
            <p>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.bigInfoBlock.paragraph"
              )}
            </p>
          </div>
          <div className="StyledHomePageApproachImage second" />
          <div className="info-block third">
            <h3>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.firstInfoBlock.headline"
              )}
            </h3>
            <p>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.firstInfoBlock.paragraph"
              )}
            </p>
          </div>
          <div className="info-block fourth">
            <h3>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.secondInfoBlock.headline"
              )}
            </h3>
            <p>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.secondInfoBlock.paragraph"
              )}
            </p>
          </div>

          <div className="info-block fifth">
            <h3>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.thirdInfoBlock.headline"
              )}
            </h3>
            <p>
              {t(
                "main.homepage.ourApproachSection.infoBlocks.smallInfoBlocks.thirdInfoBlock.paragraph"
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageApproachComponent;
