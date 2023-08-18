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
      type: 'text',
      description: 'About section content',
    },
  ],
}

export default AboutSchema
