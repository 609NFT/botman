import React from "react";
import Navigation from "../src/app/components/navigation";
import "../src/app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "react-bootstrap";

export default function About() {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css2?family=Bangers&display=swap"
        rel="stylesheet"
      ></link>
      <Navigation></Navigation>

      <Container>
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
              Renowned for its avant-garde approach to the integration of
              digital currency into every facet of daily life, Sotham has become
              synonymous with innovation. From the way its residents transact
              for basic necessities to the groundbreaking startups that line its
              bustling streets, the city breathes a culture of advancement and
              opportunity. Yet, beneath its glittering surface, Sotham embodies
              the dual nature of any great endeavor: the promise of monumental
              success shadowed closely by the risk of profound loss.
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
              Sothams residents.<br></br>
              <br></br>With programming that ranges from breaking news and live
              event coverage to in-depth discussions on market trends, CityTech
              is the digital town square of Sotham. It serves as a critical
              platform for announcements from the crypto industrys giants,
              updates on the latest investment opportunities, and spotlights on
              promising startups poised to become the next behemoths of the
              blockchain world.
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
              The arrival of LunarSol in Sotham was heralded as the dawn of a
              new era in digital finance, capturing the citys collective
              imagination and promising to redefine the cryptocurrency landscape
              with its pioneering blockchain technology. However, the glittering
              promise of LunarSol culminated in an event that would forever
              alter the course of Sothams history. In an unforeseen betrayal,
              the company orchestrated a devastating rug pull, disappearing into
              the ether with over $220 million of invested capital. This seismic
              event sent shockwaves throughout Sotham, leaving a scar on the
              citys psyche that still remains to this day. The LunarSol debacle
              became the defining moment for countless individuals, marking a
              before and after in the citys relationship with digital finance.
              To this day, the architects behind LunarSols grand deception
              remain at large, their identities shrouded in mystery and their
              actions a dark cloud hanging over Sotham, serving as a constant
              reminder of the fragility of trust in the digital age.
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
      </Container>
    </div>
  );
}
