export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '620fa371500cf928bea04ef2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-uoj3skm7',
                  apiId: '9d15370f-aec6-4314-86a6-849615733e9e'
                },
                {
                  buildHookId: '620fa371736b9b2050e5c03b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-bm9t4cn1',
                  apiId: 'cc3aaada-684c-4f0b-a4ac-5102ca6fd821'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kevinalku9/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-bm9t4cn1.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
