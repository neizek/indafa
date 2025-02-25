import { defineBoot } from '#q-app/wrappers'
import { createI18n } from 'vue-i18n'

import messages from 'src/i18n'

export type MessageLanguages = keyof typeof messages
// Type-define 'en-US' as the master schema for the resource
export type MessageSchema = (typeof messages)['en-US']

// See https://vue-i18n.intlify.dev/guide/advanced/typescript.html#global-resource-schema-type-definition
/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  // define the locale messages schema
  export interface DefineLocaleMessage extends MessageSchema {}

  // define the datetime format schema
  export interface DefineDateTimeFormat {}

  // define the number format schema
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

export const languages = [
  { value: 'lv-LV', label: 'LAT', link: 'lv' },
  { value: 'en-US', label: 'ENG', link: 'en' },
  { value: 'ru-RU', label: 'RUS', link: 'ru' },
]

const langInLink = window.location.pathname.split('/')[1]
let locale = 'lv-LV'

if (langInLink) {
  const initalLang = languages.find((lang) => lang.link === langInLink)
  if (initalLang) {
    locale = initalLang.value
  }
}

export default defineBoot(({ app }) => {
  const i18n = createI18n<{ message: MessageSchema }, MessageLanguages>({
    locale: locale,
    legacy: false,
    messages,
  })

  // Set i18n instance on app
  app.use(i18n)
})
