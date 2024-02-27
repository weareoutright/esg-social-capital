import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from '../WordPressClient';

export const getHomeBlocks = async () => {
	const query = gql`
		query NewQuery {
			pageBy(uri: "/") {
				editorBlocks {
					name
					cssClassNames
					renderedHtml
					... on AcfHomepageHero {
						homepageHero {
							title
							subtitle
							content
							callToAction {
								target
								title
								url
							}
							backgroundImage {
								node {
									uri
								}
							}
						}
					}
					... on AcfWhySocap {
						blockEditorCategoryName
						whySocialCapitalMatters {
							title
							content
						}
					}
					... on AcfLeadersInField {
						leadersInTheField {
							title
							content
							gallery {
								affiliation
								videoUrl
								name
								headshot {
									node {
										uri
									}
								}
							}
						}
					}
					... on AcfHomepageMap {
						homepageMap {
							content
							locations {
								location
							}
							mapImage {
								node {
									uri
								}
							}
							responsiveImage {
								node {
									uri
								}
							}
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
