import { defineField, defineType } from "sanity";

export const artistType = defineField({
    name: 'artiste',
    title: 'Artiste',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            type: 'string',
        })
    ]
})