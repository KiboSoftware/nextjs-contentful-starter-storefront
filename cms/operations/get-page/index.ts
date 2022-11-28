import contentful from '@/cms'
import { contentfulGetters } from '@/cms/getters/contentfulGetters'

interface PageProps {
  entryUrl: string
  preview?: boolean
}

const getContentfulPage = async (productCode: string, preview: boolean) => {
  if (productCode) {
    const response = await contentful.fetchProductDetails({ preview, productCode })
    const productData = contentfulGetters.getContentfulProductData(
      response?.data?.productDetailsCollection?.items[0]
    )
    return {
      components: productData || [],
    }
  } else {
    const response = await contentful.fetchHomePage({ preview })
    const homePageData = contentfulGetters.getContentfulPageData(
      response?.data?.homePageCollection?.items
    )
    return {
      components: homePageData || [],
    }
  }
}

export const getPage = async (params: PageProps) => {
  return getContentfulPage(params.entryUrl, params.preview || false)
}
