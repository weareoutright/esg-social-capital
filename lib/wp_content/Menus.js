import { gql } from '@pantheon-systems/wordpress-kit';
import { client } from '../WordPressClient';

export const getMenus = async () => {
	const query = gql`
		query Menus {
			menus {
				nodes {
					name
					menuItems {
						nodes {
							url
							label
							target
							cssClasses
						}
					}
				}
			}
		}
	`;

	const {
		data: { menus },
		headers,
	} = await client.rawRequest(query);

	return { menus, headers };
};
