import fsPromises from 'fs/promises';
import path from 'path';


export async function getStaticProps({ params }) {
    const id = postId;
    const results = (postId[{id}])
    return {
        props: {
            user: results[0]
        }
    }
}