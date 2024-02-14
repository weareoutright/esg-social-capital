import { gql } from '@pantheon-systems/wordpress-kit';
import { client, getAuthCredentials } from '../WordPressClient';

export async function getHomePagePosts() {
	const query = gql`
		query HomeContent {
			posts(where: { categoryName: "Home" }) {
				nodes {
					content
					title
				}
			}
		}
	`;

	const {
		data: { posts },
		headers,
	} = await client.rawRequest(query);

	console.log({ posts, headers });

	return { posts, headers };
}
