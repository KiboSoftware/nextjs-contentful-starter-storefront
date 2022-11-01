import React from 'react'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import ProductDetailTemplate from './ProductDetailTemplate'
import { ProductCustomMock, ProductSubscriptionMock } from '@/__mocks__/stories'
import { cmsProductDetailMock } from '@/__mocks__/stories/cmsProductDetailMock'

export default {
  title: 'Page Templates/Product Detail',
  component: ProductDetailTemplate,
} as ComponentMeta<typeof ProductDetailTemplate>

const Template: ComponentStory<typeof ProductDetailTemplate> = (args) => (
  <ProductDetailTemplate {...args} />
)

export const Common = Template.bind({})
Common.args = {
  product: ProductCustomMock,
  breadcrumbs: [
    {
      text: 'Home',
      link: '/',
    },
  ],
  cmsProducts: {
    components: cmsProductDetailMock,
  },
}

export const WithPriceRange = Template.bind({})
WithPriceRange.args = {
  product: {
    ...ProductCustomMock,
    price: {
      price: null,
      salePrice: null,
    },
    priceRange: { lower: { price: 60, salePrice: 20 }, upper: { price: 200, salePrice: 100 } },
  },
  breadcrumbs: [
    {
      text: 'Home',
      link: '/',
    },
  ],
  cmsProducts: {
    components: cmsProductDetailMock,
  },
}

export const Mobile = Template.bind({})
Mobile.args = {
  product: ProductCustomMock,
  cmsProducts: {
    components: cmsProductDetailMock,
  },
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'iphone12promax',
  },
}

export const WithMoreDetails = Template.bind({})
WithMoreDetails.args = {
  product: ProductCustomMock,
  isQuickViewModal: true,
}

export const WithSubscription = Template.bind({})
WithSubscription.args = {
  product: ProductSubscriptionMock,
}
