import Profile from "../../components/Profile";
import fetch from "isomorphic-unfetch";

const name = ({ user }) => {
  if(!user) {
    return 'null';
  }
  return (
      <>
        <Profile user={user} />
      </>
  );
};

export const getServerSideProps = async ({ query }) => {
    const { name } = query;
    try {
        const res = await fetch(`https://api.github.com/users/${name}`,
            {headers: {Authorization: "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",},});
        if(res.status === 200) {
            const user = await res.json();
            return { props: { user }};
        }
        return { props: {}};
    } catch (e) {
        console.log(e);
        return { props: {}};
    }
};

export default name;