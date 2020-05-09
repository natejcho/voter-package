/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import Card from "../components/Card";
import Layout from "../components/Layout";

function Elections(props) {
  return (
    <Layout>
      <span>Election Date: {props.electionDate}</span>
      <table
        css={css`
          border-collapse: separate;
          border-spacing: 0 1rem;
          width: 100%;
        `}
      >
        <tbody>
          {props.elections.map((election, index) => {
            const office = election.office;
            return (
              <Card
                bill_id={0}
                comments={[]}
                index={index + 1}
                latest_major_action_date={props.electionDate}
                short_title={office.name + " | " + office.type}
                sponsor_name=""
                key={election.id}
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
      elections: ballotsData.data.districts.reduce((acc, { races }) => {
        if (races) return acc.concat(races);
        return acc;
      }, []),
      electionDate,
    },
  };
}

Elections.propTypes = {
  electionDate: PropTypes.string.isRequired,
  elections: PropTypes.array.isRequired,
};

export default Elections;
