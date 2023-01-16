import fsPromises from 'fs/promises';
import path from 'path';

export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'json');
    const jsonData = await fsPromises.readFile(filePath + '/users.json', 'utf8');
    const objectData = JSON.parse(jsonData);
    return {
        props: objectData
    }

}

