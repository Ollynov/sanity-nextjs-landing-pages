export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f6025683a68073704a23869',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-xishs57q',
                  apiId: 'abbf34fa-2768-4464-bbd1-3b9516ed8d4e'
                },
                {
                  buildHookId: '5f6025683a6807358ea22592',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-jswaterg',
                  apiId: '6f207dff-1208-4f21-bafb-64ccd065fca4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ollynov/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-jswaterg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
