/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import Card from "../components/Card";
import Layout from "../components/Layout";

function Ballots(props) {
  return (
    <Layout>
      <span>Election Date: {props.electionDate}</span>
      <table
        css={css`
          border-collapse: separate;
          border-spacing: 0 1rem;
        `}
      >
        <tbody>
          {false &&
            props.ballotMeasures.map((card, index) => (
              <Card
                key={card.bill_id}
                index={index + 1}
                comments={props.billsMap[card.bill_id].comments}
                congress={props.recentBills.congress}
                votes={props.billsMap[card.bill_id].votes}
              />
            ))}
          {props.races.map((race, index) => {
            race = race[0];
            const office = race.office;
            return (
              <Card
                bill_id={0}
                comments={[]}
                index={index + 1}
                latest_major_action_date={props.electionDate}
                short_title={office.name + "|" + office.type}
                sponsor_name=""
                key={race.id}
                votes={index}
              />
            );
          })}
        </tbody>
      </table>
    </Layout>
  );
}

export async function getServerSideProps() {
  //TODO: add forward geocoding
  //   // fetch(FORWARD_GEOCODING_API).then(async locations => {
  //   //   const lat = '40.7487727';
  //   //   const long = '-73.9849336';
  //   //   return await
  let localBallots = await fetch(
    `https://api4.ballotpedia.org/sample_ballot_elections?lat=40.7487727&long=-73.9849336`,
    {
      method: "get",
      mode: "cors",
    }
  );
  localBallots = await localBallots.json();
  const districts = localBallots.data.districts.map((d) => d.id).join();
  const electionDate = localBallots.data.elections[0].date;
  let ballotsData = await fetch(
    `https://api4.ballotpedia.org/sample_ballot_results?districts=${districts}&election_date=${electionDate}`
  );
  ballotsData = await ballotsData.json();
  return {
    props: {
      ...ballotsData.data.districts.reduce(
        (acc, { races, ballot_measures }) => {
          if (ballot_measures) acc.ballotMeasures.push(ballot_measures);
          if (races) acc.races.push(races);
          return acc;
        },
        { ballotMeasures: [], races: [] }
      ),
      electionDate,
    },
  };
}

Ballots.propTypes = {
  ballotMeasures: PropTypes.array.isRequired,
  electionDate: PropTypes.string.isRequired,
  races: PropTypes.array.isRequired,
};

export default Ballots;
