export default{
    name:'keluargas',
    title:'Keluargas',
    type: 'document',
    fields:[     
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