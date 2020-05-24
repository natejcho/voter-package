import styled from "@emotion/styled";
import tw from "@tailwindcssinjs/macro";
import fetch from "isomorphic-unfetch";
import PropTypes from "prop-types";
import Card from "components/Card";
import Layout from "components/Layout";
import { get_URI, parseCookies } from "lib";
import { UPVOTE_ENDPOINT, VOTE_TYPE } from "utils/constants";

//TODO: idk if i like table anymore
const StyledTable = styled.div`
  ${tw`w-full rounded bg-white`}
`;

const StyledDate = styled.div`
  ${tw`mb-2`}
  .date {
    ${tw`text-xl font-semibold leading-8`}
  }
`;

function Elections(props) {
  return (
    <Layout>
      <StyledDate>
        {" "}
        <span className="date">Election Date: {props.electionDate}</span>
      </StyledDate>
      <StyledTable>
        <ul>
          {props.elections.map((election, index) => {
            const office = election.office;
            return (
              <Card
                comments={[]}
                index={index + 1}
                key={election.id}
                latest_major_action_date={props.electionDate}
                link={election.url}
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
                votes={election.votes[VOTE_TYPE.UPVOTE]}
              />
            );
          })}
        </ul>
      </StyledTable>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  //TODO: add forward geocoding
  //   // fetch(FORWARD_GEOCODING_API).then(async locations => {
  //   //   const lat = '40.7487727';
  //   //   const long = '-73.9849336';
  //   //   return await

  const cookies = parseCookies(context.req);
  const [lat, long] =
    cookies.latitude && cookies.longitude
      ? [cookies.latitude, cookies.longitude]
      : ["40.7487727", "-73.9849336"];

  const [dbData, { ballotsData, electionDate }] = await Promise.all([
    // TODO: the host domain needs to depend on deployment
    fetch(`${get_URI(context)}/api/elections`, {
      method: "GET",
    }).then((data) => data.json()),
    fetch(
      `https://api4.ballotpedia.org/sample_ballot_elections?lat=${lat}&long=${long}`,
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
  const elections = ballotsData.data.districts
    .reduce((acc, { races }) => {
      if (races)
        return acc.concat(
          races.map((race) => ({
            ...race,
            votes: dbData[race.id] || {},
          }))
        );
      return acc;
    }, [])
    // TODO: lean on firestore to sort instead of sorting manually
    .sort((a, b) => b.votes[VOTE_TYPE.UPVOTE] - a.votes[VOTE_TYPE.UPVOTE]);
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
