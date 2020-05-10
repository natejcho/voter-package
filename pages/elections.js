/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { UPVOTE_ENDPOINT, VOTE_TYPE_ENUM } from "../utils/constants";

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
                bill_id="0"
                comments={[]}
                index={index + 1}
                key={election.id}
                latest_major_action_date={props.electionDate}
                onUpvote={(type) => {
                  fetch(UPVOTE_ENDPOINT, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      id: election.id,
                      type,
                      collection: "elections",
                    }),
                  });
                }}
                short_title={office.name + " | " + office.type}
                sponsor_name=""
                votes={election.votes[VOTE_TYPE_ENUM.UPVOTE]}
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

  const [dbData, { ballotsData, electionDate }] = await Promise.all([
    // TODO: the host domain needs to depend on deployment
    fetch("http://localhost:3000/api/elections", {
      method: "GET",
    }).then((data) => data.json()),
    fetch(
      `https://api4.ballotpedia.org/sample_ballot_elections?lat=40.7487727&long=-73.9849336`,
      {
        method: "get",
        mode: "cors",
      }
    ).then(async (data) => {
      const localBallots = await data.json();
      const districts = localBallots.data.districts.map((d) => d.id).join();
      const electionDate = localBallots.data.elections[0].date;
      const ballotsData = await fetch(
        `https://api4.ballotpedia.org/sample_ballot_results?districts=${districts}&election_date=${electionDate}`
      ).then((data) => data.json());
      return {
        electionDate,
        ballotsData,
      };
    }),
  ]);
  const elections = ballotsData.data.districts.reduce((acc, { races }) => {
    if (races)
      return acc.concat(
        races.map((race) => ({
          ...race,
          votes: dbData[race.id] || {},
        }))
      );
    return acc;
  }, []);
  // let dbData = await
  // dbData = await dbData.json();
  // let localBallots = await ;
  // localBallots = await localBallots.json();
  // const districts = localBallots.data.districts.map((d) => d.id).join();
  // const electionDate = localBallots.data.elections[0].date;
  // let ballotsData = await fetch(
  //   `https://api4.ballotpedia.org/sample_ballot_results?districts=${districts}&election_date=${electionDate}`
  // );
  // ballotsData = await ballotsData.json();
  return {
    props: {
      elections,
      electionDate,
    },
  };
}

Elections.propTypes = {
  electionDate: PropTypes.string.isRequired,
  elections: PropTypes.array.isRequired,
};

export default Elections;
