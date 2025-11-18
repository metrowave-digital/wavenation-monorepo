// apps/cms/src/collections/Articles.ts

import type { CollectionConfig } from 'payload'
import { allowAdminsAnd } from '../access/control'

export const Articles: CollectionConfig = {
  slug: 'articles',
  admin: {
    useAsTitle: 'title',
  },

  access: {
    read: () => true,

    // Contributors, creators, DJs, editors, and admins can create drafts
    create: allowAdminsAnd(['editor', 'creator', 'contributor', 'host-dj']),

    // Only editors + admin can update others’ content
    update: allowAdminsAnd(['editor']),

    // Only Admin can delete
    delete: allowAdminsAnd(['admin']),
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'excerpt',
      type: 'textarea',
      required: true,
    },
    {
      name: 'mainCategory',
      type: 'select',
      required: true,
      options: ['Culture', 'Music', 'Entertainment', 'News', 'Opinion', 'Faith'],
    },
    {
      name: 'subCategory',
      type: 'text',
    },
    {
      name: 'tags',
      type: 'array',
      fields: [{ name: 'tag', type: 'text' }],
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
    },
    {
      name: 'isFeatured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
