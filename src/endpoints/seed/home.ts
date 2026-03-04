import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Media } from '@/payload-types'

type HomeArgs = {
  heroImage: Media
  metaImage: Media
}

export const home: (args: HomeArgs) => RequiredDataFromCollectionSlug<'pages'> = ({
  heroImage,
  metaImage,
}) => {
  return {
    slug: 'home',
    _status: 'published',
    hero: {
      type: 'highImpact',
      links: [
        {
          link: {
            type: 'custom',
            appearance: 'default',
            label: 'Our Products',
            url: '/posts',
          },
        },
        {
          link: {
            type: 'custom',
            appearance: 'outline',
            label: 'Get in Touch',
            url: '/contact',
          },
        },
      ],
      media: heroImage.id,
      richText: {
        root: {
          type: 'root',
          children: [
            {
              type: 'heading',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'From Fields to Tables, Sustainably Yours',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              tag: 'h1',
              version: 1,
            },
            {
              type: 'paragraph',
              children: [
                {
                  type: 'text',
                  detail: 0,
                  format: 0,
                  mode: 'normal',
                  style: '',
                  text: 'Established in 2017, Karmakoul is your trusted partner in premium organic commodity trading — supplying the world with the finest sesame, olive oil, baobab, and more from the heart of North Africa.',
                  version: 1,
                },
              ],
              direction: 'ltr',
              format: '',
              indent: 0,
              textFormat: 0,
              version: 1,
            },
          ],
          direction: 'ltr',
          format: '',
          indent: 0,
          version: 1,
        },
      },
    },
    layout: [
      {
        blockName: 'Our Mission',
        blockType: 'content',
        columns: [
          {
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [
                      {
                        type: 'text',
                        detail: 0,
                        format: 0,
                        mode: 'normal',
                        style: '',
                        text: 'Elevating Agricultural Excellence Globally',
                        version: 1,
                      },
                    ],
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    tag: 'h2',
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                version: 1,
              },
            },
            size: 'full',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: '🌿 Sesame & Oils', version: 1 }],
                    direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Organically grown Sudanese sesame seeds and cold-pressed sesame oil — rich in nutrients, bursting with natural flavour, and harvested to the highest international standards.', version: 1 }],
                    direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
                  },
                ],
                direction: 'ltr', format: '', indent: 0, version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: '🫒 Premium Olive Oil', version: 1 }],
                    direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Extra virgin olive oil sourced from the finest Mediterranean groves. Pure, aromatic, and full of character — the gold standard for kitchens and retailers worldwide.', version: 1 }],
                    direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
                  },
                ],
                direction: 'ltr', format: '', indent: 0, version: 1,
              },
            },
            size: 'oneThird',
          },
          {
            enableLink: false,
            richText: {
              root: {
                type: 'root',
                children: [
                  {
                    type: 'heading',
                    children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: '🌍 Global Reach', version: 1 }],
                    direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1,
                  },
                  {
                    type: 'paragraph',
                    children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Our products reach markets across North America, Europe, North Africa, and Asia — backed by competitive pricing and strategic alliances with certified organic producers.', version: 1 }],
                    direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
                  },
                ],
                direction: 'ltr', format: '', indent: 0, version: 1,
              },
            },
            size: 'oneThird',
          },
        ],
      },
      {
        blockName: 'Hero Product Image',
        blockType: 'mediaBlock',
        media: metaImage.id,
      },
      {
        blockName: 'Latest News',
        blockType: 'archive',
        categories: [],
        introContent: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Latest from Karmakoul', version: 1 }],
                direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1,
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Explore our latest news, product updates, and insights from the world of sustainable organic commodity trading.', version: 1 }],
                direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
              },
            ],
            direction: 'ltr', format: '', indent: 0, version: 1,
          },
        },
        populateBy: 'collection',
        relationTo: 'posts',
      },
      {
        blockName: 'CTA',
        blockType: 'cta',
        links: [
          {
            link: {
              type: 'custom',
              appearance: 'default',
              label: 'Enquire Now',
              url: '/contact',
            },
          },
        ],
        richText: {
          root: {
            type: 'root',
            children: [
              {
                type: 'heading',
                children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Ready to Source Premium Organic Products?', version: 1 }],
                direction: 'ltr', format: '', indent: 0, tag: 'h3', version: 1,
              },
              {
                type: 'paragraph',
                children: [{ type: 'text', detail: 0, format: 0, mode: 'normal', style: '', text: 'Whether you are a retailer, distributor, or food manufacturer — Karmakoul delivers the quality, consistency, and competitive pricing your business demands. Get in touch today.', version: 1 }],
                direction: 'ltr', format: '', indent: 0, textFormat: 0, version: 1,
              },
            ],
            direction: 'ltr', format: '', indent: 0, version: 1,
          },
        },
      },
    ],
    meta: {
      description: 'Karmakoul — premium organic commodity trading. Sesame seeds, sesame oil, olive oil, baobab and more, sustainably sourced from North Africa for global markets.',
      image: heroImage.id,
      title: 'Karmakoul | From Fields to Tables, Sustainably Yours',
    },
    title: 'Home',
  }
}
