import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from '../WordPressClient';

export const getLayTheFoundationPosts = async () => {
	const query = gql`
		query PostBlocks {
			postBy(uri: "/laythefoundation") {
				title
				featuredImage {
					node {
						sourceUrl
					}
				}
				phasePostFields {
					phaseLabel
					sidebarImage {
						node {
							sourceUrl
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

export const getDesignTheSupportsPosts = async () => {
	const query = gql`
		query PostBlocks {
			postBy(uri: "/designthesupports") {
				title
				featuredImage {
					node {
						sourceUrl
					}
				}
				phasePostFields {
					phaseLabel
					sidebarImage {
						node {
							sourceUrl
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

export const getExecuteAndEvaluatePosts = async () => {
	const query = gql`
		query PostBlocks {
			postBy(uri: "/executeandevaluate") {
				title
				featuredImage {
					node {
						sourceUrl
					}
				}
				phasePostFields {
					phaseLabel
					sidebarImage {
						node {
							sourceUrl
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
