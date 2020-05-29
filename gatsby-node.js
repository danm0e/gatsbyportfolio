const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Enables and defines our aliases. Nice.
exports.onCreateWebpackConfig = ({ actions }) => {
	actions.setWebpackConfig({
		resolve: {
			alias: {
				"@components": path.resolve(__dirname, "src/components"),
				"@assets": path.resolve(__dirname, "src/assets"),
				"@layout": path.resolve(__dirname, "src/layout")
			}
		}
	})
}

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions
	createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })

	// The “graphql” function allows us to run arbitrary
	// queries against the local Gatsby GraphQL schema. Think of
	// it like the site has a built-in database constructed
	// from the fetched data that you can run queries against.
	const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
						template
						title
						content
          }
        }
			}
			
      allWordpressPost {
        edges {
          node {
            id
            path
            status
            template
						format
						title
						content
          }
        }
			}

			allWordpressWpProjects {
				edges {
					node {
						id
						title
						slug
						excerpt
						content
						featured_media {
							source_url
						}
					}
				}
			}

		}
  `)

	// Check for any errors
	if (result.errors) {
		throw new Error(result.errors)
	}

	// Access query results via object destructuring
	const { allWordpressPage, allWordpressPost, allWordpressWpProjects } = result.data

	// Assign Page Templates
	const pageTemplate = path.resolve(`./src/templates/Page.js`)
	const portfolioPageTemplate = path.resolve(`./src/templates/PortfolioPage.js`)
	const blogPageTemplate = path.resolve(`./src/templates/BlogPage.js`)

	const getPageTemplate = (type, path) => {
		console.log('----------------')
		console.log(path)
		console.log('----------------')

		if (type === 'projects.php') {
			console.log('----------------')
			console.log('GETTING PROJECTS')
			console.log('----------------')
			return slash(portfolioPageTemplate)
		}

		if (type === 'blog.php') {
			console.log('----------------')
			console.log('GETTING BLOG')
			console.log('----------------')
			return slash(blogPageTemplate)
		}

		return slash(pageTemplate)
	}

	// Create Page pages.

	// We want to create a detailed page for each page node.
	// The path field contains the relative original WordPress link
	// and we use it for the slug to preserve url structure.
	// The Page ID is prefixed with 'PAGE_'
	allWordpressPage.edges.forEach(edge => {
		// Gatsby uses Redux to manage its internal state.
		// Plugins and sites can use functions like "createPage"
		// to interact with Gatsby.
		createPage({
			// Each page is required to have a `path` as well
			// as a template component. The `context` is
			// optional but is often necessary so the template
			// can query data specific to each page.
			path: edge.node.path,
			component: getPageTemplate(edge.node.template, edge.node.path),
			context: edge.node,
		})
	})

	const singleBlog = path.resolve(`./src/templates/SingleBlog.js`)
	// We want to create a detailed page for each post node.
	// The path field stems from the original WordPress link
	// and we use it for the slug to preserve url structure.
	// The Post ID is prefixed with 'POST_'
	allWordpressPost.edges.forEach(edge => {
		createPage({
			path: edge.node.path,
			component: slash(singleBlog),
			context: edge.node,
		})
	})

	const singlePortfolio = path.resolve(`./src/templates/SinglePortfolio.js`)
	// configure automaticaly generated portfolio pages
	allWordpressWpProjects.edges.forEach(edge => {
		createPage({
			path: `/projects/${edge.node.slug}`,
			component: slash(singlePortfolio),
			context: edge.node,
		})
	})

}