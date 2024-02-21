import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from '../WordPressClient';

export const getHomeBlocks = async () => {
	const query = gql`
		query HomeBlocks {
			pageBy(uri: "/") {
				editorBlocks {
					name
					cssClassNames
					renderedHtml
					... on AcfHomepageHero {
						homepageHero {
							content
							subtitle
							title
						}
					}
				}
			}
		}
	`;

	const {
		data: { pageBy },
		headers,
	} = await client.rawRequest(query);

	return { pageBy, headers };
};
