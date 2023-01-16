import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'json');
    const jsonData = await fsPromises.readFile(filePath + '/users.json', 'utf8');
    const objectData = JSON.parse(jsonData);
    const allUserId = objectData.users;



    return {
        paths: allUserId.map((user) => {user.id}),
        fallback: false
    }
}


export async function getStaticProps({ params }) {
    const id = allUserId;
    const results = (allUserId[{id}])
    return {
        props: {
            user: results[0]
        }
    }
}