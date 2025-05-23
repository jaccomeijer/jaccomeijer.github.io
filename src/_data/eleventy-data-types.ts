import { TopicData } from '../green-lib/components/topic/topic'
import libmetadata from './libmetadata'
import refmetadata from './refmetadata'
import sitemetadata from './sitemetadata'
export type Libmetadata = typeof libmetadata
export type Refmetadata = typeof refmetadata
export type Sitemetadata = typeof sitemetadata

export type Env = {
  source: string
  runMode: string
  config: string
  root: string
}

export type Directory = {
  input: string
  inputFile: string
  inputGlob: string
  data: string
  includes: string
  layouts: string
  output: string
}

export type Eleventy = {
  version: string
  generator: string
  env: Env
  directories: Directory[]
}

export type Pkg = {
  name: string
  version: string
  description: string
  repository: string
  scripts: string
  keywords: string
  author: string
  license: string
  bugs: string
  homepage: string
  type: string
  dependencies: string
}

export type Page = {
  inputPath: string
  fileSlug: string
  filePathStem: string
  outputFileExtension: string
  templateSyntax: string
  date: string
  rawInput: string
  url: string
  outputPath: string
}

export type Collection = {
  template: object
  rawInput: string
  groupNumber: number
  data: EleventyData
  page: Page
}

export interface Navigation {
  heading?: string
  icon?: string
  id?: string
  navigationId?: string
  order?: number
  parent?: string
}

export interface UnderscoreData {
  libmetadata: Libmetadata
  refmetadata: Refmetadata
  sitemetadata: Sitemetadata
}

export interface FrontmatterData {
  date?: string
  lastmod?: string
  navigation?: Navigation
  permalink?: string
  tags?: string[]
  openerTopic?: TopicData
}

export interface EleventyData extends UnderscoreData, FrontmatterData {
  collections: Record<string, Collection[]>
  eleventy: Eleventy
  page: Page
  pkg: Pkg
}
