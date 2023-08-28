// const AboutSchema = {
//   title: 'about',
//   name: 'about',
//   type: 'document',
//   fields: [
//     {
//       title: 'title',
//       name: 'title',
//       type: 'string',

//       description: 'About section title',
//     },
//     {
//       title: 'Description',
//       name: 'description',
//       type: 'text',
//       description: 'About section content',

//     },
//   ],
// }

// export default AboutSchema

const AboutSchema = {
  title: 'about',
  name: 'about',
  type: 'document',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
      description: 'About section title',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      description: 'About section content',
      of: [{type: 'block'}],
    },
  ],
}

export default AboutSchema
