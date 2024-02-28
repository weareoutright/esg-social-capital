import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from '../WordPressClient';

export const getPhasePosts = async (phaseSlug) => {
	const query = gql`
	query PostBlocks {
		postBy(uri: "/${phaseSlug}") {
		  title
		  featuredImage {
			node {
			  sourceUrl
			}
		  }
		  phasePostFields {
			phaseLabel
			sidebarTransition {
			  startImage {
				node {
				  sourceUrl
				}
			  }
			  endImage {
				node {
				  sourceUrl
				}
			  }
			}
		  }
		  editorBlocks {
			name
			cssClassNames
			renderedHtml
			... on AcfActionStep {
			  actionStep {
				title
				description
				image {
				  node {
					sourceUrl
				  }
				}
				tools {
				  link {
					title
					target
					url
				  }
				}
				notes {
				  title
				  location
				  description
				  callToAction {
					url
					title
					target
				  }
				}
			  }
			}
			... on AcfResources {
			  resourcesList {
				section {
				  sectionLabel
				  subsection {
					subsectionLabel
					resourceLinks {
					  link {
						url
						title
						target
					  }
					}
				  }
				}
			  }
			}
		  }
		}
	  }
	`;

	const {
		data: { postBy },
		headers,
	} = await client.rawRequest(query);

	return { postBy, headers };
};
