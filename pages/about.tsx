import React from "react";
import Navigation from "../src/app/components/navigation";
import "../src/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, TabContainer } from "react-bootstrap";
import Image from "react-bootstrap";

export default function About() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation></Navigation>

      <TabContainer>
        <Row className="about_row align-items-center">
          <Col>
            <h2 className="about_header">Introduction</h2>
            <p className="about_p">
              Three years have passed since the infamous LunarSol saga turned
              Sothams world upside down, transforming what was once whispered as
              urban legend into a cautionary tale etched in the digital annals
              of the city. But its not just the skyscrapers that reach for the
              clouds in this bustling metropolis; its also the tales of a
              certain caped crusader that have really taken flight. Meet Botman:
              Sothams self-proclaimed hero, struck by Autism in the wake of the
              LunarSol chaos, who now spends his days roaming the streets of
              Sotham, trying to protect its residents. His superpower? The
              profound ability to elevate well-meaning to new, catastrophic
              heights, turning every attempt to help into a slapstick symphony
              that leaves the city teetering between erecting a statue in his
              honor or banning him from using adhesive tape unsupervised.
            </p>
          </Col>
        </Row>
        <Row className="about_row align-items-center">
          <Col sm={6}>
            <img className="about_image" src="/images/sotham.png"></img>
          </Col>
          <Col sm={6}>
            <h2 className="about_header">Sotham</h2>
            <p className="about_p">
              As we step into the year 2037, Sotham stands at the forefront of
              digital currency and blockchain technology, seamlessly integrating
              these innovations into the fabric of daily life. Renowned for its
              cutting-edge approach, the city has become a beacon for pioneers
              and investors alike, eager to explore the vast potential of
              blockchain. Every transaction, from purchasing daily essentials to
              the operations of groundbreaking startups, reflects Sothams
              commitment to pushing the boundaries of whats possible. However,
              this gleaming metropolis also presents a stark reminder of the
              delicate balance between groundbreaking success and the
              ever-present risk of failure.In the heart of Sotham, CityTech
              towers over the cityscape...
            </p>
          </Col>
        </Row>
        <Row className="about_row align-items-center">
          <Col sm={6}>
            <h2 className="about_header">CityTech (CTNN)</h2>
            <p className="about_p">
              CityTech is Sothams News Network that operates on the cutting
              edge, a 24/7 operation that broadcasts a continuous stream of
              data, news, and analysis directly into the homes and devices of
              Sothams residents. Watching CTNN isnt just a habit in Sotham—its a
              way of life.<br></br>
              <br></br>With programming that ranges from breaking news and live
              event coverage to in-depth discussions on market trends, CityTech
              is the digital town square of Sotham. It serves as a critical
              platform for announcements from the crypto industrys giants,
              updates on the latest investment opportunities, and spotlights on
              promising startups poised to become the next behemoths of the
              blockchain world.<br></br>
              <br></br>But not even CTNN was prepared for the seismic shock that
              was about to ripple through the very fabric of Sotham. The
              LunarSol event, looming on the horizon, was set to challenge
              everything…
            </p>
          </Col>
          <Col sm={6}>
            <img className="about_image" src="/images/ctnn.png"></img>
          </Col>
        </Row>
        <Row className="about_row align-items-center">
          <Col sm={6}>
            <img className="about_image" src="/images/lunasol.png"></img>
          </Col>
          <Col sm={6}>
            <h2 className="about_header">LunarSol</h2>
            <p className="about_p">
              In 2034, Sotham was on the brink of a revolution, thanks to a
              promising startup named LunarSol. With CityTechs comprehensive
              coverage, the citys anticipation reached fever pitch. Hailed as
              the dawn of a new digital finance era by CTNN, LunarSol was poised
              to redefine the cryptocurrency landscape with its innovative
              blockchain technology. The city, captivated by the promise of a
              brighter future, watched as LunarSol was celebrated as the beacon
              of tomorrows currency.<br></br>
              <br></br>Yet, this promised future dimmed abruptly. LunarSol, in a
              shocking turn of events, orchestrated a rug pull that saw over $10
              billion of investor capital vanish. This betrayal didnt just break
              Sothams trust; it altered the citys course, sending shockwaves
              through every household glued to CTNN.<br></br>
              <br></br>The aftermath was swift and severe. As the city grappled
              with the news, a palpable wave of disbelief and distress swept
              across its populace. Amidst the turmoil, a previously unknown
              affliction emerged – Autism, a stark byproduct of LunarSols
              deceit. This condition, marked by a profound financial shock,
              leads to dramatically altering an individuals behavior and mental
              state. It manifests in a series of acute symptoms: uncontrollable
              dribbling, a sharp decline in social skills, uncontrollable
              revengeful thoughts, and a propensity for making irrational
              decisions.<br></br>
              <br></br>Despite Sothams strides towards recovery, the legacy of
              LunarSols treachery remains indelible, casting a long shadow over
              the city. The architects of this deception are still at large,
              leaving behind not just financial devastation but the rise of
              Autism, a constant reminder of the fragility of trust in the face
              of innovation…
            </p>
          </Col>
        </Row>
        <Row className="about_row align-items-center">
          <Col>
            <h2 className="about_header">Autism</h2>
            <p className="about_p">
              Autism is a unique affliction that haunts the corridors of the
              cryptocurrency world, triggered by the catastrophic loss of funds
              through deceitful rug pulls. This sudden financial shock can
              dramatically alter an individuals behavior and mental state,
              manifesting in a series of acute symptoms: uncontrollable
              dribbling, a marked decline in social skills, the emergence of
              revengeful thoughts, and a propensity for making irrational
              decisions. These manifestations of Autism can endure for years,
              holding individuals in a grip from which there seems no escape, as
              no medical remedy exists. However, those struck by this condition
              do, with time, find their way back to themselves, emerging from
              the depths of their despair to reclaim their place in the world.
            </p>
          </Col>
        </Row>
        <Row className="about_row align-items-center">
          <Col>
            <h2 className="about_header">Backstory: How Glen Became Botman</h2>
            <p className="about_p">
              Back in 2034, the landscape of society is irrevocably altered by
              the integration of cryptocurrency and blockchain technology into
              the fabric of everyday life. From banking operations to the casual
              acquisition of consumer goods, digital currency reigns supreme,
              especially in larger cities. Yet, Sotham stands apart as the
              Silicon Valley of this digital gold rush, a beacon for those drawn
              to the forefront of blockchain innovation and investment
              opportunities. Its a city where dreams of digital fortunes draw in
              investors, venture capitalists, and developers from all corners of
              the globe, promising a shot at achieving Valhalla in the crypto
              realm. However, the harsh reality is that while a select few reach
              unparalleled heights, the majority depart with nothing but
              shattered dreams and a profound sense of disillusionment.<br></br>
              <br></br>
              CityTech, Sothams premier news network, operates tirelessly,
              broadcasting the pulse of the crypto world through 24/7 coverage.
              From breaking news and live reports on the industrys latest
              developments to real-time updates on investment prospects,
              start-ups, and job openings, staying glued to CityTech is an
              unspoken mandate for anyone hoping to carve out their niche in
              Sothams competitive landscape.<br></br>
              <br></br>
              Glen, a product of Sothams blue-collar backbone, spent his
              formative years toiling in local stores and tackling odd jobs,
              amassing savings with a diligence born of humble beginnings. One
              fateful night, as Glen was moments away from shutting down his
              computer, a breaking news alert from CityTech seized his
              attention: LunarSol, a new crypto startup, was making its way to
              Sotham. The rumor mill had been abuzz with whispers of a
              game-changing enterprise set to descend upon the city, but it was
              only now that speculation crystallized into reality. Electrified
              by the potential before him, Glen devoted the entire night to
              researching LunarSol, swept up in the tidal wave of excitement
              that gripped the city as influencers and media outlets heralded
              the startup as the next big thing.<br></br>
              <br></br>In response to the frenzied anticipation, LunarSol
              announced an exclusive ICO for Sothams residents, a gesture of
              gratitude for their fervent support. The news ignited an
              unprecedented frenzy, with the contagion of FOMO infiltrating
              every corner of Sotham. Glen, like many others, found himself
              unable to resist the allure, his adrenaline spiking at the
              prospect of securing a piece of what was touted as a guaranteed
              windfall.<br></br>
              <br></br>
              In the days leading up to the ICO, Glen liquidated his existing
              investments at a loss, desperate to gather more funds for what he
              believed to be a once-in-a-lifetime opportunity. When even this
              extreme measure proved insufficient, he resorted to maxing out his
              crypto credit limits, convinced of the infallibility of his
              gamble.<br></br>
              <br></br>However, in the 14th hour of the ICO, disaster struck.
              The developers behind LunarSol executed a rug pull, vanishing with
              over $220 million of investor funds. The magnitude of Glens loss
              in that transaction remains unknown, but the fallout was
              catastrophic. Glen, along with countless others, succumbed to
              Autism, a condition marked by a sudden onslaught of symptoms
              including loss of social skills, dribbling, and a propensity for
              making irrational decisions—a direct consequence of the severe
              financial loss and betrayal.<br></br>
              <br></br>Whilst in the grips of Autism, driven by a muddled mix of
              despair and dribble, some residents descended into their closets
              and reamerged, lets say, differently. Unbeknownst to Sotham at the
              time, that was the moment the most unlikely of heros was born:
              Botman.
            </p>
          </Col>
        </Row>
      </TabContainer>
    </div>
  );
}
