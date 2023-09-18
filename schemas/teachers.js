export default {
    name: 'teachers',
    title: 'Teachers',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'imgUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'umurYear',
            title: 'umur Year',
            type: 'date', 
        },
        {
            name: 'nikNumber',
            title: 'Contact',
            type: 'string',
        },
    ],
}
