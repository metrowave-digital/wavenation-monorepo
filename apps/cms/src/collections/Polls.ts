// apps/cms/src/collections/Polls.ts

import type { CollectionConfig } from 'payload';
import { allowAdminsAnd } from '../access/control';

export const Polls: CollectionConfig = {
  slug: 'polls',
  admin: {
    useAsTitle: 'question',
  },

  access: {
    read: () => true,
    create: allowAdminsAnd(['creator', 'contributor', 'host-dj']),
    update: allowAdminsAnd(['editor']),
    delete: allowAdminsAnd(['admin']),
  },

  fields: [
    {
      name: 'question',
      type: 'text',
      required: true,
    },
    {
      name: 'options',
      type: 'array',
      required: true,
      minRows: 2,
      maxRows: 4,
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'votes',
          type: 'number',
          defaultValue: 0,
        },
      ],
    },
    {
      name: 'isActive',
      type: 'checkbox',
      defaultValue: true,
    },
  ],
};
