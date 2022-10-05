export default {
    name: 'development',
    title: 'Developments',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'location',
            title: 'Location',
            type: 'string',
        },
        {
            name: 'minbedrooms',
            title: 'Min Bedrooms',
            type: 'number',
        },
        {
            name: 'maxbedrooms',
            title: 'Max Bedrooms',
            type: 'number',
        },
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        },
        {
            name: 'gallery',
            title: 'Gallery',
            type: 'array',
            of: [{ type: 'image' }],
            options: {
                hotspot: true
            }
        },
    ]
}