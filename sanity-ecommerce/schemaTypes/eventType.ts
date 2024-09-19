import { defineField, defineType } from "sanity";

export const eventType = defineField({
    name: 'event',
    title: 'Event',
    type: 'document',
    groups: [
        {name: 'details', title: 'Details'},
        {name: 'editorial', title: 'Editorial'}
    ],
    fields: [
        defineField({
            name: 'name',
            type: 'string',
            group: 'details'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {source: 'name'},
            validation: (rule) => rule
                .required()
                .error('Required to generate a page on the website'),
            group: 'details'
        }),
        defineField({
            name: 'eventType',
            type: 'string',
            options: {
                list: ['in-person', 'virtual'],
                layout: 'radio'
            },
            validation: (rule) => 
                rule.custom((value, context) => {
                    if(value === 'virtual' && context?.document?.venue !== null) {
                        return 'in-person event type need to be selected since a venue is available'
                    } 
                    return true
                }),
            group: 'details'
                
            
        }),
        defineField({
            name: 'eventDate',
            type: 'date',
            group: 'details'
        }),
        defineField({
            name: 'doorOpen',
            description: 'Number of minutes before the start time for admission',
            type: 'number',
            initialValue: 60,
            group: 'details'
        }),
        defineField({
            name: 'venue',
            type: 'reference',
            to: [{type: 'venue'}],
            readOnly: ({value, document}) => !value && document?.eventType === 'virtual',
            validation: (rule) => 
                rule.custom((value, context) => {
                    if (value && context?.document?.eventType === 'virtual' ){
                        return 'Only in-person event can have a venue'
                    }
                    return true
                }),
            group: 'details'
        }),
        defineField({
            name: 'headline',
            type: 'reference',
            to: [{type: 'artiste'}],
            group: 'details'
        }),
        defineField({
            name: 'image',
            type: 'image',
            group: 'editorial'
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{type: 'block'}],
            group: 'editorial'
        }),
        defineField({
            name: 'ticket',
            type: 'url',
            group: 'details'
        })

    ]
})