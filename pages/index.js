import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
import Layout, {siteTitle} from "../components/layout";
import fsPromises from 'fs/promises';
import path from 'path';
export default function Home(props) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <h1 className={utilStyles.heading2X1}>Employee Search</h1>
      <section className={utilStyles.headingMd}>
          <p>This is a sample list of employees read from a json file in the file server located at
          /json/users.json. Given enough time, dynamic routes could be established for each of the
              employee's info,
              and user pages can be statically generated to be served at siteaddress/employees/[id].
          This works for dummy json data, but could be adapted to work with a database using REST apis.
              The user coordinates can be used with Google Maps API to display the user's location, and distance
              from the client, if the client's location is allowed to be shared in browser.
          </p>


          <ul className={utilStyles.list}>
                {props.users.map((user) => (
                    <div key={user.id} className={utilStyles.leaderboard_profile}>
                    <li key={user.id} className={utilStyles.leaderboard__name}>{
                       'Name:' + user.firstName+' '+user.lastName
                    + ', Email: '+user.email+', Latitude: '+user.address.coordinates.lat+', Longitude: '+user.address.coordinates.lng}
                    </li>
                    </div>
                ))}
          </ul>
        </section>
        {console.log(props)}
    </Layout>

  );
}




export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'json');
    const jsonData = await fsPromises.readFile(filePath + '/users.json', 'utf8');
    const objectData = JSON.parse(jsonData);
    return {
        props: objectData
    }

}



