export default{
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    //these are fields our testimonals model will have
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            options:{
                //it means the user will be able to choose a crop when uploading an image
                hotspot: true,
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },

    ]
}