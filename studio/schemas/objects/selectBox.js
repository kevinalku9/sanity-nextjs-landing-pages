export default {
    type: 'object',
    name: 'selectBox',
    title: 'Select Box',
    fields: [
      {
        name: 'heading',
        type: 'string',
        title: 'Heading',
        options: {
            list: [ 
              { title: 'Facebook', value: 'facebook' },
              { title: 'Twitter', value: 'twitter' }
            ]
          }
      },
    ],
    preview: {
      select: {
        title: 'heading',
      },
      prepare({ title }) {
        return {
          title,
          subtitle: 'select box item',
        };
      },
    },
  };
  