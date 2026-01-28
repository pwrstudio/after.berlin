import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  studioHost: 'after-berlin',
  api: {
    projectId: '4lya2jpj',
    dataset: 'production',
  },
  deployment: {
    appId: '2131edb2d06bc0f2d81c5127',
  },
})
