export default {
    name: 'graduationjuniors',
    title: 'Graduationjuniors',
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
            name: 'graduationYear',
            title: 'Graduation Year',
            type: 'date', 
        },
        {
            name: 'nikNumber',
            title: 'NIK Number',
            type: 'string',
        },
    ],
}
