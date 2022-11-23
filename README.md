<h2 align="center">KiboCommerce & Next.JS & Contentful</h2>
​
<p align="center">
This is a headless ecommerce starter kit for KiboCommerce platform using Next.JS and Contentful
</p>

### Features

- Performant by default
- SEO Ready
- Internationalization
- Responsive
- UI Components built on top of Material UI 5
- Theming
- KiboCommerce data hooks
- PWA Ready
- Omni Channel Capability (Ship to home and Pickup in Store support)
- Contentful integration

## Getting Started

1. Clone this repo

```bash
git clone https://github.com/KiboSoftware/nextjs-contentful-starter-storefront.git
```

2. Change into directory and install dependencies

```bash
npm install
```

3. Copy .env template

```bash
cp .env.template .env.local
```

4. Configure env variables for your Kibo Commerce environment
5. Start Dev server

```bash
npm run dev
```

## Configuration

.env example

```bash
KIBO_API_HOST=t1234-s1234.sandbox.mozu.com
KIBO_AUTH_HOST=home.mozu.com
KIBO_CLIENT_ID=KIBO_APP.1.0.0.Release
KIBO_SHARED_SECRET=12345_Secret
CONTENTFUL_ACCESS_TOKEN=12345_Secret
CONTENTFUL_PREVIEW_ACCESS_TOKEN=12345_Secret
CONTENTFUL_SPACE_ID=12345_Secret_SpaceId
```

The following data is required to configure the storefront to communicate with your Kibo API Client.

- `apiHost` - Your Kibo Commerce API Host.
- `authHost` - Kibo Commerce Authentication Host Server. It is used to request an access token from Kibo Commerce OAuth 2.0 service. Production and Production sandbox, use `home.mozu.com`.
- `clientId` - Unique Application (Client) ID of your Application.
- `sharedSecret` - Secret API key used to authenticate application. Viewable from your [Kibo eCommerce Dev Center](https://mozu.com/login).

Visit [Kibo documentation](https://apidocs.kibong-perf.com/?spec=graphql#auth) for more details on API authentication

next.config.js example

```bash
contentFulAccessToken= 123_access_token
contentFulPreviewToken= 123_preview_token
contentFulSpaceId= 123_space_id
```

The following data is required to configure the storefront to communicate with your Contentful cms.

- `contentful-access-token` - Unique token used to authenticate your contentful cms
- `Contentful-preview-token` - Unique token used to authenticate preview mode for contentful
- `Contentful-space-id`- Unqiue space id to identify contentful application space

## Useful Commands

```bash
npm run dev # Start dev server
npm run build # Run production build
npm run start # Run production start
npm run generate-types # generate typescript Kibo API types from GraphQL Schema
npm run storybook # start storybook for
npm run test # run unit / integration tests
```

## Built with

- Framework - [Next.JS](https://nextjs.org/docs)
- Component Library - [Material UI 5](https://mui.com/material-ui/getting-started/overview/)
- Testing - [Jest](https://jestjs.io/docs/getting-started)
- Data Fetching / State Management - [React Query](https://react-query-v3.tanstack.com/overview)
- Localization - [Next i18Next](https://github.com/i18next/next-i18next)

## Pre-requisite

- Follow Steps mentioned in link for configuring contentful cms (https://github.com/KiboSoftware/contentful-space)
- Next, after above step data can be created on contentful website (Need an account prior on contentful cms)

## Running Contentful in Preview Mode

- Enable Preview Mode(HomePage/PDP Page)
  1. Add /api/contentful/enable-preview to the application url , which will run your application in preview mode
     ​
- Disable Preview Mode
  1. Click on exit Preview Mode in Header

## Contributions

All contributions welcome!
