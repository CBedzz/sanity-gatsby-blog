export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f544dd99282d6e250b08039',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-jravhuh7',
                  apiId: '5b25f6b2-eea3-4f0a-9062-047d33e33ab6'
                },
                {
                  buildHookId: '5f544dd972c945399ef32086',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-915f6o9d',
                  apiId: 'ba8e2d6e-ade5-43f4-b982-fda5404f2bf9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/CBedzz/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-915f6o9d.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
