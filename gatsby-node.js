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

// Use Gatsby API to create our pages
exports.createPages = async ({ graphql, actions }) => {
	const { createPage, createRedirect } = actions
	// redirect root to home
	createRedirect({ fromPath: '/', toPath: '/home', redirectInBrowser: true, isPermanent: true })

	// main query
	const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            slug
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
						title
						slug
						excerpt
						content
						date(formatString: "ddd Do MMM Y")
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
	const singlePortfolio = path.resolve(`./src/templates/SinglePortfolio.js`)
	const blogPageTemplate = path.resolve(`./src/templates/BlogPage.js`)
	const singleBlog = path.resolve(`./src/templates/SingleBlog.js`)

	const getPageData = edge => {
		const { node, node: { slug } } = edge

		if (slug === 'projects') {
			return {
				template: slash(portfolioPageTemplate),
				context: {
					node: node,
					projects: allWordpressWpProjects.edges
				}
			}
		}

		return {
			template: slash(pageTemplate),
			context: node
		}
	}

	// Create main Pages
	allWordpressPage.edges.forEach(edge => {
		const { node: { slug } } = edge
		const { template, context } = getPageData(edge)

		createPage({
			path: slug,
			component: template,
			context: context,
		})
	})

	// Create (Paginated) Blog Pages
	const posts = allWordpressPost.edges
	const postsPerPage = 2
	const numPages = Math.ceil(posts.length / postsPerPage)

	Array.from({ length: numPages }).forEach((_, i) => {
		createPage({
			path: i === 0 ? `/blog` : `/blog/${i + 1}`,
			component: slash(blogPageTemplate),
			context: {
				limit: postsPerPage,
				skip: i * postsPerPage,
				numPages,
				currentPage: i + 1,
				posts: posts
			},
		})
	})

	// Create (Single) Blog Pages
	allWordpressPost.edges.forEach(edge => {
		createPage({
			path: `/blog/${edge.node.slug}`,
			component: slash(singleBlog),
			context: edge.node,
		})
	})

	// Create Portfolio Single Pages
	allWordpressWpProjects.edges.forEach(edge => {
		createPage({
			path: `/projects/${edge.node.slug}`,
			component: slash(singlePortfolio),
			context: edge.node,
		})
	})

}