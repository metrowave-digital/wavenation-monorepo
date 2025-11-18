// apps/cms/src/collections/Media.ts

import type { CollectionConfig } from 'payload'
import { allowAdminsAnd } from '../access/control'

export const Media: CollectionConfig = {
  slug: 'media',

  admin: {
    useAsTitle: 'filename',
    defaultColumns: ['filename', 'updatedAt'],
  },

  access: {
    // Anyone can read
    read: () => true,

    // Contributors, creators, DJs, editors, admins can upload
    create: allowAdminsAnd(['editor', 'creator', 'contributor', 'host-dj']),

    // Only editors/admins can replace/edit files
    update: allowAdminsAnd(['editor']),

    // Only admin can delete
    delete: allowAdminsAnd(['admin']),
  },

  upload: {
    mimeTypes: ['image/*', 'video/*', 'audio/*'],

    imageSizes: [
      {
        name: 'thumbnail',
        width: 300,
        height: 300,
        position: 'center',
      },
      {
        name: 'medium',
        width: 800,
        height: undefined, // auto-scale height
      },
      {
        name: 'large',
        width: 1600,
        height: undefined,
      },
    ],
  },

  fields: [
    // You can add metadata fields here if needed later
    // Example:
    // {
    //   name: 'caption',
    //   type: 'text',
    // }
  ],
}
