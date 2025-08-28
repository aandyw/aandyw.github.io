import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const publicationsDirectory = path.join(process.cwd(), 'publications')

export interface Publication {
  slug: string
  title: string
  authors: string[]
  journal: string
  date: string
  type: string
  url: string
  selected: boolean
  [key: string]: any
}

export function getAllPublications(): Publication[] {
  if (!fs.existsSync(publicationsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(publicationsDirectory)
  const allPublicationsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(publicationsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data } = matter(fileContents)

      return {
        slug,
        ...data,
      } as Publication
    })

  return allPublicationsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getSelectedPublications(): Publication[] {
  const allPubs = getAllPublications()
  return allPubs.filter(pub => pub.selected === true)
}

export function getPublicationBySlug(slug: string): Publication | null {
  try {
    const fullPath = path.join(publicationsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data } = matter(fileContents)

    return {
      slug,
      ...data,
    } as Publication
  } catch (error) {
    return null
  }
}

export function getPublicationSlugs(): string[] {
  if (!fs.existsSync(publicationsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(publicationsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
