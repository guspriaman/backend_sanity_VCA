export default{
    name:'masyarakats',
    title:'masyarakats',
    type: 'document',
    fields:[
        {
            name:'title',
            title:'Title',
            type:'string'
        },      
        {
            name:'description',
            title: 'Description',
            type: 'text',
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },      
    ]
}