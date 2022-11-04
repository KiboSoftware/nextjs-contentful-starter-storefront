import contentful from '@/cms'
import { contentfulGetters } from '@/cms/getters/contentfulGetters'

interface PageProps {
  entryUrl: string
}

const getContentfulPage = async (productCode: string) => {
  if (productCode) {
    const response = await contentful.fetchProductDetails(productCode)
    const productData = contentfulGetters.getContentfulProductData(
      response?.data?.productDetailsCollection?.items[0]
    )
    return {
      components: productData || [],
    }
  } else {
    const response = await contentful.fetchHomePage()
    const homePageData = contentfulGetters.getContentfulPageData(
      response?.data?.homePageCollection?.items
    )
    return {
      components: homePageData || [],
    }
  }
}

export const getPage = async (params: PageProps) => {
  return getContentfulPage(params.entryUrl)
}
