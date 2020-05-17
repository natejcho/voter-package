/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { http } from "lib";
import PropTypes from "prop-types";
import Card from "components/Card";
import Layout from "components/Layout";

function Ballots(props) {
  return (
    <Layout>
      <span>Ballot Date: {props.electionDate}</span>
      <table
        css={css`
          border-collapse: separate;
          border-spacing: 0 1rem;
          width: 100%;
        `}
      >
        <tbody>
          {props.ballotMeasures.map((ballotMeasure) => {
            return (
              <Card
                bill_id="0"
                comments={[]}
                index={0}
                latest_major_action_date={props.electionDate}
                short_title={ballotMeasure.name}
                sponsor_name=""
                key={"ballot-measure-" + ballotMeasure.id}
                votes={0}
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
  const localBallots = await http(
    `https://api4.ballotpedia.org/sample_ballot_elections?lat=40.7487727&long=-73.9849336`,
    {
      method: "get",
      mode: "cors",
    }
  );
  const districts = localBallots.data.districts.map((d) => d.id).join();
  // november election
  const electionDate = localBallots.data.elections[1].date;
  const ballotsData = await http(
    `https://api4.ballotpedia.org/sample_ballot_results?districts=${districts}&election_date=${electionDate}`
  );
  return {
    props: {
      ballotMeasures: ballotsData.data.districts.reduce(
        (acc, { ballot_measures }) => {
          if (ballot_measures) return acc.concat(ballot_measures);
          return acc;
        },
        []
      ),
      pollData: ballotsData.data.poll_info[0],
      electionDate,
    },
  };
}

Ballots.propTypes = {
  ballotMeasures: PropTypes.array.isRequired,
  electionDate: PropTypes.string.isRequired,
  pollData: PropTypes.object.isRequired,
};

export default Ballots;
